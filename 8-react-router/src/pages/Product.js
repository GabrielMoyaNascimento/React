import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {

    const { id } = useParams()

    const url = 'http://localhost:3000/products/' + id

    const {data: product, loading, error} = useFetch(url)
    return (
        <>
            <div>Product id: {id} </div>
            {error && <p>There was an error</p>}
            {loading && <p>Loading...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>U${product.price}</p>
                    {/* Nested routes */}
                    <Link to={`/products/${product.id}/info`}>Reviews</Link>
                </div>
            )}
        </>
    )
}

export default Product