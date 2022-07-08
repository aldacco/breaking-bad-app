import { useEffect, useState } from "react"

import { ListCharacters } from "../components/ListCharacters"

const CATEGORY = 'Breaking+Bad'

export const BreakingBadScreen = () => {
  useEffect(() => {
    document.body.style.background = '#011300';
  }, [])
  return (

    <div>
      <div className="flex flex-col items-center">
        <img
          className="h-36 mb-4"
          src="http://camp.ucss.edu.pe/linternamagica/files/2016/08/Breaking-bad.png"
        />
        <ListCharacters category={CATEGORY} />
      </div>
    </div>
  )
}
