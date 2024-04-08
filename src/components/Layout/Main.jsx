import React from 'react'

export default function Main({children, ...props}) {
    return <main {...props}>{children}</main>
}