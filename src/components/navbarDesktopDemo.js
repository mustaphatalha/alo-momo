import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

function NavBarDesktopDemo() {
  const navItems = [
    { name: 'Home', url: '/home', icon: Home },
    { name: 'Resstaurantes', url: '/resstaurantes', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ]

  return <NavBar items={navItems} />
}
export default NavBarDesktopDemo;