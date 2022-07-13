import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { BetterCallSaulScreen } from '../pages/BetterCallSaulScreen'
import { BreakingBadScreen } from '../pages/BreakingBadScreen'
import { CharacterScreen } from '../pages/CharacterScreen'
import { HomeScreen } from '../pages/HomeScreen'

export const DashboardRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<BreakingBadScreen />} />
        <Route path='/breaking-bad' element={<BreakingBadScreen />} />
        <Route path='/better-call-saul' element={<BetterCallSaulScreen />} />
        <Route path='/character/:id' element={<CharacterScreen />} />
      </Routes>
    </div>
  )
}
