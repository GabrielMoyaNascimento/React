import { useParams } from "react-router-dom";

function Info() {
    const { id } = useParams()
    return (
      <div>Reviews for product id: {id} </div>
    )
}

export default Info