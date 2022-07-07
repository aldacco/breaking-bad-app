import { ListCharacters } from "../components/ListCharacters"
import { Navbar } from "../components/Navbar"
import './styles.css'

export const BreakingBadScreen = () => {
    return (
        <div className='breakin-bad-bg'>
            <Navbar />
            <div className="flex flex-col items-center">
                <img
                    className="w-64 mb-4"
                    src="http://camp.ucss.edu.pe/linternamagica/files/2016/08/Breaking-bad.png"
                />
                <div className="flex w-1/3 relative items-center">
                    <input className="w-full h-11 border rounded pl-5 hover:border-none focus:outline-0" />
                    <button
                        className="w-10 h-10 absolute right-1 rounded bg-zinc-900 text-white hover:bg-green-900"
                    >
                        <i className="fa fa-search "></i>
                    </button>
                </div>
            </div>
            <ListCharacters />
        </div>
    )
}
