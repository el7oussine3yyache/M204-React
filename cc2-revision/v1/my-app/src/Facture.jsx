import { useState } from "react";

function Facture({ clients, chambres, reservations }) {
  const [numero, setNumero] = useState("");

  const getChambreByCode = (code) =>
    chambres.find((ch) => ch.codeChambre === code);

  const numeroSaisi = numero.trim();
  const client = clients.find((c) => c.numero === numeroSaisi);

  const lignes = client
    ? reservations
      .filter((r) => r.numero === client.numero)
      .map((r) => {
        const chambre = getChambreByCode(r.codeChambre);
        return {
          ...r,
          type: chambre ? chambre.type : "Inconnu",
          prixNuit: chambre ? chambre.prixNuit : 0,
        };
      })
    : [];

  const total = lignes.reduce((somme, l) => somme + l.prixNuit * l.nuits, 0);

  return (
    <section>
      <h2>Facture</h2>

      <div className="recherche">
        <label>
          Numéro client
          <input value={numero} onChange={(e) => setNumero(e.target.value)} />
        </label>
      </div>

      {numeroSaisi !== "" && !client && (
        <p className="erreur">Ce numéro de client n'existe pas.</p>
      )}

      {client && (
        <>
          <p>
            Client: <strong>{client.prenom} {client.nom}</strong>
          </p>

          {lignes.length === 0 ? (
            <p className="vide">Aucune réservation pour ce client.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Code chambre</th>
                  <th>Type</th>
                  <th>Nuits</th>
                  <th>Prix par nuit</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {lignes.map((l) => (
                  <tr key={l.id}>
                    <td>{l.codeChambre}</td>
                    <td>{l.type}</td>
                    <td>{l.nuits}</td>
                    <td>{l.prixNuit} DH</td>
                    <td>{l.prixNuit * l.nuits} DH</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <p className="total">Montant total: {total} DH</p>
        </>
      )}
    </section>
  );
}

export default Facture;
