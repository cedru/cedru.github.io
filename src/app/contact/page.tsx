export default function Contact() {
    return (
      <main>
        <section className="">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-6xl tracking-tight text-center text-white">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">We appreciate any feedback or partnership offers from you guys! you are what keeps silent hawks alive.</p>
            <form action="#" className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-white">Your email</label>
                <input type="email" id="email" className="shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-white placeholder:text-white text-black dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="silent@hawks.se..." required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-white">Subject</label>
                <input type="text" id="subject" className="shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-white placeholder:text-white text-black dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you..." required />
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                  <textarea id="message" rows={6} className="shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-white placeholder:text-white text-black dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Leave your message here..." required />
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 bg-ourOrange dark:focus:ring-primary-800">Send message</button>
            </form>
          </div>
        </section>
      </main>
    );
  }