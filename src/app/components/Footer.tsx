export default function Footer() {
    return (
      <main>
        <footer>
            <hr className="my-6 border-white sm:mx-auto lg:my-8" />
            <div className="ml-10">
            <a href="/" className="ml-24 flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../logo2-tumedale.png" className="h-24" alt="Silent Hawks Logo" /> 
            </a>
            </div>
            <div className="ml-10">
            <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5 ml-24">
                <div>
                    <h1 className="mb-6 text-3xl text-white">About</h1>
                    <ul className="text-white text-lg">
                        <li className="mb-4">
                            <a href="" className="hover:text-ourOrange">Our Story</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="hover:text-ourOrange">Careers</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="hover:text-ourOrange">Brand Guidelines</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="hover:text-ourOrange">Network</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="hover:text-ourOrange">Contact Us</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="hover:text-ourOrange">Wallpapers</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-6 text-3xl text-white">Shop</h1>
                    <ul className="text-white text-lg">
                        <li className="mb-4">
                            <a href="" className="hover:text-ourOrange">Help</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="hover:text-ourOrange">Downloads</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="hover:text-ourOrange">Shipping</a>
                        </li>
                        <li className="mb-4">
                            <a href="" className="hover:text-ourOrange">Returns</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-6 text-3xl text-white">Terms and Policies</h1>
                    <ul className="text-white text-lg">
                        <li className="mb-4">
                            <a href="" className="hover:text-ourOrange">All Terms and Policies</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
      </main>
    );
  }