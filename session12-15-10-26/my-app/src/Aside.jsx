import { NavLink } from "react-router-dom";

export default function Aside() {
  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md transition-colors ${isActive
      ? "bg-blue-600 text-white font-medium"
      : "text-slate-300 hover:bg-slate-800"
    }`;

  return (
    <aside className="min-h-screen w-64 bg-slate-900 p-5 text-white flex-shrink-0">
      <h2 className="mb-5 font-bold text-lg text-slate-200">
        Menu
      </h2>

      <ul className="space-y-2">
        <li>
          <NavLink to="/" className={linkClass}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/etudiants" className={linkClass}>
            Étudiants
          </NavLink>
        </li>
        <li>
          <NavLink to="/notes" className={linkClass}>
            Notes
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
