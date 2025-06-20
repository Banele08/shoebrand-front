
import { Link } from 'react-router-dom'

export default function AdminControls() {
  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <Link
        to="/admin/add-product"
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition flex items-center gap-2"
      >
        <span>+</span> Add New Product
      </Link>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Export Products
      </button>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
        View Analytics
      </button>
    </div>
  )
}