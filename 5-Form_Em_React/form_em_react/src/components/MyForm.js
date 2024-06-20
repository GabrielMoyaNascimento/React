import './MyForm.css'
import { useState } from 'react';

const MyForm = ({user}) => {
    {/* Creating State */}
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState( user ? user.email : '')
    const [bio, setBio] = useState( user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (event) => {
        setName(event.target.value)
        console.log(name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Submiting form')
        console.log({name, email, bio, role})

        {/* Resetting form */}
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

    return(
        <div>
            {/* Creating Form */}
            <div>
                {/* Handle Submit */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={name}
                            placeholder="Enter your name"
                            onChange={handleName}
                        />
                    </div>
                    {/* Creating Label with Input */}
                    <label>
                        <span>E-mail</span>
                        <input 
                            type="email" 
                            name="email"
                            value={email} 
                            placeholder="Enter your email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </label>
                    {/* Creating Textarea */}
                    <label>
                        <span>Bio:</span>
                        <textarea 
                            name="bio" 
                            placeholder='Tell us about yourself'  
                            onChange={ (event) => setBio(event.target.value)}
                            value={bio}></textarea>            
                    </label>

                    {/* Creating Input Select */}
                    <label>
                        <select value={role} name="role" onChange={(event) => setRole(event.target.value)}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="root">Root</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
}

export default MyForm