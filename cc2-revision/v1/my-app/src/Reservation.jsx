import { useState } from "react";

function Reservations({
  clients,
  chambres,
  reservations,
  ajouterReservation,
  annulerReservation,
}) {
  const [numero, setNumero] = useState("");
  const [codeChambre, setCodeChambre] = useState(chambres[0].codeChambre);
  const [nuits, setNuits] = useState(1);
  const [erreur, setErreur] = useState("");

  const [saisieFiltre, setSaisieFiltre] = useState("");
  const [filtre, setFiltre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numeroClient = numero.trim();

    if (!clients.some((c) => c.numero === numeroClient)) {
      setErreur("Ce numéro de client n'existe pas.");
      return;
    }
    if (Number(nuits) < 1) {
      setErreur("Le nombre de nuits doit être d'au moins 1.");
      return;
    }

    ajouterReservation({
      numero: numeroClient,
      codeChambre,
      nuits: Number(nuits),
    });
    setNumero("");
    setNuits(1);
    setErreur("");
  };

  const handleFiltrer = () => setFiltre(saisieFiltre.trim());

  const handleToutAfficher = () => {
    setSaisieFiltre("");
    setFiltre("");
  };

  const reservationsAffichees =
    filtre === ""
      ? reservations
      : reservations.filter((r) => r.numero === filtre);

  return (
    <section>
      <h2>Nouvelle réservation</h2>
      <form className="formulaire" onSubmit={handleSubmit} noValidate>
        <label>
          Numéro client
          <input value={numero} onChange={(e) => setNumero(e.target.value)} />
        </label>

        <label>
          Chambre
          <select
            value={codeChambre}
            onChange={(e) => setCodeChambre(e.target.value)}
          >
            {chambres.map((ch) => (
              <option key={ch.codeChambre} value={ch.codeChambre}>
                {ch.type} ({ch.prixNuit} DH/nuit)
              </option>
            ))}
          </select>
        </label>

        <label>
          Nuits
          <input
            type="number"
            min="1"
            value={nuits}
            onChange={(e) => setNuits(e.target.value)}
          />
        </label>

        <button type="submit">Ajouter</button>
      </form>
      {erreur && <p className="erreur">{erreur}</p>}

      <h2>Réservations</h2>
      <div className="filtre">
        <label>
          Numéro client
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

      {reservationsAffichees.length === 0 ? (
        <p className="vide">Aucune réservation à afficher.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Code chambre</th>
              <th>Nuits</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reservationsAffichees.map((r) => (
              <tr key={r.id}>
                <td>{r.numero}</td>
                <td>{r.codeChambre}</td>
                <td>{r.nuits}</td>
                <td>
                  <button
                    className="danger"
                    onClick={() => annulerReservation(r.id)}
                  >
                    Annuler
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

export default Reservations;
