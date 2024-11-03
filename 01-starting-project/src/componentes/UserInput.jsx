export default function UserInput({onChange,input}) {
   
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label> Initial Investment</label>

                    <input type="number" required onChange={(event)=>onChange("initialInvestment",event.target.value)} value={input.initialInvestment} />
                </p>
                <p>
                    <label> Annual Invenstment</label>
                    <input type="number" required onChange={(event)=>onChange("annualInvestment",event.target.value)} value={input.annualInvestment} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label> expectedReturn</label>
                    <input type="number" required onChange={(event)=>onChange("expectedReturn",event.target.value)} value={input.expectedReturn} />
                </p>
                <p>
                    <label> duration</label>
                    <input type="number" required onChange={(event)=>onChange("duration",event.target.value)} value={input.duration} />
                </p>
            </div>
        </section>
    )
}