"use client"

import { ProductList } from "@/app/store/product-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

export default function Page({searchParams}:{searchParams?: { [key: string]: string | string[] | undefined }; }) {

    const { sort, q: searchValue, category: category, brand: brand } = searchParams as { [key: string]: string };


    return (
        <>
            <ul>
                <li>{searchValue}</li>
                <li>{category}</li>
                <li>{brand}</li>
                <li>{sort}</li>
            </ul>
            <QueryClientProvider client={queryClient}>
                <ProductList />
            </QueryClientProvider>
        </>
    )
}

