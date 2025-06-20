import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="logo font-bold text-2xl">SHOE STORE</div>
      <div className="flex gap-6">
        <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
        <FontAwesomeIcon icon={faUser} className="text-xl" />
      </div>
    </nav>
  )
}