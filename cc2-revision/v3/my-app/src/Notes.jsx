import { useState } from "react";

function Notes({ etudiants, matieres, notes, ajouterNote, supprimerNote }) {
  const [numero, setNumero] = useState("");
  const [codeMatiere, setCodeMatiere] = useState(matieres[0].codeMatiere);
  const [note, setNote] = useState("");
  const [erreur, setErreur] = useState("");

  const [saisieFiltre, setSaisieFiltre] = useState("");
  const [filtre, setFiltre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numeroEtudiant = numero.trim();

    if (!etudiants.some((et) => et.numero === numeroEtudiant)) {
      setErreur("Ce numéro d'étudiant n'existe pas.");
      return;
    }
    if (note === "" || Number(note) < 0 || Number(note) > 20) {
      setErreur("La note doit être comprise entre 0 et 20.");
      return;
    }

    ajouterNote({
      numero: numeroEtudiant,
      codeMatiere,
      note: Number(note),
    });
    setNumero("");
    setNote("");
    setErreur("");
  };

  const handleFiltrer = () => setFiltre(saisieFiltre.trim());

  const handleToutAfficher = () => {
    setSaisieFiltre("");
    setFiltre("");
  };

  const notesAffichees =
    filtre === "" ? notes : notes.filter((n) => n.numero === filtre);

  return (
    <section>
      <h2>Nouvelle note</h2>
      <form className="formulaire" onSubmit={handleSubmit} noValidate>
        <label>
          Numéro étudiant
          <input value={numero} onChange={(e) => setNumero(e.target.value)} />
        </label>

        <label>
          Matière
          <select
            value={codeMatiere}
            onChange={(e) => setCodeMatiere(e.target.value)}
          >
            {matieres.map((m) => (
              <option key={m.codeMatiere} value={m.codeMatiere}>
                {m.intitule} (coef. {m.coefficient})
              </option>
            ))}
          </select>
        </label>

        <label>
          Note /20
          <input
            type="number"
            min="0"
            max="20"
            step="0.25"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </label>

        <button type="submit">Ajouter</button>
      </form>
      {erreur && <p className="erreur">{erreur}</p>}

      <h2>Notes</h2>
      <div className="filtre">
        <label>
          Numéro étudiant
          <input
            value={saisieFiltre}
            onChange={(e) => setSaisieFiltre(e.target.value)}
          />
        </label>
        <button onClick={handleFiltrer}>Filtrer</button>
        <button className="secondaire" onClick={handleToutAfficher}>
          Tout afficher
        </button>
      </div>

      {notesAffichees.length === 0 ? (
        <p className="vide">Aucune note à afficher.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Étudiant</th>
              <th>Code matière</th>
              <th>Note</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {notesAffichees.map((n) => (
              <tr key={n.id}>
                <td>{n.numero}</td>
                <td>{n.codeMatiere}</td>
                <td>{n.note}</td>
                <td>
                  <button
                    className="danger"
                    onClick={() => supprimerNote(n.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default Notes;
