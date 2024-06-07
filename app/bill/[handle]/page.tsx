'use client'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Bill from "@/app/bill/[handle]/bill";


export default function ProductPage({ params }: { params: { handle: string } }) {
    const queryClient = new QueryClient();
    let token = null

    try {
        token = new URLSearchParams(window.location.search).get('token');
    } catch (e) {
        console.error(e)
    }

    let decoded = "";

    if (token) {
        try {
            decoded = atob(token);
            console.log(decoded)
        } catch (e) {
            console.error(e)
            decoded = token
        }
    }

    console.log(decoded)

    return (
        <QueryClientProvider client={queryClient}>
            <Bill handle={params.handle} token={decoded}/>
        </QueryClientProvider>
    )
}
