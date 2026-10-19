import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Composant1 from './Composant1.jsx'
import Composant2 from './Composant2.jsx'
import Composant3 from './Composant3.jsx'

function App() {
  const [salaries, setSalaries] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/salaries')
      .then((res) => res.json())
      .then((data) => setSalaries(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Voitures</Link> | <Link to="/composant2">Salariés</Link> | <Link to="/composant3">Recherche</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Composant1 />} />
        <Route path="/composant2" element={<Composant2 salaries={salaries} />} />
        <Route path="/composant3" element={<Composant3 salaries={salaries} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
