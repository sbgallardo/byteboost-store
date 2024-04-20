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

export default function Homepage() {
    return (
        <div>

            <div className="w-screen flex justify-center items-center ">
                <div className="text-lg font-semibold">
                    Ofertas Imperdibles
                    <hr className="accent-red-600 "/>
                </div>
            </div>



            <div className="w-screen flex justify-center items-center ">
                <div className="text-lg font-semibold">
                    Lo Más Visto
                </div>
            </div>


            <div className="w-screen justify-center items-center text-center md:grid md:grid-cols-2 lg:flex">
                <div>
                    <div className="flex justify-center items-center">
                        <img className="h-20" src="/store.png" alt="Tienda"/>
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
                        <img className="h-20" src="/store-bag.png" alt="Tienda"/>
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
                        <img className="h-20" src="/devolutions.png" alt="Tienda"/>
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
                        <img className="h-20" src="/contact.png" alt="Tienda"/>
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

            <div className="container mx-auto flex justify-center mt-2 mb-4">
                <div
                    className="p-4 bg-slate-50 flex justify-center items-center md:w-3/4 rounded-lg shadow-lg hover:shadow-indigo-200 dark:bg-indigo-500">
                    <div
                        className="font-semibold text-gray-900 text-xl max-sm:text-sm px-5 max-sm:pl-2 dark:text-white">
                        Suscríbete y recibe nuevas ofertas y novedades
                    </div>
                    <button
                        className="font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-500 h-12 rounded-full px-10 hover:bg-gradient-to-tr">
                        Suscribete
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <ProductSection />
            </div>

        </div>
    )
}


export function Sections() {
    return (
        <div className="bg-indigo-300">
            <div className="flex container justify-center content-center items-center h-[100px] gap-3">
                <div className="">
                    <FaStar/>
                    <span>Destacado</span>
                </div>
                <div>
                    <FaStar/>
                    <span>Destacado</span>
                </div>
            </div>
        </div>
    )
}

function ProductSection() {
    return (
        <>
            <div className="flex items-center">

                <div>
                   <img width={200} height={100} src="https://casaroyal.vtexassets.com/assets/vtex.file-manager-graphql/images/d7ec2977-6a70-4e25-8113-702aa426a5c7___f1846e0abf5ca3da1dfec1dbaa3f5e15.png" />
                </div>

                <CarouselSize />

            </div>
        </>
    )
}