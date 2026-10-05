export default function StudentCard(props) {
  return (
    <>

      <div className="rounded-xl bg-white p-5 shadow">
        <h3 className="text-lg font-bold">
          {props.nom}
        </h3>

        <p className="mt-2 text-slate-500">
          Note : {props.note} / 20
        </p>
      </div>
    </>
  )
}
