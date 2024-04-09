import { useState } from 'react'

import Header from './Layout/Header.jsx'
import Main from './Layout/Main.jsx'
import Section from './Common/Section.jsx'
import UList from './Common/UList.jsx'
import Input from './Common/Input.jsx'
import Results from './Results/Results.jsx'

const App = () => {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    const inputIsValid = userInput.duration >= 1

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier] : +newValue
            }
        })
    }

    return (
        <>
            <Header/>
            <Main>
                <Section id='user-input'>
                    <UList className='input-group'>
                        <Input userInput={userInput} label='Initial Investment' onChange={handleChange} identifier='initialInvestment' type='number' required />
                        <Input userInput={userInput} label='Annual Investment' onChange={handleChange} identifier='annualInvestment' type='number' required />
                    </UList>

                    <UList className='input-group'>
                        <Input userInput={userInput} label='Expected Return' onChange={handleChange} identifier='expectedReturn' type='number' required />
                        <Input userInput={userInput} label='Duration' onChange={handleChange} identifier='duration' type='number' required />
                    </UList>
                </Section>
                <Section>
                    { !inputIsValid && <p className='center'>Please enter a duration greater than zero.</p> }
                    { inputIsValid && <Results input={userInput}/> }
                </Section>
            </Main>
        </>
    )
}

export default App