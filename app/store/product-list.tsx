import { useQuery } from "@tanstack/react-query"
import {Prod, SearchParams} from "@/lib/types";
import Grid from "@/components/grid";
import ProductGridItems from '@/components/layout/product-grid-items';
import { LoadingSpinner } from "@/components/loading";
import {apiUrl} from "@/lib/env";

export function ProductList({filters}: {filters:SearchParams}) {

    const { status, data: products } = useQuery({
        queryKey: ['results'],
        queryFn: () => getProducts(filters)
    })

    if (status === 'pending') return <LoadingSpinner />
    if (status === 'error') return <div>Error</div>

    const results = products.results as Prod[] || products as Prod[];

    // console.log(results)
    if (results.length === 0 || !results) return <div>no results</div>

    return (
        <>
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ProductGridItems products={results} />
            </Grid>
        </>
    )
}

const getProducts = async (filters: SearchParams) => {
    let res;

    switch (filters === null) {
        case !filters.sort:
            res = await fetch(`${apiUrl}/products?sort=${filters.sort}`)
            break
        case !filters.q:
            res = await fetch(`${apiUrl}/products?q=${filters.q}`)
            break
        case !filters.brand:
            res = await fetch(`${apiUrl}/products?brand=${filters.brand}`)
            break
        case !filters.category:
            res = await fetch(`${apiUrl}/products?category=${filters.category}`)
            break
        default:
            res = await fetch(`${apiUrl}/products`)
            break
    }

    return res.json()
}
