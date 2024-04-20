import {Header} from "@/components/Header";
import Footer from "@/components/footer";
import { CustomBreadcrumb } from "@/components/breadcrumb";
import {BreadcrumbType} from "@/lib/types";

export default function Layout({ children }: { children: React.ReactNode }) {

    const paths: BreadcrumbType[] = [
        {
            name: "Inicio",
            path: "/"
        },
        {
            name: "Tienda",
            path: "/store"
        },
        {
            name: "Marcas",
            path: null
        }
    ]

    return (
        <>
            <Header/>
            <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white mt-2">
                <div className="order-last min-h-screen w-full md:order-none container px-2 lg:px-28 md:px-2 sm:px-2">
                    <CustomBreadcrumb paths={paths} />
                    <main>
                        {children}
                    </main>
                </div>
            </div>

            <Footer/>
        </>
    )
}
