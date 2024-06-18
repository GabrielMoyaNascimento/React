import { useState } from "react";

const ConditionalRender = () => {

    const [x] = useState(false);

    const [name, setName] = useState("João");

    return ( 
        <div>
            <div>
                <h1>Is it will appear?</h1>
                {x && <p>If x is true, Yes!</p>}
                {!x && <p>Now x is false</p>}
            </div>
            <div>
                <h1>What is your name?</h1>
                {name === "Gabriel" ? ( <p>Your name is Gabriel</p>
                ) : (
                    <p>Name not found!</p>
                )}
                <button onClick={() => setName("Gabriel")}>Change name</button>
            </div>
        </div>
    )
}

export default ConditionalRender