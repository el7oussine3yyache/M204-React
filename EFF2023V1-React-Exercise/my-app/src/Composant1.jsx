import { useState } from 'react'

function Composant1() {
  const [matricule, setMatricule] = useState('')
  const [marque, setMarque] = useState('Toyota')
  const [date, setDate] = useState('')
  const [couleur, setCouleur] = useState('Noir')
  const [voiture, setVoiture] = useState(null)

  const confirmer = () => {
    setVoiture({ matricule, marque, date, couleur })
  }

  return (
    <div>
      <h1>Gestion Voitures</h1>

      <label>Matricule:</label>
      <br />
      <input type="text" value={matricule} onChange={(e) => setMatricule(e.target.value)} />
      <br /><br />

      <label>Marque:</label>
      <br />
      <select value={marque} onChange={(e) => setMarque(e.target.value)}>
        <option value="Toyota">Toyota</option>
        <option value="Renault">Renault</option>
        <option value="Peugeot">Peugeot</option>
        <option value="Dacia">Dacia</option>
      </select>
      <br /><br />

      <label>Date de mise en circulation:</label>
      <br />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <br /><br />

      <label>Couleur:</label>
      <br />
      <select value={couleur} onChange={(e) => setCouleur(e.target.value)}>
        <option value="Noir">Noir</option>
        <option value="Blanc">Blanc</option>
        <option value="Gris">Gris</option>
        <option value="Rouge">Rouge</option>
      </select>
      <br /><br />

      <button onClick={confirmer}>Confirmer</button>

      {voiture && (
        <div>
          <h2>Récapitulatif des informations :</h2>
          <p>Matricule: {voiture.matricule}</p>
          <p>Marque: {voiture.marque}</p>
          <p>Date Mise en circulation: {voiture.date}</p>
          <p>Couleur: {voiture.couleur}</p>
        </div>
      )}
    </div>
  )
}

export default Composant1
