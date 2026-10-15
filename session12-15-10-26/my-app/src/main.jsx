import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './App.css'

const etudiants = [
  { id: 1, nom: "Ahmed", note: 20 },
  { id: 2, nom: "Ilyass", note: 19 },
  { id: 3, nom: "Hamza", note: 19 },
  { id: 4, nom: "Potato", note: 17 }
]

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App etudiants={etudiants} />
  </BrowserRouter>
)
