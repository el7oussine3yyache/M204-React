const alist = [{nom: "Ahmed",note: 20},
               {nom: "Ilyass",note: 19},
               {nom: "Hamza",note: 19},
               {nom: "Potato",note: 11}
]

import StudentCard from "./StudentCard.jsx";

export default function Content() {
  return (
        <div className="flex">

    <main className="flex-1 p-8">
      <h2 className="text-3xl font-bold">
        Liste des étudiants
      </h2>

      <div className="mt-6 grid grid-cols-3 gap-5">
        {alist.map((item) => {
          return <StudentCard nom={item.nom} note={item.note}/>
        })}
      </div>
    </main>
    </div>
  )
}
