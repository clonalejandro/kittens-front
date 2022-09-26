import React from 'react'
import { Loading } from '@nextui-org/react'
import './spinner.scss'

export default function Spinner() {
    return (
        <div className="spinnerDiv">
            <Loading type="points" />
        </div>
    )
}
