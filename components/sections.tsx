'use client'

import Link from "next/link";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from '@/components/ui/card'
import { useQuery } from "@tanstack/react-query";
import {Brand, Category} from "@/lib/types";


const getCategories = async () => {
    const res = await fetch('https://byteboost-api.sebas.lat/categories');
    return res.json()
}

const getBrands = async () => {
    const res = await fetch('https://byteboost-api.sebas.lat/brands');
    return res.json()
}

export function Categories() {
    const { status, data } = useQuery({queryKey:['categories'], queryFn: getCategories})

    const categories = data as Category[];

    if (status === 'pending') return <div>Loading...</div>
    if (status === 'error') return <div>error</div>

    console.log(categories)

    return (
        <>
            <div className="grid gap-3">
                {categories.map((item, i) => (
                    <div key={i} className="">
                        <Link href={`/store?category=${item.slug}`}>
                            <Card className="hover:dark:bg-slate-900 hover:bg-slate-100">
                                <CardHeader>
                                    <CardTitle>{item.name}</CardTitle>
                                </CardHeader>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export function Brands() {
    const { status, data } = useQuery({queryKey:['brands'], queryFn: getBrands})

    const brands = data as Brand[];

    if (status === 'pending') return <div>Loading...</div>
    if (status === 'error') return <div>error</div>

    return (
        <>
            <div className="grid gap-3">
                {brands.map((item, i) => (
                    <div key={i} className="">
                        <Link href={`/store?brand=${item.slug}`}>
                            <Card className="hover:dark:bg-slate-900 hover:bg-slate-100">
                                <CardContent className="flex items-center gap-4 p-4 md:p-6">
                                    <div className="flex-1 space-y-1">
                                        <h1 className="text-2xl font-semibold">{item.name}</h1>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
