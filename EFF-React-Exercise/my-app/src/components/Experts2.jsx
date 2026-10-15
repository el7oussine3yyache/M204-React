import { useState, useEffect } from "react";
import Expert from "./Expert";

function Experts2() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/experts2")
      .then((response) => response.json())
      .then((data) => setExperts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Liste des experts (API)</h2>
      <ul>
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </ul>
    </div>
  );
}

export default Experts2;
