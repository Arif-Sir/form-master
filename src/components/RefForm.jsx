// import React from 'react';

import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef=useRef(null);
    useEffect(() => {
        nameRef.current.focus();
    },[])
    

    const handelSubmit= e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
    }
    return (
        <div>
             <form onSubmit={handelSubmit}>
                <input  ref={nameRef} type="text" name="name" />
                <br />
                <input type="text" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
                <input type="submit" value='submit' id="submit" />
            </form>
        </div>
    );
};

export default RefForm;