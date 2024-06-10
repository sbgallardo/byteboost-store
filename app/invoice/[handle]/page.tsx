'use client'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Invoice} from "@/app/invoice/[handle]/invoice";
import {MdOutlineShoppingBag} from "react-icons/md";

export default function ProductPage({ params }: { params: { handle: string } }) {
    const queryClient = new QueryClient();
    const id  = params.handle as string;

    return (
        <QueryClientProvider client={queryClient}>

            <Invoice id={id} />
        </QueryClientProvider>
    )
}
