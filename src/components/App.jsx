import React from 'react'
import Header from './Layout/Header.jsx'
import Main from './Layout/Main.jsx'
import Section from './Common/Section.jsx'
import UList from './Common/UList.jsx'
import Input from './Common/Input.jsx'

const App = () => {
    return (
        <>
            <Header/>
            <Main>
                <Section id='user-input'>
                    <UList className='input-group'>
                        <Input label='Initial Investment' identifier='initialInvestment' type='number' required />
                        <Input label='Annual Investment' identifier='annualInvestment' type='number' required />
                    </UList>

                    <UList className='input-group'>
                        <Input label='Expected Return' identifier='expectedReturn' type='number' required />
                        <Input label='Duration' identifier='duration' type='number' required />
                    </UList>
                </Section>
            </Main>
        </>
    )
}

export default App