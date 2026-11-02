import { useState, useEffect } from "react";
import Emprunts from "./Emprunts";
import Fiche from "./Fiche";

const adherents = [
  { numero: "10", nom: "Idrissi", prenom: "Yassine" },
  { numero: "20", nom: "Tazi", prenom: "Hajar" },
];

const livres = [
  { codeLivre: "L1", titre: "Algorithmique", tarifJour: 2 },
  { codeLivre: "L2", titre: "JavaScript", tarifJour: 3 },
  { codeLivre: "L3", titre: "Bases de données", tarifJour: 4 },
];

const empruntsInitial = [{ id: 1, numero: "10", codeLivre: "L2", jours: 7 }];

function App() {
  const [emprunts, setEmprunts] = useState(empruntsInitial);
  const [page, setPage] = useState("emprunts");

  useEffect(() => {
    document.title = `Emprunts en cours : ${emprunts.length}`;
  }, [emprunts]);

  const ajouterEmprunt = (emprunt) => {
    setEmprunts([...emprunts, { ...emprunt, id: Date.now() }]);
  };

  const retournerLivre = (id) => {
    setEmprunts(emprunts.filter((e) => e.id !== id));
  };

  return (
    <div className="app">
      <h1>Bibliothèque</h1>

      <nav>
        <button onClick={() => setPage("emprunts")}>Emprunts</button>
        <button onClick={() => setPage("fiche")}>Fiche</button>
      </nav>

      {page === "emprunts" && (
        <Emprunts
          adherents={adherents}
          livres={livres}
          emprunts={emprunts}
          ajouterEmprunt={ajouterEmprunt}
          retournerLivre={retournerLivre}
        />
      )}

      {page === "fiche" && (
        <Fiche adherents={adherents} livres={livres} emprunts={emprunts} />
      )}
    </div>
  );
}

export default App;
