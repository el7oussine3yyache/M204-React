import { useState } from "react";

function Emprunts({
  adherents,
  livres,
  emprunts,
  ajouterEmprunt,
  retournerLivre,
}) {
  const [numero, setNumero] = useState("");
  const [codeLivre, setCodeLivre] = useState(livres[0].codeLivre);
  const [jours, setJours] = useState(1);
  const [erreur, setErreur] = useState("");

  const [saisieFiltre, setSaisieFiltre] = useState("");
  const [filtre, setFiltre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numeroAdherent = numero.trim();

    if (!adherents.some((a) => a.numero === numeroAdherent)) {
      setErreur("Ce numéro d'adhérent n'existe pas.");
      return;
    }
    if (Number(jours) < 1) {
      setErreur("Le nombre de jours doit être d'au moins 1.");
      return;
    }

    ajouterEmprunt({
      numero: numeroAdherent,
      codeLivre,
      jours: Number(jours),
    });
    setNumero("");
    setJours(1);
    setErreur("");
  };

  const handleFiltrer = () => setFiltre(saisieFiltre.trim());

  const handleToutAfficher = () => {
    setSaisieFiltre("");
    setFiltre("");
  };

  const empruntsAffiches =
    filtre === "" ? emprunts : emprunts.filter((e) => e.numero === filtre);

  return (
    <section>
      <h2>Nouvel emprunt</h2>
      <form className="formulaire" onSubmit={handleSubmit} noValidate>
        <label>
          Numéro adhérent
          <input value={numero} onChange={(e) => setNumero(e.target.value)} />
        </label>

        <label>
          Livre
          <select
            value={codeLivre}
            onChange={(e) => setCodeLivre(e.target.value)}
          >
            {livres.map((l) => (
              <option key={l.codeLivre} value={l.codeLivre}>
                {l.titre} ({l.tarifJour} DH/jour)
              </option>
            ))}
          </select>
        </label>

        <label>
          Jours
          <input
            type="number"
            min="1"
            value={jours}
            onChange={(e) => setJours(e.target.value)}
          />
        </label>

        <button type="submit">Ajouter</button>
      </form>
      {erreur && <p className="erreur">{erreur}</p>}

      <h2>Emprunts</h2>
      <div className="filtre">
        <label>
          Numéro adhérent
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

      {empruntsAffiches.length === 0 ? (
        <p className="vide">Aucun emprunt à afficher.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Adhérent</th>
              <th>Code livre</th>
              <th>Jours</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {empruntsAffiches.map((e) => (
              <tr key={e.id}>
                <td>{e.numero}</td>
                <td>{e.codeLivre}</td>
                <td>{e.jours}</td>
                <td>
                  <button
                    className="danger"
                    onClick={() => retournerLivre(e.id)}
                  >
                    Retourner
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

export default Emprunts;
