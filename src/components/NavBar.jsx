import { LinkButtonIcon } from "./LinkButtonIcon";
import { useStore } from "../store/StoredProduct";
import { FaHome } from 'react-icons/fa';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBlender } from 'react-icons/fa';
import { VscAttach } from 'react-icons/vsc';
import { StoredAuth } from "../store/StoredAuth";
import { IoLogOut } from 'react-icons/io5';

export const NavBar = () => {
  const countProducts = useStore((state) => state.products.length);
  const authStore = StoredAuth((state) => state.isAuthenticated);

  const viewUser = authStore ? "logout" : "login";
  const userIcon = authStore ? IoLogOut : LiaUserCircleSolid;

  const navItems = [
    { path: "/", name: "Home", svg: FaHome },
    { path: "/products", name: "Products", svg: FaBlender },
    { path: "/cart", name: "Cart", svg: FaShoppingCart },
    { path: `/${viewUser}`, name: viewUser, svg: userIcon },
  ];


  return (
    <>
      <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <VscAttach className="h-8 w-8 mr-2" />
        <ul className="flex space-x-4 justify-center items-center">
          {navItems.map((item) => (
            <LinkButtonIcon key={item.name} path={item.path} nameSvg={<item.svg className="inline-block h-4 w-6 mr-1" />} nameButton={item.name} count={countProducts} />
          ))}
        </ul>
      </nav>
    </>
  )
}
