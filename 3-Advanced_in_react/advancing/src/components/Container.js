const Container = ({children, MyValue}) => {
    return (
        <div>
            <h1>This is the title of the container</h1>
            {children}
            <p>The value is: {MyValue}</p>
        </div>
    )
}

export default Container