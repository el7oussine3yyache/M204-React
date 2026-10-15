import { useState } from "react";
import expertsData from "../data";

function Formulaire() {
  const [theme, setTheme] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [cout, setCout] = useState("");
  const [expert, setExpert] = useState("");
  const [resultat, setResultat] = useState(null);

  const confirmer = () => {
    setResultat({ theme, dateDebut, dateFin, cout, expert });
  };

  return (
    <div>
      <h2>Formulaire</h2>

      <div>
        <label>Thème : </label>
        <input
          type="text"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </div>

      <div>
        <label>Date de début : </label>
        <input
          type="date"
          value={dateDebut}
          onChange={(e) => setDateDebut(e.target.value)}
        />
      </div>

      <div>
        <label>Date de fin : </label>
        <input
          type="date"
          value={dateFin}
          onChange={(e) => setDateFin(e.target.value)}
        />
      </div>

      <div>
        <label>Coût : </label>
        <input
          type="number"
          value={cout}
          onChange={(e) => setCout(e.target.value)}
        />
      </div>

      <div>
        <label>Expert : </label>
        <select value={expert} onChange={(e) => setExpert(e.target.value)}>
          <option value="">-- Choisir un expert --</option>
          {expertsData.map((ex) => (
            <option key={ex.id} value={ex.nom_complet}>
              {ex.nom_complet}
            </option>
          ))}
        </select>
      </div>

      <button onClick={confirmer}>Confirmer</button>

      {resultat && (
        <div>
          <h3>Informations saisies</h3>
          <p>Thème : {resultat.theme}</p>
          <p>Date de début : {resultat.dateDebut}</p>
          <p>Date de fin : {resultat.dateFin}</p>
          <p>Coût : {resultat.cout}</p>
          <p>Expert : {resultat.expert}</p>
        </div>
      )}
    </div>
  );
}

export default Formulaire;
