import React, { ReactNode } from 'react'
import './content.scss'

type ContentProps = {
    children: ReactNode
    className?: string
}

export default function Content({ children, className }: ContentProps) {
    return <div className={`content ${className ? className : ''}`}>{children}</div>
}
