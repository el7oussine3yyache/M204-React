import Evenements from "./Evenements";

function Expert({ expert }) {
  return (
    <li>
      <h3>{expert.nom_complet}</h3>
      <Evenements evenements={expert["événements"]} />
    </li>
  );
}

export default Expert;
