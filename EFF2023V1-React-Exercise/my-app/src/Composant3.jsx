import { useState } from 'react'

function Composant3({ salaries }) {
  const [service, setService] = useState('')
  const [resultat, setResultat] = useState(null)

  const chercher = () => {
    const trouves = salaries.filter(
      (s) => s.service.nomser.toLowerCase() === service.trim().toLowerCase()
    )
    setResultat(trouves)
  }

  return (
    <div>
      <h1>Recherche par service:</h1>

      <label>Entrer le nom du service:</label>
      <br />
      <input type="text" value={service} onChange={(e) => setService(e.target.value)} />
      <br /><br />
      <button onClick={chercher}>chercher</button>

      {resultat && (
        <div>
          <h2>Résultat</h2>
          {resultat.length > 0 ? (
            <ul>
              {resultat.map((s) => (
                <li key={s._id}>
                  Nom: {s.nomsal} Prénom: {s.prenomsal}
                </li>
              ))}
            </ul>
          ) : (
            <p>{"Aucun salarié n'est affecté à ce service"}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Composant3
