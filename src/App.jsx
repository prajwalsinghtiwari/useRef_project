import DyanamicFrom from "./components/DyanamicFrom"
import ValidationFrom from "./components/ValidationFrom"
import CustomSubmission from "./components/CustomSubmission"
function App() {
 
  return (
    <>
    <h2>Dyanamic inputs focus</h2>
     <DyanamicFrom/>
     <h2>Real-time input validation</h2>
     <ValidationFrom/>
     <h2>custom form handling submission</h2>
     <CustomSubmission/>
    </>
  )
}

export default App
