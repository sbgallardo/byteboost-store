import Link from "next/link";

export default function Footer() {

    const name :string = "ByteBoost";

    return (
        <>
            <footer className="border-t">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Empresa</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/about" className=" hover:underline">Nosotros</Link>
                                </li>
                                <li className="mb-4">
                                    <a href="/about#team" className="hover:underline">Trabajadores</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/about#stores" className="hover:underline">Tiendas</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/about#brands" className="hover:underline">Marcas</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Centro de
                                ayuda</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Discord</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Twitter</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Contactanos</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Politicas de privacidad</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Licencias</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terminos &amp; Condiciones</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Redes
                                sociales</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Instagram</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Twitter</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center p-3">
                        <span className="text-gray-500 mb-3 ">
                            <span>© 2024 </span>
                            <Link href="/" className="hover:underline">{name}</Link>.
                            Todos los derechos reservados
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}