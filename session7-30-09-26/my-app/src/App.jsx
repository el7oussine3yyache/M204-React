import Aside from "./Aside"
import Content from "./Content"
import Header from "./Header"
export default function App({ etudiants }) {
  return (
    <>
      <Header />
      <div className="flex">

        <Aside />
        <Content etudiants={etudiants} />
      </div>
    </>
  )
}
