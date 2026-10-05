export default function StudentCard({ id, nom, note, onDelete }) {
  // Determine text color based on the grade threshold (10/20)
  const gradeColorClass = note < 10 ? "text-red-600 font-bold" : "text-green-600 font-bold";

  return (
    <div className="rounded-xl bg-white p-5 shadow border border-slate-100 transition-all duration-200 hover:shadow-md flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded">
            ID: {id}
          </span>
          {/* Apply the dynamic class here */}
          <span className={`text-sm ${gradeColorClass}`}>
            {note} / 20
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-800">{nom}</h3>
      </div>

      <button
        onClick={() => onDelete(id)}
        className="mt-4 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium rounded-md transition-colors w-full text-center"
      >
        Supprimer
      </button>
    </div>
  );
}
