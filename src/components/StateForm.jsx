import { useState } from "react";



const StateForm = () => {
    const [email,setEmail]=useState('ari@gamail');
    const [error,setError]=useState('');
    const [password,setPassword]=useState(null)
    const handelSubmit = e =>{
        e.preventDefault();
        if(password.length<6){
            setError('password must be in 6 word');
        }
        else{
            setError('');
        }
        console.log(email);

        
    }

    const handelEmail=e=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePassword= e => {
        setPassword(e.target.value);
    }
     
    return (
        <div>
        <form onSubmit={handelSubmit}>
            <input type="text" name="name" />
            <br />
            <div>
            <p>email</p>
            <input
            onChange={handelEmail}
            type="text" name="email" />
            </div>
            <br />
            <input type="text" name="phone" />
            <br />
            <input
            onChange={handlePassword}
            type="password" name="password" required/>
            <br />
            <input type="submit" value='submit' id="submit" />
            
             {
                    error && <p>{error}</p>
                }
        </form>
    </div>
    );
    
};

export default StateForm;