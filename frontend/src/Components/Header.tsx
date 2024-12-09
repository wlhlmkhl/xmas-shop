import CartWidget from "./CartWidget";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-white shadow-lg rounded-lg">
      <nav className="flex justify-between items-center h-16 px-4 md:px-8">
        <Logo />
        <CartWidget />
      </nav>
    </header>
  );
}
