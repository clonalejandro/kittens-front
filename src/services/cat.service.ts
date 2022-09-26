const { REACT_APP_CAT_API: CAT_API } = process.env

export const getRandomCat = async () => {
    const res = await fetch(`${CAT_API}/images/search`)
    const data = await res.json()
    return data[0]
}

export const getCatBreeds = async () => {
    const res = await fetch(`${CAT_API}/breeds`)
    const data = await res.json()
    return data
}
