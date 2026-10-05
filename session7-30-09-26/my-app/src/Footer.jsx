export default function Footer({ etudiants = [] }) {
  const admis = etudiants.filter(s => s.note >= 10)
  const redoublants = etudiants.filter(s => s.note < 10)

  let total = 0
  for (let i = 0; i < etudiants.length; i++) {
    total += etudiants[i].note
  }
  const moyenne = etudiants.length > 0 ? (total / etudiants.length).toFixed(2) : 0

  return (
    <footer className="bg-slate-900 text-white py-6 px-4 mt-8 rounded-lg shadow-md">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">

        <div className="bg-slate-800 p-4 rounded-md border border-slate-700">
          <p className="text-sm font-medium text-slate-400">Nombre d'admis</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1">{admis.length}</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-md border border-slate-700">
          <p className="text-sm font-medium text-slate-400">Nombre de redoublants</p>
          <p className="text-2xl font-bold text-rose-400 mt-1">{redoublants.length}</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-md border border-slate-700">
          <p className="text-sm font-medium text-slate-400">Moyenne générale</p>
          <p className="text-2xl font-bold text-blue-400 mt-1">{moyenne}<span className="text-base font-normal text-slate-400">/20</span></p>
        </div>

      </div>
    </footer>
  )
}
