import logoImg from '../assets/logo-text.png';
import hamburgerImg from '../assets/hamburger.png';
const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Mobile Left: Hamburger Icon */}
        <div className="flex md:hidden items-center">
          <button className="cursor-pointer p-1">
            <img 
              src={hamburgerImg} 
              alt="Menu" 
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>
        {/* Left: Brand Logo Image */}
        <div className="flex items-center">
          <a href="#">
            <img 
              src={logoImg} 
              alt="Dev Stack Logo" 
              className="h-8 object-contain"
            />
          </a>
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Technologies</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a>
          </li>
        </ul>

        {/* Right: Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-95 text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm transition-all cursor-pointer">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;