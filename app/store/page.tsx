import {Header} from "@/components/Header";
import Footer from "@/components/footer";
import {Products} from "@/components/Products";
import { Prod } from "@/lib/schema"

export default function Page() {



    const products: Prod[] = [
        {
            id: 1,
            name: "test",
            price: 1000
        },
        {
            id: 2,
            name: "Hello",
            price: 2000
        }
    ]

    return (
        <main>
            <Header/>

            <p>store</p>
            <div className="p-20">
                <Products products={products} />
            </div>

            <Footer/>
        </main>
    )
}