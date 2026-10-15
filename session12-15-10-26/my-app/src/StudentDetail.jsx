import { useParams, Link } from "react-router-dom";

export default function StudentDetail({ etudiants }) {
  const { id } = useParams();
  const student = etudiants.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div className="p-8 max-w-lg mx-auto mt-12 bg-white rounded-2xl shadow-sm border border-slate-200 text-center">
        <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          !
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Étudiant introuvable</h2>
        <p className="text-slate-500 mb-6">Aucun enregistrement ne correspond à l'identifiant URL : <span className="font-mono font-semibold text-slate-700">{id}</span></p>
        <Link
          to="/etudiants"
          className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors shadow-sm"
        >
          Retourner à la liste
        </Link>
      </div>
    );
  }

  const isAdmis = student.note >= 10;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <Link
          to="/etudiants"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 px-3 py-1.5 rounded-lg"
        >
          Retour aux étudiants
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white flex justify-between items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Dossier Étudiant</span>
            <h2 className="text-3xl font-extrabold mt-1">{student.nom}</h2>
          </div>
          <span className="text-sm font-mono bg-slate-800 border border-slate-700 px-3 py-1 rounded-lg text-slate-300">
            ID #{student.id}
          </span>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-xs font-medium text-slate-500 mb-1">Note de session</p>
              <p className="text-3xl font-extrabold text-slate-800">{student.note} <span className="text-sm font-normal text-slate-400">/ 20</span></p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-xs font-medium text-slate-500 mb-1">Statut académique</p>
              <p className={`text-lg font-bold mt-1 ${isAdmis ? "text-emerald-600" : "text-rose-600"}`}>
                {isAdmis ? "Admis (Validé)" : "Redoublant (Non validé)"}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
