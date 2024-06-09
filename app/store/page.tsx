"use client"

import { ProductList } from "@/app/store/product-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {SearchParams} from "@/lib/types";

const queryClient = new QueryClient();

export default function Page({searchParams}:{searchParams?: { [key: string]: string | string[] | undefined }; }) {

    const { sort, q: searchValue, category: category, brand: brand } = searchParams as { [key: string]: string };

    const filters: SearchParams = {
        q: searchValue,
        brand: brand,
        category: category,
        sort: sort
    }

    const anyFilter = !!(searchValue ?? category ?? brand ?? sort);

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ProductList filters={filters}/>
            </QueryClientProvider>
        </>
    )
}

