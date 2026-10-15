import expertsData from "../data";
import Expert from "./Expert";

function Experts1() {
  return (
    <div>
      <h2>Liste des experts</h2>
      <ul>
        {expertsData.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </ul>
    </div>
  );
}

export default Experts1;
