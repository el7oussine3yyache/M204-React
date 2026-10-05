import { useState } from "react";

export default function StudentCard({ id, nom, note, onDelete, onUpdate }) {
  // Local state to toggle between view mode and edit mode

  const [isEditing, setIsEditing] = useState(false);

  // Local state for the editable fields

  /*const [editNom, setEditNom] = useState(nom);
  const [editNote, setEditNote] = useState(note); */

  const [oEtudiant, setoEtudiant] = useState({id: id, nom: nom, note: note})

  const handleSave = (e) => {
    e.preventDefault();
    // Send updated object back up to Content.jsx
    onUpdate({
      id: oEtudiant.id,
      nom: oEtudiant.nom,
      note: oEtudiant.note,
    });
    // Exit edit mode
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset values to original props and exit edit mode
    setEditNom(oEtudiant.nom);
    setEditNote(oEtudiant.note);
    setIsEditing(false);
  };

  const gradeColorClass = note < 10 ? "text-red-600 font-bold" : "text-green-600 font-bold";

  return (
    <div className="rounded-xl bg-white p-5 shadow border border-slate-100 transition-all duration-200 flex flex-col justify-between">
      {isEditing ? (
        /* EDIT MODE FORM */
        <form onSubmit={handleSave} className="space-y-3">
          <div className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded w-max mb-2">
            ID: {id} (Read-only)
          </div>
          <div>
            <label className="text-xs text-slate-500 font-medium">Nom</label>
            <input
              type="text"
              value={oEtudiant.nom}
              onChange={(e) => setoEtudiant({...oEtudiant,nom: e.target.value})}
              className="w-full border px-2 py-1 text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="text-xs text-slate-500 font-medium">Note (/20)</label>
            <input
              type="number"
              min="0"
              max="20"
              value={oEtudiant.note}
              onChange={(e) => setoEtudiant({...oEtudiant,note: e.target.value})}
              className="w-full border px-2 py-1 text-sm rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs py-1.5 rounded transition-colors font-medium"
            >
              Sauvegarder
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs py-1.5 rounded transition-colors font-medium"
            >
              Annuler
            </button>
          </div>
        </form>
      ) : (
        /* VIEW MODE DISPLAY */
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded">
              ID: {oEtudiant.id}
            </span>
            <span className={`text-sm ${gradeColorClass}`}>
              {oEtudiant.note} / 20
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-800">{oEtudiant.nom}</h3>

          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="flex-1 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-medium rounded-md transition-colors text-center"
            >
              Modifier
            </button>
            <button
              onClick={() => onDelete(oEtudiant.id)}
              className="flex-1 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium rounded-md transition-colors text-center"
            >
              Supprimer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
