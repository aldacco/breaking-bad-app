import { useEffect, useState } from "react";
import { getCharactersByCategory } from "../api/getCharactersByCategory";

export const ListCharacters = ({ category }) => {
  const [searchValue, setSearchValue] = useState('')
  const [characters, setCharacters] = useState([])
  const [charactersFound, setCharactersFound] = useState([])

  const searchCharacter = (e) => {
    e.preventDefault()
    setCharactersFound(characters.filter(char => char.name.toLowerCase().includes(searchValue)))
  }
  const handleOnChange = (e) => {
    if (e.target.value === '') {
      setCharactersFound(characters)
    }
    setSearchValue(e.target.value.toLowerCase())
  }
  useEffect(() => {
    getCharactersByCategory(category)
      .then(data => {
        setCharacters(data)
        setCharactersFound(data)
      })
  }, [])

  return (
    <>
      <form className="flex w-1/3 relative items-center" onSubmit={(e) => searchCharacter(e)}>
        <input
          onChange={handleOnChange}
          className="w-full h-11 border rounded pl-5 hover:border-none focus:outline-0"
        />
        <button
          className="w-10 h-10 absolute right-1 rounded bg-zinc-900 text-white hover:bg-green-900"
        >
          <i className="fa fa-search "></i>
        </button>
      </form>
      <div className="w-full flex justify-center pt-5">
        <div className="w-4/6 flex flex-wrap justify-center">
          {
            (charactersFound) && charactersFound.map(character => {
              return (
                <div
                  key={character.char_id}
                  className="relative h-96 w-64 bg-cover hover:scale-2"
                  style={{ backgroundImage: `url(${character.img})` }}
                >
                  <div className="absolute bottom-0 h-12 w-full bg-slate-900 opacity-50 hover:h-24 hover:text-white">
                    <p className="text-white py-3 px-5 cursor-pointer ">
                      {
                        character.name
                      }
                    </p>

                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
