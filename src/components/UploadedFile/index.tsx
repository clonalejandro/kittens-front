import React from 'react'
import { Card, Text } from '@nextui-org/react'
import IFile from '../../interfaces/IFile'

type UploadedFileProps = {
    file: IFile
}

export default function UploadedFile({ file }: UploadedFileProps) {
    return (
        <Card isPressable isHoverable variant="bordered" css={{ mw: '400px', mt: '5%' }}>
            <Card.Body>
                <Text>Name: {file.name}</Text>
                <Text>Size: {file.size}MB</Text>
                <Text>Extension: {file.extension}</Text>
            </Card.Body>
        </Card>
    )
}
