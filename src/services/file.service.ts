const { REACT_APP_FILE_API: FILE_API } = process.env

export const postFiles = async (files: FileList) => {
    const formData = new FormData()

    for (const file of files as unknown as File[]) {
        formData.append('blob', file)
    }

    const res = await fetch(`${FILE_API}/files`, {
        method: 'POST',
        body: formData,
    })
    const data = await res.json()

    return data
}
