export default function ClassSelect({ classList, selectedClass, onSelectClass }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <label htmlFor="class-dropdown" className="font-semibold text-slate-700">
        Choisir une classe:
      </label>
      <select
        id="class-dropdown"
        value={selectedClass}
        onChange={(e) => onSelectClass(e.target.value)}
        className="px-4 py-2 border border-slate-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-slate-800"
      >
        {classList.map((className) => (
          <option key={className} value={className}>
            {className}
          </option>
        ))}
      </select>
    </div>
  );
}
