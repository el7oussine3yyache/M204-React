import { useState, useEffect } from "react";
import Notes from "./Notes";
import Bulletin from "./Bulletin";

const etudiants = [
  { numero: "1", nom: "Ziani", prenom: "Meryem" },
  { numero: "2", nom: "Fassi", prenom: "Karim" },
];

const matieres = [
  { codeMatiere: "M1", intitule: "React", coefficient: 3 },
  { codeMatiere: "M2", intitule: "Base de données", coefficient: 2 },
  { codeMatiere: "M3", intitule: "Anglais", coefficient: 1 },
];

const notesInitial = [{ id: 1, numero: "1", codeMatiere: "M1", note: 15 }];

function App() {
  const [notes, setNotes] = useState(notesInitial);
  const [page, setPage] = useState("notes");

  useEffect(() => {
    document.title = `Notes saisies : ${notes.length}`;
  }, [notes]);

  const ajouterNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  const supprimerNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="app">
      <h1>Notes des étudiants</h1>

      <nav>
        <button onClick={() => setPage("notes")}>Notes</button>
        <button onClick={() => setPage("bulletin")}>Bulletin</button>
      </nav>

      {page === "notes" && (
        <Notes
          etudiants={etudiants}
          matieres={matieres}
          notes={notes}
          ajouterNote={ajouterNote}
          supprimerNote={supprimerNote}
        />
      )}

      {page === "bulletin" && (
        <Bulletin etudiants={etudiants} matieres={matieres} notes={notes} />
      )}
    </div>
  );
}

export default App;
