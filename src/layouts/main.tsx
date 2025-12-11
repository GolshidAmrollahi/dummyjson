import { Outlet } from "react-router"
import { Footer } from "../components/footer"
import { Navbar } from "../components/navbar"

export const MainLayout: React.FC = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}