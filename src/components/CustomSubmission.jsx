import React, {useRef , useState} from 'react'

const CustomSubmission =() => {
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const [error , setError] = useState("")
    function handleSubmit(e){
        e.preventDefault()

        const formData = {
            input1 :inputRef1.current.value,
            input2 :inputRef2.current.value,
        }

        if(formData.input1 == ""){
            setError("input-1 cannot be empty")
            return;
        }else if(formData.input2 == ""){
            setError("input-2 cannot be empty")
            return;
        }

    }
  return (
   <form onSubmit={handleSubmit}>
    <input ref={inputRef1} type="text" placeholder='input1'/>
    <input ref={inputRef2} type="text" placeholder='input2' />
    <button type='submit'>submit</button>
    {error&& <p style={{color: "red"}}>{error}</p>}
   </form>
  )
}

export default CustomSubmission;
