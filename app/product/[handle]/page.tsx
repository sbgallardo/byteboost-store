import { getProduct } from "@/lib/external";
import {Header} from "@/components/Header";
import Footer from "@/components/footer";
import NotFoundPage from "@/components/404";

export default async function ProductPage({ params }: { params: { handle: string } }) {
    const product = await getProduct(Number(params.handle))
    const p = product ? product.data[0] : null

    return (
        <main>
            <Header />

            {p ? (
                <div>


                </div>
            ) : (
                <NotFoundPage />
            )}

            <Footer />
        </main>
    )
}