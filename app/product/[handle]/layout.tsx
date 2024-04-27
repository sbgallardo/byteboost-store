import {Header} from "@/components/Header";
import Footer from "@/components/footer";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white mt-2">
                <div className="order-last min-h-screen w-full md:order-none container px-2 lg:px-28 md:px-2 sm:px-2">
                    <main>
                        {children}
                    </main>
                </div>
            </div>

            <Footer/>
        </>
    )
}