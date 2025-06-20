
export default function BrandFilter({ activeFilter, setFilter }) {
  const filters = [
    { id: 'all', name: 'All Brands' },
    { id: 'nike', name: 'Nike' },
    { id: 'puma', name: 'Puma' },
    { id: 'reebok', name: 'Reebok' }
  ]

  return (
    <div className="flex space-x-2 bg-gray-200 p-1 rounded-lg">
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => setFilter(filter.id)}
          className={`px-4 py-2 text-sm rounded-md transition ${activeFilter === filter.id ? 'bg-white shadow-sm font-medium' : 'hover:bg-gray-100'}`}
        >
          {filter.name}
        </button>
      ))}
    </div>
  )
}