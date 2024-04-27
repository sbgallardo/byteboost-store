'use client'

import Product from "@/app/product/[handle]/product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function ProductPage({ params }: { params: { handle: string } }) {

    return (
        <QueryClientProvider client={queryClient}>
            <Product slug={params.handle} />
        </QueryClientProvider>
    )
}