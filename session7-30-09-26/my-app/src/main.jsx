import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const etudiants = [{ id: 1, nom: "Ahmed", note: 20 },
{ id: 2, nom: "Ilyass", note: 19 },
{ id: 3, nom: "Hamza", note: 19 },
{ id: 4, nom: "Potato", note: 17 }
]

createRoot(document.getElementById('root')).render(
  <App etudiants={etudiants} />
)
