import Link from "next/link";
import Cart from "@/components/cart";
import {
    AvatarMenu,
    MenuDrawer,
    SearchProduct
} from "@/components/header-components";

export function Header() {
    return (
        <header className="text-base lg:text-sm">
            <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static">
                <div className="flex items-center justify-between py-3 lg:py-5 lg:block ">
                    <Link href="/">
                        <h1>ByteBoost</h1>
                    </Link>
                    <div className="lg:hidden">
                        <MenuDrawer />
                    </div>
                </div>
                <div className="nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 hidden lg:visible">
                    <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
                        <SearchProduct/>
                        <li>
                          <Cart />
                        </li>
                        <AvatarMenu />
                    </ul>
                </div>
            </div>
            <nav className="border-b">
                <ul className="flex items-center gap-x-3 max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8 dark:text-white">
                    <li className={`py-1`}>
                        <Link href="/"
                              className="block py-2 px-3 rounded-lg text-gray-700 dark:text-white hover:text-gray-900 hover:dark:text-black hover:bg-gray-100 duration-150">
                            Inicio
                        </Link>
                    </li>
                    <li className="py-1">
                        <Link href="/store"
                              className="block py-2 px-3 rounded-lg text-gray-700 dark:text-white hover:text-gray-900 hover:dark:text-black hover:bg-gray-100 duration-150"
                              prefetch
                        >
                            Tienda
                        </Link>
                    </li>
                    <li className="py-1">
                        <Link href="/categories"
                              className="block py-2 px-3 rounded-lg text-gray-700 dark:text-white hover:text-gray-900 hover:dark:text-black hover:bg-gray-100 duration-150"
                              prefetch
                        >
                            Categorias
                        </Link>
                    </li>
                    <li className="py-1">
                        <Link href="/brands"
                              className="block py-2 px-3 rounded-lg text-gray-700 dark:text-white hover:text-gray-900 hover:dark:text-black hover:bg-gray-100 duration-150"
                              prefetch
                        >
                            Marcas
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}