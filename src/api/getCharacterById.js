// const URL = 'https://www.breakingbadapi.com/api/characters/'
import URL from './api'
export const getCharacteById = async (id) => {
    const response = await fetch(URL + 'characters/'+id, {
        method: 'GET',
    })
    const data = await response.json()
    return data[0]
}
