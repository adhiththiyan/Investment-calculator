import { useState } from "react";
import  "./userinput.css"

const initialInput = {
    'current-saving':10000,
    'yearly-saving':1200,
    'expected-saving':7,
    "duration":10
}

const UserInput = (props) => {

    const [userInput, setUserInput] = useState(initialInput)
    const submitHandler = (event) => {
        event.preventDefault()
        props.calculate(userInput)
    }
    const resetHandler = () => {
        setUserInput(initialInput)
    }

    const inputHandler = (input, value) => {
        setUserInput((previous)=>{
            return{
                ...previous,
                [input]: +value
            }
        })
    }
    return (
        <div className='container'>
            <form onSubmit={submitHandler} className="form">
                <div className="input-group">
                    <p>
                        <label htmlFor="current-saving">Current Savings</label>
                        <input type="number" onChange={(event) => 
                            inputHandler('current-saving', event.target.value)
                        }
                        value={userInput["current-saving"]}
                        id="current-saving" />
                    </p>
                    <p>
                        <label htmlFor="yearly-saving">Yearly Savings</label>
                        <input type="number"  onChange={(event) => 
                            inputHandler('yearly-saving', event.target.value)
                        } 
                        value={userInput["yearly-saving"]}
                        id="yearly-saving"/>
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected-saving">Expected Interest</label>
                        <input type="number" onChange={(event) => 
                            inputHandler('expected-saving', event.target.value)
                        } 
                        value={userInput["expected-saving"]}
                        id="expected-saving"/>
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration</label>
                        <input type="number" onChange={(event) => 
                            inputHandler('duration', event.target.value)
                        } 
                        value={userInput["duration"]}
                        id="duration"/>
                    </p>
                </div>
                <p>
                    <button onClick={resetHandler} type="reset">Reset</button>
                    <button type="submit">Calculate</button>

                </p>
            </form>
        </div>
    )
}
export default UserInput