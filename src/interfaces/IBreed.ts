export default interface IBreed {
    id: string
    name: string
    temperament: string
    origin: string
    description: string
    life_span: string
    wikipedia_url: string
    image: {
        id: string
        url: string
    }
}
