import React, { ReactNode } from 'react'
import './header.scss'

type HeaderProps = {
    children: ReactNode
}

export default function Header({ children }: HeaderProps) {
    return <div className="header">{children}</div>
}
