export default function Product2() {
    return (
      <main>
        <div className="py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <a href="" className="">back</a>
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src="../MOCKUP-3-PHONECASE.png" alt="Product Image" />
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-ourOrange text-black py-2 px-4 rounded-full hover:bg-white">Add to Cart</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-ourOrange text-black py-2 px-4 rounded-full hover:bg-white">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-4xl text-gray-800 dark:text-white mb-2">Product Name</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="text-white">Price:</span>
                        <span className="text-white">$29.99</span>
                    </div>
                    <div>
                        <span className="text-white">Availability:</span>
                        <span className="text-white">In Stock</span>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="text-white">Select Color:</span>
                    <div className="flex items-center mt-2">
                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-black dark:bg-black mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-red-600 dark:bg-red-600 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="text-white">Select Size:</span>
                    <div className="flex items-center mt-2">
                        <button className="bg-ourOrange text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-white">S</button>
                        <button className="bg-ourOrange text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-white">M</button>
                        <button className="bg-ourOrange text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-white">L</button>
                        <button className="bg-ourOrange text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-white">XL</button>
                        <button className="bg-ourOrange text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-white">XXL</button>
                    </div>
                </div>
                <div>
                    <span className="text-white">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

      </main>
    );
  }