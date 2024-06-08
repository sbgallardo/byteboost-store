"use client"

import { ProductList } from "@/app/store/product-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {SearchParams} from "@/lib/types";

const queryClient = new QueryClient();

export default function Page({searchParams}:{searchParams?: { [key: string]: string | string[] | undefined }; }) {

    const { sort, q: searchValue, category: category, brand: brand } = searchParams as { [key: string]: string };

    const filters: SearchParams = {
        q: searchValue,
        brand_id: brand,
        category: category,
        sort: sort
    }

    const anyFilter = !!(searchValue ?? category ?? brand ?? sort);

    return (
        <>
            {anyFilter
                ?
                <div
                    className="font-semibold"
                >
                    Filters enabled
                </div>
                :
                null
            }
            <ul>
                <li>{searchValue}</li>
                <li>{category}</li>
                <li>{brand}</li>
                <li>{sort}</li>
            </ul>
            <QueryClientProvider client={queryClient}>
                <ProductList filters={filters}/>
            </QueryClientProvider>
        </>
    )
}

