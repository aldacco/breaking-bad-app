import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacteById } from '../api/getCharacterById'

export const CharacterScreen = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState()
    useEffect(() => {
        getCharacteById(id)
            .then(data => setCharacter(data))
        // document.body.style.background = '#011300'
    }, [])
    return (
        (character) && (
            <div className='flex justify-center items-center'>
                <div>
                    <img className='w-96 ' src={character.img} />
                </div>
                <div className='text-white mx-4'>
                    <p className='text-4xl ' >{character.name}</p>
                    <p className='text-xl pb-10'>{character.nickname}</p>

                    <p><span className='font-bold'>Birthday: </span> {character.birthday}</p>
                    <p><span className='font-bold'>Series: </span>{character.category}</p>
                    <p><span className='font-bold'>Status: </span>{character.status}</p>
                    <p><span className='font-bold'>Actor: </span>{character.portrayed}</p>
                    {
                        character.category.includes('Better Call Saul')
                            ?
                            <img className='w-32'
                                src="https://www.pngmart.com/files/17/Better-Call-Saul-Logo-PNG-Photos.png" />
                            : null
                    }
                    {
                        character.category.includes('Breaking Bad')
                            ? <img
                                className='w-32'
                                src="http://camp.ucss.edu.pe/linternamagica/files/2016/08/Breaking-bad.png" />
                            : null
                    }
                </div>
            </div>
        )

    )
}
