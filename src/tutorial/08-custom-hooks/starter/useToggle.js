import { useState } from "react";

const useToggle =(initValue) =>{
    
    const [show,setShow] =useState(initValue);

    const toggle =() =>{
        setShow(!show);
    };

    return {show,toggle};
}
export default useToggle;