export default function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">SHOE STORE</h3>
          <p>Premium footwear at factory prices</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">CONTACT</h3>
          <p>info@shoestore.co.za</p>
          <p>+27 12 345 6789</p>
        </div>
      </div>
      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        <p>© {new Date().getFullYear()} Shoe Store. All rights reserved.</p>
      </div>
    </footer>
  )
}