import { useState, useEffect } from "react";
import Reservations from "./Reservation";
import Facture from "./Facture";

const clients = [
  { numero: "1", nom: "Alami", prenom: "Sara" },
  { numero: "2", nom: "Benani", prenom: "Omar" },
];

const chambres = [
  { codeChambre: "1", type: "Simple", prixNuit: 400 },
  { codeChambre: "2", type: "Double", prixNuit: 650 },
  { codeChambre: "3", type: "Suite", prixNuit: 1200 },
];

const reservationsInitial = [{ id: 1, numero: "1", codeChambre: "2", nuits: 3 }];

function App() {
  const [reservations, setReservations] = useState(reservationsInitial);
  const [page, setPage] = useState("reservations");

  useEffect(() => {
    document.title = `Réservations : ${reservations.length}`;
  }, [reservations]);

  const ajouterReservation = (reservation) => {
    setReservations([...reservations, { ...reservation, id: Date.now() }]);
  };

  const annulerReservation = (id) => {
    setReservations(reservations.filter((r) => r.id !== id));
  };

  return (
    <div className="app">
      <h1>Hôtel</h1>

      <nav>
        <button onClick={() => setPage("reservations")}>Réservations</button>
        <button onClick={() => setPage("facture")}>Facture</button>
      </nav>

      {page === "reservations" && (
        <Reservations
          clients={clients}
          chambres={chambres}
          reservations={reservations}
          ajouterReservation={ajouterReservation}
          annulerReservation={annulerReservation}
        />
      )}

      {page === "facture" && (
        <Facture
          clients={clients}
          chambres={chambres}
          reservations={reservations}
        />
      )}
    </div>
  );
}

export default App;
