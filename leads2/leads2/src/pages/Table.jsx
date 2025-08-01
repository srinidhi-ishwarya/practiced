import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import TableData from "../components/TableData"
const Table = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }
  return (
    <section className=" px-20 py-20 ">
        <div className="bg-white rounded px-20 py-20" >
            <div className="d-flex justify-between ">
                <h3>All Leads</h3>
                <Button name={"Add Lead"} hanldeClick={handleClick}/>
            </div>
            <TableData/>
        </div>
    </section>
  )
}
export default Table