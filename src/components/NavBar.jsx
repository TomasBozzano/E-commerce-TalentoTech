import home from "../assets/home.svg"
import product from "../assets/product.svg"
import cart from "../assets/cart.svg"
import react from "../assets/react.svg"
import { LinkButtonIcon } from "./LinkButtonIcon";
import { useStore } from "../store/StoredProduct";

export const NavBar = () => {
  const countProducts = useStore((state) => state.products.length);

  const navItems = [
    { path: "/", name: "Home", svg: home },
    { path: "/products", name: "Products", svg: product },
    { path: "/cart", name: "Cart", svg: cart },
  ];


  return (
    <>
      <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <img src={react} alt="Logo" className="h-8" />
        <ul className="flex space-x-4 justify-center items-center">
          {console.log(countProducts)}
          {navItems.map((item) => (
            <LinkButtonIcon key={item.name} path={item.path} nameSvg={item.svg} nameButton={item.name} count={countProducts} />
          ))}
        </ul>
      </nav>
    </>
  )
}
