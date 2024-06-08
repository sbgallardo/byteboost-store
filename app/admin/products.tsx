"use client"

import { useQuery } from "@tanstack/react-query";
import { ProductList } from "@/components/product-form"
import {apiUrl} from "@/lib/env";

async function fetchProducts() {
    const data = await fetch(`${apiUrl}/products`)
    return data.json()
}

export function Products() {
    const { status, data } = useQuery({
        queryFn: fetchProducts,
        queryKey: ["products"]
    })

    if (status === "pending") return <span>Cargando...</span>
    if (status === "error") return <span>Error</span>

    return (
        <>
            <ProductList products={data.results} />
        </>
    )
}