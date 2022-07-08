import URL from "./api"
export const getCharactersByCategory = async (category) => {
    const response = await fetch(`${URL}characters?category=${category}`)
    const data = response.json()
    return data
}