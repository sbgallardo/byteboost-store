import { useQuery } from "@tanstack/react-query"
import {Prod} from "@/lib/types";

export function ProductList() {

    const { status, data: products } = useQuery({queryKey: ['results'], queryFn: getProducts})

    if (status === 'pending') return <div>Loading...</div>
    if (status === 'error') return <div>Error</div>

    const results = products.results as Prod[];

    console.log(products)
    return (
        <>
            <h1>Products</h1>
            <ul>
                {results.map((item) =>
                    <li key={item.id}>{item.name}</li>
                )}
            </ul>
        </>
    )
}

const getProducts = async () => {
    const res = await fetch('https://byteboost-api.sebas.lat/products');
    return res.json()
}
