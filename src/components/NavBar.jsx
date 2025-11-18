import { LinkButtonIcon } from "./LinkButtonIcon";
import { useStore } from "../store/StoredProduct";
import { FaHome } from 'react-icons/fa';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBlender } from 'react-icons/fa';
import { VscAttach } from 'react-icons/vsc';
import { StoredAuth } from "../store/StoredAuth";
import { IoLogOut } from 'react-icons/io5';
import { MdAddHomeWork } from "react-icons/md";
import { formatEmail } from "../utils/utils";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MenuMobile } from "./MenuMobile";

export const NavBar = () => {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const countProducts = useStore((state) => state.products.length);
  const authStore = StoredAuth((state) => state.isAuthenticated);
  const auth = StoredAuth((state) => state.role);
  const email = sessionStorage.getItem("auth") && sessionStorage.getItem("auth") !== "null" ? JSON.parse(sessionStorage.getItem("auth")).email : null;

  const viewUser = authStore ? "logout" : "login";
  const userIcon = authStore ? IoLogOut : LiaUserCircleSolid;

  const navItems = [
    { path: "/", name: "Home", svg: FaHome },
    { path: "/products", name: "Products", svg: FaBlender },
    { path: "/cart", name: "Cart", svg: FaShoppingCart },
    { path: `/${viewUser}`, name: viewUser, svg: userIcon }
  ];

  const navAdminItems = [
    { path: "/dashboard", name: "Dashboard", svg: MdAddHomeWork },
    { path: "/products", name: "Products", svg: FaBlender },
    { path: "/cart", name: "Cart", svg: FaShoppingCart },
    { path: `/${viewUser}`, name: viewUser, svg: userIcon }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <nav className="p-4 bg-gray-800 text-white flex justify-between items-center max-md:sticky top-0 z-10">
        <div className="text-lg font-bold flex items-center">
          <VscAttach className="h-8 w-8 mr-2" />
          <p>{email != null ? formatEmail(email) : ""}</p>
        </div>

        {windowSize.width < 768 ? (
          <div className="relative">
            <button
              aria-label="Abrir menú"
              onClick={() => setIsMobileOpen((v) => !v)}
              className="p-1"
            >
              <CiMenuBurger className="h-8 w-8" />
            </button>

            {isMobileOpen && (
              <div className="absolute right-2 mt-2 w-80 bg-white text-black border border-gray-300 shadow-lg rounded-md p-4 z-50">
                <MenuMobile
                  auth={auth}
                  navAdminItems={navAdminItems}
                  navItems={navItems}
                  countProducts={countProducts}
                  onClick={() => setIsMobileOpen(false)}
                />
              </div>
            )}
          </div>
        ) : (
          <ul className="flex space-x-4 justify-center items-center">
            {auth === 'admin' ? navAdminItems.map((item) => (
              <LinkButtonIcon key={item.name} path={item.path} nameSvg={<item.svg className="inline-block h-4 w-6 mr-1" />} nameButton={item.name} count={countProducts} />
            )) : navItems.map((item) => (
              <LinkButtonIcon key={item.name} path={item.path} nameSvg={<item.svg className="inline-block h-4 w-6 mr-1" />} nameButton={item.name} count={countProducts} />
            ))}
          </ul>)}

      </nav>
    </>
  )
}
