import React, { ReactNode } from 'react'
import { Button } from '@nextui-org/react'
import './uploadButton.scss'

type UploadButtonProps = {
    children: ReactNode
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function UploadButton({ children, onChange }: UploadButtonProps) {
    return (
        <Button className="upload" color="gradient" shadow rounded type="button">
            {children}
            <input type="file" onChange={onChange} />
        </Button>
    )
}
