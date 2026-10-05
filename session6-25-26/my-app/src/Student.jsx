import { useState } from "react";
const Student = () => {
  const [guestName, setGuestName] = useState("Guest")
  const greet = guestName => setGuestName(guestName)
  return (
    <>
      <button onClick={() => greet("EL HOUSSINE")} className="px-4 py-2 bg-green-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors">Click Me</button>
      <h3 className="text-xl font-semibold text gray-900">Welcome {guestName}</h3>
    </>
  )
}
export default Student
