export default function Input({ label, identifier, onChange, userInput, ...props}) {
    return <li>
        <label>{label}</label>
        <input {...props}
         value={userInput[identifier]}
         onChange={(event) => onChange(identifier, event.target.value)}/>
    </li>
}