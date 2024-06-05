export default function Navbar() {
    return (
      <main>
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center md:p-4">
                <a href="" className="ml-6 flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../logo2-tumedale.png" className="h-24" alt="Silent Hawks Logo" /> 
                </a>
                <div className="md:block block w-auto md:w-auto md:ml-24 ml-8" id="navbar-default">
                    <ul className="font-medium text-lg flex flex-row p-4 md:p-0 p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 mt-0">
                        <li>
                            <a href="/" className="py-2 px-3 hover:text-ourOrange md:hover:bg-transparent md:border-0 md:hover:text-ourOrange md:p-0">Home</a>
                        </li>
                        <li>
                            <a href="/store" className="py-2 px-3 hover:text-ourOrange md:hover:bg-transparent md:border-0 md:hover:text-ourOrange md:p-0">E-Store</a>
                        </li>
                        <li>
                            <a href="/contact" className="py-2 px-3 hover:text-ourOrange md:hover:bg-transparent md:border-0 md:hover:text-ourOrange md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </main>
    );
  }