import { useState, useEffect } from 'react';
import { data } from './Data/classesData.js';
import ClassSelect from './Components/ClassSelect';
import InternCard from './Components/InternCard';

export default function App() {
  const [classList, setClassList] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');

  useEffect(() => {
    const keys = Object.keys(data);
    setClassList(keys);

    if (keys.length > 0) {
      setSelectedClass(keys[0]);
    }
  }, []);

  const currentInterns = data[selectedClass] || [];

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="border-b border-slate-200 pb-4">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Gestion des Stagiaires OFPPT
          </h1>
        </header>

        {/* Dropdown Selector */}
        <section className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <ClassSelect
            classList={classList}
            selectedClass={selectedClass}
            onSelectClass={setSelectedClass}
          />
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Liste des Stagiaires ({selectedClass})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentInterns.map((intern) => (
              <InternCard key={intern.id} intern={intern} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
