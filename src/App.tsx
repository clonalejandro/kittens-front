import React, { useEffect, useCallback } from 'react'
import { Container } from '@nextui-org/react'
import { getCatBreeds, getRandomCat } from './services/cat.service'
import { postFiles } from './services/file.service'
import ICat from './interfaces/ICat'
import IFile from './interfaces/IFile'
import IBreed from './interfaces/IBreed'
import Header from './components/Header'
import Content from './components/Content'
import CardBreed from './components/CardBreed'
import Spinner from './components/Spinner'
import UploadButton from './components/UploadButton'
import UploadedFile from './components/UploadedFile'
import './App.scss'

export default function App() {
    const [loading, setLoading] = React.useState(false)
    const [cat, setCat] = React.useState(null as ICat | null)
    const [breeds, setBreeds] = React.useState([] as IBreed[])
    const [uploadedFile, setUploadedFile] = React.useState(null as IFile | null)
    const fetchCat = useCallback(async () => {
        setLoading(true)
        const cat = await getRandomCat()
        setCat(cat)
        setLoading(false)
    }, [])

    const fetchBreeds = useCallback(async () => {
        setLoading(true)
        const breeds = await getCatBreeds()
        setBreeds(breeds)
        setLoading(false)
    }, [])

    const handleUpload = useCallback((files: FileList | null) => {
        setLoading(true)
        if (files && files.length > 0) {
            postFiles(files).then(data => {
                setUploadedFile(data[0])
                setLoading(false)
            })
        }
    }, [])

    useEffect(() => {
        fetchCat()
        fetchBreeds()
    }, [fetchCat, fetchBreeds])

    return (
        <>
            {loading && <Spinner />}
            <Container>
                <Header>
                    <h1>Random Cat</h1>
                </Header>
                {cat && (
                    <Content>
                        <img alt={cat.id} src={cat.url} />
                    </Content>
                )}
                <Content className="breeds">
                    {breeds && breeds.map(breed => <CardBreed key={breed.id} breed={breed} />)}
                </Content>
                <Content className="uploads">
                    <UploadButton onChange={e => handleUpload(e.target?.files)}>{'Upload a cat'}</UploadButton>
                    {uploadedFile && <UploadedFile file={uploadedFile} />}
                </Content>
            </Container>
        </>
    )
}
