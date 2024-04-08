import React from 'react'

export default function UList({children, ...props}) {
    return <ul {...props}>{children}</ul>
}