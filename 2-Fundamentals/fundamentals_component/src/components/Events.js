const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Rendering this!</h1>
        }else{
            return <h1>Not rendering this!</h1>
        }
    }

    return (
        <div>
            <div>
                <div>
                    <button onClick={handleMyEvent}>Press me</button>
                </div>
            </div>
            <div>
                <div>
                    <button onClick={()=>console.log('This has been clicked')}>
                        Press me please!
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <button onClick={()=>{
                        if(true){
                            console.log('This didnt happened');
                        }
                    }}>
                        Press me too!
                    </button>
                </div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events;