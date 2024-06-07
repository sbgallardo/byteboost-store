import {
    Card
} from "@/components/ui/card"
import {CarouselDemo, CarouselSize} from "@/components/carousel";
import {
    FaStar,
    FaMusic,
    FaPhone,
    FaTv,
    FaGamepad
} from "react-icons/fa";
import Image from "next/image";

export default function Homepage() {
    return (
            <div>

                <div className="w-screen flex justify-center items-center p-2">
                    <Image width={1440} height={648} className="rounded-xl shadow-xl" src="/cyber.png" alt="Hasta 60% de DCTO"/>
                </div>

                <div className="w-screen flex justify-center items-center p-2 py-5">
                    <div className="text-lg font-semibold">
                        Lo Más Visto
                        <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-sm"></div>
                    </div>
                </div>

                <div className="container mx-auto flex flex-wrap justify-center">
                    <a href="#" className="flex bg-slate-50 rounded-lg shadow-lg lg:w-1/2 lg:m-2 lg:p-3 m-2 p-2 max-w-[540px]">
                        <div className="flex flex-col rounded-xl p-2 pl-2">
                            <h5 className="md:text-xl sm:text-md font-bold tracking-tight text-black pb-2 hover:text-purple-500 hover:ease-out duration-200">Computadores Gamers</h5>
                            <p className="md:text-lg sm:text-sm text-gray-700">Juega al máximo rendimiento con nuestra alta gama de computadoras gamer</p>
                            <button className="w-full mt-5 px-2 py-1 text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl hover:bg-gradient-to-tr after:content-['_↗']">Ver Categoría</button>
                        </div>
                        <div className="xl:w-2/4 lg:w-3/4 md:w-2/4 w-full flex place-content-end">
                            <div className="flex items-center">
                                <Image width={140} height={80} src="https://i.blogs.es/a06f0e/image-removebg-preview-12-/original.png" alt="Imagen" className="xl:h-40 lg:h-36 md:h-36 sm:object-fill drop-shadow-2xl"/>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex bg-slate-50 rounded-lg shadow-lg lg:w-1/2 lg:m-3 lg:p-3 m-2 p-2 max-w-[540px]">
                        <div className="flex flex-col rounded-xl p-2 pl-2">
                            <h5 className="md:text-xl sm:text-md font-bold tracking-tight text-black pb-2 hover:text-purple-500 hover:ease-out duration-200">Consolas Gamers</h5>
                            <p className="md:text-lg sm:text-sm text-gray-700">Juega una experiencia única con nuestra alta gama de consolas gamer</p>
                            <button className="w-full mt-5 px-2 py-1 text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl hover:bg-gradient-to-tr after:content-['_↗']">Ver Categoría</button>
                        </div>
                        <div className="xl:w-2/4 lg:w-3/4 md:w-2/4 w-full flex place-content-end">
                            <div className="flex items-center">
                                <Image width={140} height={80} src="https://goldengamers.cl/cdn/shop/products/1_98.png?v=1650393181" alt="Imagen" className="xl:h-40 lg:h-36 md:h-36 sm:object-fill drop-shadow-2xl"/>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex bg-slate-50 rounded-lg shadow-lg lg:w-1/2 lg:m-3 lg:p-3 m-2 p-2 max-w-[540px]">
                        <div className="flex flex-col rounded-xl p-2 pl-2">
                            <h5 className="md:text-xl sm:text-md font-bold tracking-tight text-black pb-2 hover:text-purple-500 hover:ease-out duration-200">Tarjetas Gráficas</h5>
                            <p className="md:text-lg sm:text-sm text-gray-700">Dale un vistazo a la gran variedad de tarjetas gráficas que poseemos.</p>
                            <button className="w-full mt-5 px-2 py-1 text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl hover:bg-gradient-to-tr after:content-['_↗']">Ver Categoría</button>
                        </div>
                        <div className="xl:w-2/4 lg:w-3/4 md:w-2/4 w-full flex place-content-end">
                            <div className="flex items-center">
                                <Image width={140} height={80} src="https://www.asus.com/media/odin/websites/MX/News/qpyb6w1jhg6jrqkv/1.png" alt="Imagen" className="xl:h-40 lg:h-36 md:h-36 sm:object-fill drop-shadow-2xl"/>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex bg-slate-50 rounded-lg shadow-lg lg:w-1/2 lg:m-3 lg:p-3 m-2 p-2 max-w-[540px]">
                        <div className="flex flex-col rounded-xl p-2 pl-2">
                            <h5 className="md:text-xl sm:text-md font-bold tracking-tight text-black pb-2 hover:text-purple-500 hover:ease-out duration-200">Róbotica</h5>
                            <p className="md:text-lg sm:text-sm text-gray-700">¿Buscas componentes de robotica?, ¡aquí tenemos todo!</p>
                            <button className="w-full mt-5 px-2 py-1 text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl hover:bg-gradient-to-tr after:content-['_↗']">Ver Categoría</button>
                        </div>
                        <div className="xl:w-2/4 lg:w-3/4 md:w-2/4 w-full flex place-content-end">
                            <div className="flex items-center">
                                <Image width={140} height={80} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arduino-uno-perspective-transparent.png/800px-Arduino-uno-perspective-transparent.png" alt="Imagen" className="xl:h-40 lg:h-36 md:h-36 sm:object-fill drop-shadow-2xl"/>
                            </div>
                        </div>
                    </a>
                </div>


                <div className="w-screen flex justify-center items-center p-2">
                    <Image width={1270} height={163} className="rounded-xl shadow-xl" src="/promo1.png" alt="Hasta 60% de DCTO"/>
                </div>

                <div className="w-screen flex justify-center items-center p-2 py-5">
                    <div className="text-lg font-semibold">
                        Ofertas Destacadas
                        <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-sm"></div>
                    </div>
                </div>

                <div className="w-screen flex justify-center items-center p-2">
                    <Image width={1270} height={163} className="rounded-xl shadow-xl" src="/promo2.png" alt="Hasta 30% de DCTO"/>
                </div>

                <div className="w-screen flex justify-center items-center p-2 py-5">
                    <div className="text-lg font-semibold">
                        Información Importante
                        <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-sm"></div>
                    </div>
                </div>

                <div className="w-screen justify-center items-center text-center md:grid md:grid-cols-2 lg:flex py-6">
                    <div>
                        <div className="flex justify-center items-center">
                            <Image width={90} height={90} className="h-20" src="/store.png" alt="Tienda"/>
                        </div>
                        <div className="p-3">
                            <div className="text-2x1 font-semibold hover:text-purple-500 hover:ease-out duration-200">
                                Tienda
                            </div>
                            <p className="text-slate-400">
                                Conoce nuestras tiendas fisicas
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center items-center">
                            <Image width={90} height={90} className="h-20" src="/store-bag.png" alt="Tienda"/>
                        </div>
                        <div className="p-3">
                            <div className="text-2x1 font-semibold hover:text-purple-500 hover:ease-out duration-200">
                                Compras
                            </div>
                            <p className="text-slate-400">
                                Revisa tus compras cuando quieras
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center items-center">
                            <Image width={90} height={90} className="h-20" src="/devolutions.png" alt="Tienda"/>
                        </div>
                        <div className="p-3">
                            <div className="text-2x1 font-semibold hover:text-purple-500 hover:ease-out duration-200">
                                Devoluciones
                            </div>
                            <p className="text-slate-400">
                                Devuelve o cambia tus productos
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center items-center">
                            <Image width={90} height={90} className="h-20" src="/contact.png" alt="Tienda"/>
                        </div>
                        <div className="p-3">
                            <div className="text-2x1 font-semibold hover:text-purple-500 hover:ease-out duration-200">
                                Contacto
                            </div>
                            <p className="text-slate-400">
                                Contacta con nosotros cuando quieras
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto flex justify-center p-2">
                    <div className="p-4 bg-slate-50 flex justify-center items-center md:w-3/4 rounded-lg shadow-lg">
                        <div className="font-semibold text-gray-900 text-xl max-sm:text-sm px-5 max-sm:pl-2">
                            Suscríbete y recibe nuevas ofertas y novedades
                        </div>
                        <button
                            className="font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-500 h-12 rounded-full px-10 hover:bg-gradient-to-tr">
                            Suscribete
                        </button>
                    </div>
                </div>
            </div>
    )
}