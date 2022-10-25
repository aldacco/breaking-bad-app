import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../pages/LoginScreen"
import { DashboardRoutes } from "./DashboardRoutes"

export const AppRoutes = () => {
  return (
    <div className="">
      <BrowserRouter basename="/breaking-bad-app">
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
