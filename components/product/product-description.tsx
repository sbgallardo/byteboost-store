import { AddToCart } from '@/components/cart';
import Price from '@/components/price';
import { Prod } from '@/lib/types';
import { Suspense } from 'react';
import { Badge } from "@/components/ui/badge";

export function ProductDescription({ product }: { product: Prod }) {
    return (
        <>
            <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
                <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
                <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
                    <Price
                        amount={product.price.toString()}
                        currencyCode="CLP"
                    />
                </div>
            </div>

            <Suspense fallback={null}>
                <div className="flex content-center items-center gap-2 pb-2"><span className="font-semibold">Stock</span> <Badge variant="outline">{product.stock} Unidades</Badge></div>
            </Suspense>

            <p className="mb-6 text-sm leading-tight dark:text-white/[60%]">
                {product.description}
            </p>

            <Suspense fallback={null}>
                <AddToCart id={product.id} />
            </Suspense>
        </>
    );
}