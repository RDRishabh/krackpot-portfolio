import Link from 'next/link';

export function Footer() {
  return (
    <div className="px-8 pt-20 bg-slate-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-8">

        <div>
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Link className="font-normal flex space-x-2 items-center text-sm mr-4 text-white px-2 py-1 relative z-20" href="/">
              <img alt="logo" loading="lazy" width="30" height="30" src="/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Flogo-dark.png&w=64&q=75" />
              <span className="font-medium text-white">DevStudio</span>
            </Link>
          </div>
          <div className="mt-2 ml-2">© copyright DevStudios 2024. All rights reserved.</div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">

          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="text-neutral-300 font-bold">Pages</p>
            <ul className="space-y-4">
              <li><Link href="/products" className="hover:text-text-neutral-800">All Products</Link></li>
              <li><Link href="/products" className="hover:text-text-neutral-800">Studio</Link></li>
              <li><Link href="/products" className="hover:text-text-neutral-800">Clients</Link></li>
              <li><Link href="/products" className="hover:text-text-neutral-800">Pricing</Link></li>
              <li><Link href="/products" className="hover:text-text-neutral-800">Blog</Link></li>
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-neutral-300 font-bold">Socials</p>
            <ul className="space-y-4">
              <li><Link href="/products" className="hover:text-text-neutral-800">Facebook</Link></li>
              <li><Link href="/products" className="hover:text-text-neutral-800">Instagram</Link></li>
              <li><Link href="/products" className="hover:text-text-neutral-800">Twitter</Link></li>
              <li><Link href="/products" className="hover:text-text-neutral-800">LinkedIn</Link></li>
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-neutral-300 font-bold">Legal</p>
            <ul className="space-y-4">
              <li><Link href="/products" className="hover:text-text-neutral-800">Privacy Policy</Link></li>
              <li><Link href="/products" className="hover:text-text-neutral-800">Terms of Service</Link></li>
              <li><Link href="/products" className="hover:text-text-neutral-800">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-neutral-300 font-bold">Register</p>
            <ul className="space-y-4">
              <li><Link href="/products" className="hover:text-text-neutral-800">Sign Up</Link></li>
              <li><Link href="/products" className="hover:text-text-neutral-800">Login</Link></li>
              <li><Link href="/products" className="hover:text-text-neutral-800">Forgot Password</Link></li>
            </ul>
          </div>

        </div>

      </div>

      <p className="text-center mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800">
        DevStudio
      </p>

    </div>
  );
}