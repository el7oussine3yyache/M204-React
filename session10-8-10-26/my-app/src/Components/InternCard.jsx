export default function InternCard({ intern }) {
  const isAdmis = intern.note >= 10;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-slate-200 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-slate-800">{intern.nom}</h3>
        <p className="text-slate-500 mt-1">ID: {intern.id}</p>
        <p className="text-lg font-semibold mt-3 text-slate-700">
          Note: <span className="text-slate-900 font-bold">{intern.note}/20</span>
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
        <span className="text-sm font-medium text-slate-600">Statut:</span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${isAdmis
            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
            : 'bg-rose-100 text-rose-800 border border-rose-300'
            }`}
        >
          {isAdmis ? 'Admis' : 'Non Admis'}
        </span>
      </div>
    </div>
  );
}
