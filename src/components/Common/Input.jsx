import React from 'react'
export default function Input({ label, ...props}) {
    return <li>
        <label>{label}</label>
        <input {...props} />
    </li>
}