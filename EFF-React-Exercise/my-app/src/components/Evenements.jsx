function Evenements({ evenements }) {
  const total = evenements.reduce(
    (somme, e) => somme + e.cout_journalier * e["durée"],
    0
  );

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Thème</th>
          <th>Date début</th>
          <th>Date fin</th>
          <th>Description</th>
          <th>Coût journalier</th>
          <th>Durée</th>
          <th>Coût total</th>
        </tr>
      </thead>
      <tbody>
        {evenements.map((e, index) => (
          <tr key={index}>
            <td>{e["thème"]}</td>
            <td>{e.date_debut}</td>
            <td>{e.date_fin}</td>
            <td>{e.description}</td>
            <td>{e.cout_journalier}</td>
            <td>{e["durée"]}</td>
            <td>{e.cout_journalier * e["durée"]}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="6">Coût total de tous les événements</td>
          <td>{total}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Evenements;
