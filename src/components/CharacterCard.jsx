import { Link } from "react-router-dom"

export const CharacterCard = ({ character }) => {
  const { char_id, img, name } = character
  return (
    <div
      className="relative h-96 w-64 bg-cover"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Link to={`/character/${char_id}`}>
        <div className="absolute bottom-0 h-12 w-full bg-black bg-opacity-50 opacity-50 hover:bg-opacity-60 hover:opacity-100">
          <p className="text-white py-3 px-5 cursor-pointer "> {name}</p>
        </div>
      </Link>
    </div>
  )
}
