import Link from "next/link";
import {getBrands, getCategories} from "@/lib/external";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from '@/components/ui/card'

export async function Categories() {
    const categories = await getCategories();

    return (
        <>
            <div className="grid gap-3">
                {categories.map((item, i) => (
                    <div key={i} className="">
                        <Link href={`/store?category=${item.name}`}>
                            <Card className="hover:dark:bg-slate-900 hover:bg-slate-100">
                                <CardHeader>
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export async function Brands() {
    const categories = await getBrands();

    return (
        <>
            <div className="grid gap-3">
                {categories.map((item, i) => (
                    <div key={i} className="">
                        <Link href={`/store?brand=${item.name}`}>
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
