import { useRef ,useState } from "react";

function ValidationFrom(){

    const inputRef = useRef(null);

   const [isValid , setIsValid] = useState(false);

   function HandleValidation(){
    setIsValid(inputRef.current.value.lenght >=8)
    return;
   }

    return(
        <div>
            <input onChange={HandleValidation}
            ref={inputRef}
             type="text"
            placeholder="enter atlest 8 characters"
            style={{borderColor: isValid ? "green":"red"}}
            />
            {isValid ? <p>input valid</p>: <p>input minmum 8 words</p>}
        </div>
    )
}

export default ValidationFrom;

