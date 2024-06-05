const products: any[] = [{
    id: 1,
    name: 'Mousepad',
    href: '/store/product',
    price: '$48',
    imageSrc: 'MOCKUP-1-MOUSEPAD.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Phone case',
    href: '/store/product2',
    price: '$35',
    imageSrc: 'MOCKUP-2-PHONECASE.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Mousepad',
    href: '/store/product',
    price: '$89',
    imageSrc: 'MOCKUP-1-MOUSEPAD.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Phone case',
    href: '/store/product2',
    price: '$35',
    imageSrc: 'MOCKUP-2-PHONECASE.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 1,
    name: 'Mousepad',
    href: '/store/product',
    price: '$48',
    imageSrc: 'MOCKUP-1-MOUSEPAD.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Phone case',
    href: '/store/product2',
    price: '$35',
    imageSrc: 'MOCKUP-2-PHONECASE.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Mousepad',
    href: '/store/product',
    price: '$89',
    imageSrc: 'MOCKUP-1-MOUSEPAD.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Phone case',
    href: '/store/product2',
    price: '$35',
    imageSrc: 'MOCKUP-2-PHONECASE.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  }]

export default function Store() {
    return (
        <main>
            <div className="">
                
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <a href="" className="">back</a>
                <h1 className="text-4xl mb-5 mt-5">SILENT HAWKS MERCHANDISE</h1>
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1 bg-ourOrange text-black hover:bg-white">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                        <li><a>Price highest to lowest</a></li>
                        <li><a>Price lowest to highest</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1 bg-ourOrange text-black hover:bg-white">Filters</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                        <li><a>Computer peripherals</a></li>
                        <li><a>Clothing</a></li>
                    </ul>
                </div>
                <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <a key={product.id} href={product.href} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-white">{product.name}</h3>
                                <p className="mt-1 text-lg text-white">{product.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
  }