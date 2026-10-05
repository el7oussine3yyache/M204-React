import Aside from "./Aside"
import Content from "./Content"
import Header from "./Header"
export default function App() {
  return (
    <>
      <Header />
        <div class="flex">

      <Aside />
      <Content />
    </div>
    </>
  )
}