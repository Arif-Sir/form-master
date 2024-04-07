import { Children } from "react";


const ReuseableForm = ({formtitle ,handelSubmit,submitBtnText='Submit',children}) => {
    const localSubmit = e =>{
        e.preventDefult();
        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
            
        }
        handelSubmit(data);
    }
    
    return (
        <div>
        {children}
             <form onSubmit={localSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="text" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
                <input type="submit" value={submitBtnText} id="submit" />
            </form>
        </div>
    );
};

export default ReuseableForm;