import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DashboardPage } from "./pages/DashboardPage"
import { PersonPage } from "./pages/PersonPage"

export default function App() {
  return (
   <BrowserRouter basename="/parents-dashboard">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/person/:name" element={<PersonPage />} />
      </Routes>
    </BrowserRouter>
  )
}
