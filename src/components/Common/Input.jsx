import { useState } from 'react'

export default function Input({ label, identifier, ...props}) {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier] : newValue
            }
        })
    }

    return <li>
        <label>{label}</label>
        <input {...props}
         value={userInput[identifier]}
         onChange={(event) => handleChange(identifier, event.target.value)}/>
    </li>
}