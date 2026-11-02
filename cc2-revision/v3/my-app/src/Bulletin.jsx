import { useState } from "react";

function Bulletin({ etudiants, matieres, notes }) {
  const [numero, setNumero] = useState("");

  const getMatiereByCode = (code) =>
    matieres.find((m) => m.codeMatiere === code);

  const numeroSaisi = numero.trim();
  const etudiant = etudiants.find((et) => et.numero === numeroSaisi);

  const lignes = etudiant
    ? notes
      .filter((n) => n.numero === etudiant.numero)
      .map((n) => {
        const matiere = getMatiereByCode(n.codeMatiere);
        const coefficient = matiere ? matiere.coefficient : 0;
        return {
          ...n,
          intitule: matiere ? matiere.intitule : "Inconnue",
          coefficient,
          notePonderee: n.note * coefficient,
        };
      })
    : [];

  const totalPondere = lignes.reduce((somme, l) => somme + l.notePonderee, 0);
  const totalCoefficients = lignes.reduce(
    (somme, l) => somme + l.coefficient,
    0
  );
  const moyenne = totalCoefficients > 0 ? totalPondere / totalCoefficients : 0;

  return (
    <section>
      <h2>Bulletin</h2>

      <div className="recherche">
        <label>
          Numéro étudiant
          <input value={numero} onChange={(e) => setNumero(e.target.value)} />
        </label>
      </div>

      {numeroSaisi !== "" && !etudiant && (
        <p className="erreur">Ce numéro d'étudiant n'existe pas.</p>
      )}

      {etudiant && (
        <>
          <p>
            Étudiant: <strong>{etudiant.prenom} {etudiant.nom}</strong>
          </p>

          {lignes.length === 0 ? (
            <p className="vide">Aucune note pour cet étudiant.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Code matière</th>
                  <th>Intitulé</th>
                  <th>Note</th>
                  <th>Coefficient</th>
                  <th>Note pondérée</th>
                </tr>
              </thead>
              <tbody>
                {lignes.map((l) => (
                  <tr key={l.id}>
                    <td>{l.codeMatiere}</td>
                    <td>{l.intitule}</td>
                    <td>{l.note}</td>
                    <td>{l.coefficient}</td>
                    <td>{l.notePonderee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {lignes.length > 0 && (
            <p className="total">Moyenne générale: {moyenne.toFixed(2)} / 20</p>
          )}
        </>
      )}
    </section>
  );
}

export default Bulletin;
