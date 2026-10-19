function Composant2({ salaries }) {
  return (
    <div>
      <h1>Liste des Salariés</h1>
      <table border="1">
        <thead>
          <tr>
            <th>nom</th>
            <th>prénom</th>
            <th>Fonction</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((s) => (
            <tr key={s._id}>
              <td>{s.nomsal}</td>
              <td>{s.prenomsal}</td>
              <td>{s.fonction}</td>
              <td>{s.service.nomser}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Composant2
