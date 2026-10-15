import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentCard({ id, nom, note, onDelete, onUpdate }) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [oEtudiant, setoEtudiant] = useState({ id, nom, note });

  const handleSave = (e) => {
    e.preventDefault();
    onUpdate({
      id: oEtudiant.id,
      nom: oEtudiant.nom.trim(),
      note: Number(oEtudiant.note),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setoEtudiant({ id, nom, note });
    setIsEditing(false);
  };

  const isAdmis = note >= 10;
  const gradeBadgeClass = isAdmis
    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
    : "bg-rose-50 text-rose-700 border-rose-200";

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200 flex flex-col justify-between group">
      {isEditing ? (
        <form onSubmit={handleSave} className="space-y-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
              ID: {id} (Verrouillé)
            </span>
          </div>
          <div>
            <label className="text-xs text-slate-500 font-medium">Nom complet</label>
            <input
              type="text"
              value={oEtudiant.nom}
              onChange={(e) => setoEtudiant({ ...oEtudiant, nom: e.target.value })}
              className="w-full border border-slate-300 px-3 py-1.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              required
            />
          </div>
          <div>
            <label className="text-xs text-slate-500 font-medium">Note (/20)</label>
            <input
              type="number"
              min="0"
              max="20"
              step="0.5"
              value={oEtudiant.note}
              onChange={(e) => setoEtudiant({ ...oEtudiant, note: e.target.value })}
              className="w-full border border-slate-300 px-3 py-1.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              required
            />
          </div>
          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors shadow-sm"
            >
              Enregistrer
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold py-2 rounded-lg transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md tracking-wide">
              ID #{id}
            </span>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${gradeBadgeClass}`}>
              {note} / 20 ({isAdmis ? "Admis" : "Redoublant"})
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-800 tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
            {nom}
          </h3>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => navigate(`/etudiants/${id}`)}
              className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Voir le profil in detail</span>
            </button>

            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="flex-1 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
              >
                Modifier
              </button>
              <button
                onClick={() => {
                  if (window.confirm(`Voulez-vous vraiment supprimer l'étudiant ${nom} ?`)) {
                    onDelete(id);
                  }
                }}
                className="flex-1 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-semibold rounded-lg transition-colors"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
