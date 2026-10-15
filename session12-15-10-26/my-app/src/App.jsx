import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";
import Content from "./Content";
import Footer from "./Footer";
import Student from "./Student";
import StudentDetail from "./StudentDetail";
export default function App({ etudiants: initialEtudiants }) {
  const [etudiants, setEtudiants] = useState(initialEtudiants);

  const handleAddStudent = (newStudent) => {
    setEtudiants([...etudiants, newStudent]);
  };

  const handleDeleteStudent = (idToDelete) => {
    setEtudiants(etudiants.filter((s) => s.id !== idToDelete));
  };

  const handleUpdateStudent = (updatedStudent) => {
    setEtudiants(
      etudiants.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <div className="flex flex-1">
        <Aside />
        <div className="flex-1 flex flex-col justify-between">
          <Routes>
            <Route
              path="/"
              element={
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">Accueil</h2>
                  <Student />
                </div>
              }
            />

            <Route
              path="/etudiants"
              element={
                <Content
                  etudiants={etudiants}
                  onAddStudent={handleAddStudent}
                  onDeleteStudent={handleDeleteStudent}
                  onUpdateStudent={handleUpdateStudent}
                />
              }
            />

            <Route
              path="/notes"
              element={
                <div className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold text-slate-800">Statistiques & Notes</h2>
                  <Footer etudiants={etudiants} />
                </div>
              }
            />
            <Route
              path="/etudiants/:id"
              element={<StudentDetail etudiants={etudiants} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
