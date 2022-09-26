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
                <Text>{file.name}</Text>
                <Text>{file.size}</Text>
                <Text>{file.extension}</Text>
            </Card.Body>
        </Card>
    )
}
