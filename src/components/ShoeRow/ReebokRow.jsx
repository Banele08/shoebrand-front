export default function ReebokRow({ shoes }) {
  return (
    <section className="my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">NIKE</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shoes.filter(shoe => shoe.brand === 'nike').map(shoe => (
          <div key={shoe.id} className="border rounded-lg p-4">
            <img src={shoe.image} alt={shoe.name} className="w-full h-48 object-contain" />
            <h3>{shoe.name}</h3>
            <p>R{shoe.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}