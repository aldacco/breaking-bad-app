export const searchCharacterByName = (characters, name) => {
    name = name.toLowerCase()
    if (name) {
        return characters.filter(character => character.name.toLowerCase().includes(name))
    } else {
        return characters
    }
    // const response = await fetch(`${URL}characters?name=${name}`)
    // const data = await response.json()
    // return data
}