'use client'
import { Categories } from "@/components/sections";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

export default function Page() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="pt-3">
                <Categories />
            </div>
        </QueryClientProvider>
    )
}