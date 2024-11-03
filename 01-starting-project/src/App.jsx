import Header from "./componentes/Header"
import Result from "./componentes/Result"
import { useState } from "react"
import UserInput from "./componentes/UserInput"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: "1000",
    annualInvestment: "1200",
    expectedReturn: "6",
    duration: "10"
  }
  )
  const inputIsValid=userInput.duration>=1

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }
  
  return (
    <>
      <Header />
      <UserInput input={userInput} onChange={handleChange}/>
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Result input={userInput}/>}
    </>
  )
}

export default App
