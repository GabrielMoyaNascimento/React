import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Gabriel", "João", "Maria"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Gabriel", age: 20},
        {id: 2, name: "João", age: 25},
        {id: 3, name: "Maria", age: 30},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => user.id !== randomNumber);
        })
    }
    return (
        <div>
            <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))} 
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random</button>
        </div>
    )
}

export default ListRender