import { Route, Routes } from "react-router-dom"
import Form from "./pages/Form"
import Table from "./pages/Table"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Table/>} />
      <Route path="/form" element={<Form />} />
      <Route path="/form/:id" element={<Form />} />
    </Routes>
  )
}
export default App