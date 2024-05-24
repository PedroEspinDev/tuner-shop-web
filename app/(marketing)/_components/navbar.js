import Link from 'next/link';
import { Button } from '@mui/material';
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-blue-400 text-3xl">Tuner Art Shop </h1>
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-200 text-gray-500">
          <HiOutlineSearch size={20} />
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none"
            type="text"
            placeholder="Buscar"
            />
            <Button>Buscar</Button>
        </div>
        
        <div className="flex space-x-4">
        <Link href="/" passHref>
            <Button variant="contained" className="bg-neutral-700 text-white">
              Inicio
            </Button>
          </Link>
          <Link href="/products" passHref>
            <Button variant="contained" className="bg-neutral-700 text-white">
              Productos
            </Button>
          </Link>
          <Link href="/cart" passHref>
            <Button variant="contained" className="bg-neutral-700 text-white">
              Carrito
            </Button>
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
