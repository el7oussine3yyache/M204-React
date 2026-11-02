import { useState } from "react";

function Fiche({ adherents, livres, emprunts }) {
  const [numero, setNumero] = useState("");

  const getLivreByCode = (code) => livres.find((l) => l.codeLivre === code);

  const numeroSaisi = numero.trim();
  const adherent = adherents.find((a) => a.numero === numeroSaisi);

  const lignes = adherent
    ? emprunts
      .filter((e) => e.numero === adherent.numero)
      .map((e) => {
        const livre = getLivreByCode(e.codeLivre);
        return {
          ...e,
          titre: livre ? livre.titre : "Inconnu",
          tarifJour: livre ? livre.tarifJour : 0,
        };
      })
    : [];

  const montantTotal = lignes.reduce(
    (somme, l) => somme + l.tarifJour * l.jours,
    0
  );
  const joursTotal = lignes.reduce((somme, l) => somme + l.jours, 0);

  return (
    <section>
      <h2>Fiche de paiement</h2>

      <div className="recherche">
        <label>
          Numéro adhérent
          <input value={numero} onChange={(e) => setNumero(e.target.value)} />
        </label>
      </div>

      {numeroSaisi !== "" && !adherent && (
        <p className="erreur">Ce numéro d'adhérent n'existe pas.</p>
      )}

      {adherent && (
        <>
          <p>
            Adhérent: <strong>{adherent.prenom} {adherent.nom}</strong>
          </p>

          {lignes.length === 0 ? (
            <p className="vide">Aucun emprunt pour cet adhérent.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Code livre</th>
                  <th>Titre</th>
                  <th>Jours</th>
                  <th>Tarif par jour</th>
                  <th>Montant</th>
                </tr>
              </thead>
              <tbody>
                {lignes.map((l) => (
                  <tr key={l.id}>
                    <td>{l.codeLivre}</td>
                    <td>{l.titre}</td>
                    <td>{l.jours}</td>
                    <td>{l.tarifJour} DH</td>
                    <td>{l.tarifJour * l.jours} DH</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <p className="total">Montant total à payer: {montantTotal} DH</p>
          <p className="total">Total de jours empruntés: {joursTotal}</p>
        </>
      )}
    </section>
  );
}

export default Fiche;
