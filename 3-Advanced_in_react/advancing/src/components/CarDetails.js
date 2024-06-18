const CarDetails = ({brand, km, color, newCar}) => {
    return (
        <div>
            <ul>
                <li>Brand: {brand}</li>
                <li>KM: {km}</li>
                <li>Color: {color}</li>
            </ul>
            <h3>Is new car? {newCar ? "Yes" : "No"}</h3>
        </div>
    )
}

export default CarDetails