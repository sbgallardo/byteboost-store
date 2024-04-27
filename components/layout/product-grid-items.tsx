import Grid from '@/components/grid';
import { GridTileImage } from '@/components/grid/tile';
import { Prod } from '@/lib/types';
import Link from 'next/link';
import { getSingleImageOrDefault } from "@/lib/utils";

export default function ProductGridItems({ products }: { products: Prod[] }) {
    return (
        <>
            {products.map((product) => (
                <Grid.Item key={product.slug} className="animate-fadeIn">
                    <Link className="relative inline-block h-full w-full" href={`/product/${product.slug}`}>
                        <GridTileImage
                            alt={product.name}
                            label={{
                                title: product.name,
                                amount: product.price.toString(),
                                currencyCode: 'CLP'
                            }}
                            src={getSingleImageOrDefault(product.images)}
                            fill
                            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                    </Link>
                </Grid.Item>
            ))}
        </>
    );
}