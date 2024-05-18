import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-green-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl">TunerShop</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-white">
              Productos
            </Link>
          </li>
          <li>
            <Link href="/cart" className="text-white">
              Carrito
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
