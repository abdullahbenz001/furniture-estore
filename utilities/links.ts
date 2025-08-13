type NavBarLinks = {
  href: string;
  name: string;
};

export const dropDownMenuLinks: NavBarLinks[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/cart",
    name: "Cart",
  },
  {
    href: "/products",
    name: "Products",
  },
  {
    href: "/favorites",
    name: "Favorites",
  },
  {
    href: "/orders",
    name: "Orders",
  },
];

export let links = {
  HOME: { href: "/", name: "Home" },
  ABOUT: { href: "/about", name: "About" },
  CART: { href: "/cart", name: "Cart" },
  PRODUCTS: { href: "/products", name: "Products" },
  FAVORITES: { href: "/favorites", name: "Favorites" },
  ORDERS: { href: "/orders", name: "orders" },
} as const;
