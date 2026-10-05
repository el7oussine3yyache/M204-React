import { useState } from "react";
import StudentCard from "./StudentCard.jsx";

export default function Content({ etudiants: initialEtudiants }) {
  // Initialize state with props passed from main.jsx
  const [list, setList] = useState(initialEtudiants);

  // Form State for creating a new student
  const [idInput, setIdInput] = useState("");
  const [nomInput, setNomInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  // Search State for finding a student by ID or Name
  const [searchQuery, setSearchQuery] = useState("");

  // CREATE: Add student handler
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!idInput || !nomInput || !noteInput) return;

    const newStudent = {
      id: Number(idInput),
      nom: nomInput,
      note: Number(noteInput),
    };

    // Check for duplicate ID
    if (list.some((s) => s.id === newStudent.id)) {
      alert("Un étudiant avec cet ID existe déjà!");
      return;
    }

    setList([...list, newStudent]);

    // Reset form inputs
    setIdInput("");
    setNomInput("");
    setNoteInput("");
  };

  // DELETE: Remove student handler
  const handleDelete = (idToDelete) => {
    setList(list.filter((student) => student.id !== idToDelete));
  };

  // READ / FIND: Filter students based on ID or Name
  const filteredStudents = list.filter((student) => {
    const query = searchQuery.toLowerCase().trim();
    return (
      student.id.toString().includes(query) ||
      student.nom.toLowerCase().includes(query)
    );
  });

  return (
    <main className="flex-1 p-8 bg-slate-50 min-h-screen">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">
        Gestion des étudiants
      </h2>

      {/* CREATE FORM */}
      <section className="bg-white p-6 rounded-xl shadow-sm border mb-8">
        <h3 className="text-lg font-bold text-slate-700 mb-4">
          Ajouter un étudiant
        </h3>
        <form onSubmit={handleAddStudent} className="flex flex-wrap gap-4">
          <input
            type="number"
            placeholder="ID"
            value={idInput}
            onChange={(e) => setIdInput(e.target.value)}
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-28"
            required
          />
          <input
            type="text"
            placeholder="Nom"
            value={nomInput}
            onChange={(e) => setNomInput(e.target.value)}
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[150px]"
            required
          />
          <input
            type="number"
            placeholder="Note (/20)"
            min="0"
            max="20"
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
            required
          />
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
          >
            Ajouter
          </button>
        </form>
      </section>

      {/* SEARCH / FIND BAR */}
      <section className="mb-6">
        <input
          type="text"
          placeholder="Rechercher par ID ou Nom..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
        />
      </section>

      {/* READ: LIST DISPLAY */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-slate-700">
          Liste ({filteredStudents.length})
        </h3>

        {filteredStudents.length === 0 ? (
          <p className="text-slate-500 italic">Aucun étudiant trouvé.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredStudents.map((item) => (
              <StudentCard
                key={item.id}
                id={item.id}
                nom={item.nom}
                note={item.note}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
