import { useRef } from "react"

function DyanamicFrom(){

    const useRef1 = useRef("")
    const useRef2 = useRef("")
    const useRef3 = useRef("")

    function HandleTab(e,ref){
        if(e.key==="Tab"){
            e.preventDefault();
            ref.current.focus()
        }  
    }
    return(
        <div>
        <input ref={useRef1} onKeyDown={(e)=>HandleTab (e,useRef2)} type="text" placeholder="field-1"/><br/>
        <input ref={useRef2} onKeyDown={(e)=>HandleTab (e,useRef3)} type="text" placeholder="field-2"/><br/>
        <input ref={useRef3} onKeyDown={(e)=>HandleTab (e,useRef1)} type="text" placeholder="field-3"/>
        </div>
    )
}
export default DyanamicFrom