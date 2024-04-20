import { Header } from "@/components/Header";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Header/>
                {children}
            <Footer/>
        </main>
    )
}