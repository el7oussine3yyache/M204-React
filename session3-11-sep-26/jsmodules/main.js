// notion des modules en JS

import { etudiants, trouverEtudiant } from "./etudiants.js";

console.log(etudiants[1]);
console.log(trouverEtudiant(1));

import Etablissement from "./etudiants.js";
console.log(`Nom d'etablissment: ${Etablissement}`);
