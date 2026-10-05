// notion des modules en JS

export const etudiants = [
  { id: 1, nom: 'Sara', note: 15 },
  { id: 2, nom: 'Yosef', note: 13 },
  { id: 3, nom: 'Ali', note: 18 },
];

export const trouverEtudiant = id => etudiants.find((e) => e.id === id);

const Etablissement = "ISFO";
export default Etablissement;
