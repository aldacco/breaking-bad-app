import React, { useEffect, useState } from 'react'
import { getCharactersByCategory } from '../api/getCharactersByCategory'
import { ListCharacters } from '../components/ListCharacters'

const CATEGORY = 'Better+Call+Saul'

export const BetterCallSaulScreen = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    document.body.style.background = '#000';
  }, [])
  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          className="h-36 mb-4"
          src="https://www.pngmart.com/files/17/Better-Call-Saul-Logo-PNG-Photos.png"
        />
        <ListCharacters category={CATEGORY} />
      </div>
    </div>
  )
}
