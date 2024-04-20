import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className="container mx-auto flex justify-center p-2 py-5">
                <div className="text-lg font-semibold">
                    ¿Quiénes Somos?
                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-sm"></div>
                </div>
            </div>

            <div className="container mx-auto flex justify-center pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="container mx-auto flex justify-center px-4">
                        <Image width="1000" height="10" src="/byteboost-logo.png" alt="TengoTEC" className="object-cover rounded-lg" />
                    </div>
                    <div className="px-2">
                        <div className="container mx-auto flex justify-center p-2 py-5 pt-2">
                            <div className="text-lg font-semibold">
                                Nuestra Historia
                                <div
                                    className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-sm"></div>
                            </div>
                        </div>
                        <div className="px-3">
                            <p className="mb-4 md:text-lg sm:text-sm">
                                Somos una empresa nacional especializada en la comercialización de productos y equipos
                                tecnológicos.
                                Fundada en el año <span className="text-purple-500 font-bold">2024</span> por cinco
                                alumnos, nuestra historia está marcada por un notable
                                crecimiento. En la actualidad, gestionamos un amplio catálogo que abarca más de <span
                                className="text-purple-500 font-bold">5,000 productos</span>,
                                consolidándonos como un referente en el sector tecnológico.</p>
                            <p className="mb-4 md:text-lg sm:text-sm">
                                Durante nuestra trayectoria, nos hemos dedicado a fortalecer los lazos con nuestra
                                comunidad,
                                incentivando la creatividad y apoyando el desarrollo de un estilo de vida tecnológico.
                                Nos llena
                                de
                                satisfacción haber contribuido al avance hacia un futuro en el que la innovación y la
                                tecnología
                                se
                                fusionan de manera fluida en el día a día, <span className="text-purple-500 font-bold">facilitando
                            el acceso a herramientas y productos que
                            enriquecen la calidad de vida de las personas.</span></p>
                            <p className="mb-4 md:text-lg sm:text-sm">
                                Contamos con sólidas alianzas en el ámbito de la tecnología, establecidas con
                                reconocidas empresas y líderes del sector. Estas colaboraciones estratégicas nos
                                permiten
                                ofrecer a
                                nuestros clientes una <span className="text-purple-500 font-bold">amplia gama de productos de última
                            generación</span>, así como acceso a las últimas
                                innovaciones y tendencias del mercado tecnológico. Nuestra red de socios comerciales nos
                                respalda en
                                nuestro compromiso de brindar productos de calidad y servicios de excelencia a nuestros
                                clientes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto flex justify-center p-2 py-5 pt-10">
                <div className="text-lg font-semibold">
                    Nuestro Trabajo
                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-sm"></div>
                </div>
            </div>

            <div className="">
                <div className="container mx-auto flex justify-center">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-4 text-center lg:grid-cols-3 py-4 dark:text-white">
                        <div
                            className="mx-auto flex max-w-xs flex-col gap-y-4 hover:text-purple-500 hover:ease-out duration-200">
                            <dt className="text-base leading-3">Personas prefieren
                                nuestro servicio
                            </dt>
                            <dd
                                className="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl hover:text-purple-500 hover:ease-out duration-200">
                                +50.000
                            </dd>
                        </div>
                        <div
                            className="mx-auto flex max-w-xs flex-col gap-y-4 hover:text-purple-500 hover:ease-out duration-200">
                            <dt className="text-base leading-3">Ventas en total</dt>
                            <dd
                                className="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl hover:text-purple-500 hover:ease-out duration-200">
                                +110.000
                            </dd>
                        </div>
                        <div
                            className="mx-auto flex max-w-xs flex-col gap-y-4 hover:text-purple-500 hover:ease-out duration-200">
                            <dt className="text-base leading-3">Personas todos los días
                            </dt>
                            <dd
                                className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl hover:text-purple-500 hover:ease-out duration-200">
                                +2.000
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="container mx-auto flex justify-center p-2 py-5 pt-10">
                <div className="text-lg font-semibold">
                    Nuestro Enfoque
                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-sm"></div>
                </div>
            </div>

            <div className="container mx-auto lg:flex justify-center text-center md:grid md:grid-cols-2 py-6 gap-10">
                <div className="pt-4">
                    <div className="flex justify-center items-center">
                        <img className="h-20" src="/quality.png" alt="Tienda"/>
                    </div>
                    <div className="p-3">
                        <div className="text-2x1 font-semibold hover:text-purple-500 hover:ease-out duration-200">
                            Calidad
                        </div>
                        <p className="text-slate-400">
                            Ofrecer la mayor calidad <br/> de productos del mercado.
                        </p>
                    </div>
                </div>
                <div className="pt-4">
                    <div className="flex justify-center items-center">
                        <img className="h-20" src="/comfort.png" alt="Tienda"/>
                    </div>
                    <div className="p-3">
                        <div className="text-2x1 font-semibold hover:text-purple-500 hover:ease-out duration-200">
                            Comodidad
                        </div>
                        <p className="text-slate-400">
                            Ofrecer comodidad digital <br/> a nuestros clientes.
                        </p>
                    </div>
                </div>
                <div className="pt-4">
                    <div className="flex justify-center items-center">
                        <img className="h-20" src="/service.png" alt="Tienda"/>
                    </div>
                    <div className="p-3">
                        <div className="text-2x1 font-semibold hover:text-purple-500 hover:ease-out duration-200">
                            Servicio
                        </div>
                        <p className="text-slate-400">
                            Siempre estar a la <br/> disposición de las personas.
                        </p>
                    </div>
                </div>
            </div>

            <div id="brands" className="container mx-auto flex justify-center p-2 py-5">
                <div className="text-lg font-semibold">
                    Marcas Internacionales
                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-sm"></div>
                </div>
            </div>

            <div className="container mx-auto flex justify-center p-3">
                <img src="https://www.spdigital.cl/static/brands-33e52a50bdb527c008d85552cac19230.svg" alt=""/>
            </div>
            </>
    )
}