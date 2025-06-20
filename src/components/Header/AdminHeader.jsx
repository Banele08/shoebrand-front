
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons'

export default function AdminHeader() {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/admin" className="font-bold text-2xl">ADMIN PANEL</Link>
        
        <div className="flex items-center gap-6">
          <Link to="/admin/settings" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faCog} className="text-xl" />
          </Link>
          <button className="hover:text-gray-300">
            <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  )
}