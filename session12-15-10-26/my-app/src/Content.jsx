import { useState } from "react";
import StudentCard from "./StudentCard.jsx";

export default function Content({ etudiants, onAddStudent, onDeleteStudent, onUpdateStudent }) {
  const [idInput, setIdInput] = useState("");
  const [nomInput, setNomInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!idInput || !nomInput || !noteInput) return;

    const newStudent = {
      id: Number(idInput),
      nom: nomInput,
      note: Number(noteInput),
    };

    if (etudiants.some((s) => s.id === newStudent.id)) {
      alert("Un étudiant avec cet ID existe déjà!");
      return;
    }

    onAddStudent(newStudent);

    setIdInput("");
    setNomInput("");
    setNoteInput("");
  };

  const filteredStudents = etudiants.filter((student) => {
    const query = searchQuery.toLowerCase().trim();
    return (
      student.id.toString().includes(query) ||
      student.nom.toLowerCase().includes(query)
    );
  });

  return (
    <main className="p-8 bg-slate-50 flex-1">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">
        Gestion des étudiants
      </h2>

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

      <section className="mb-6">
        <input
          type="text"
          placeholder="Rechercher par ID ou Nom..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
        />
      </section>

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
                onDelete={onDeleteStudent}
                onUpdate={onUpdateStudent}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
