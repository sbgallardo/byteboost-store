import {useQuery} from "@tanstack/react-query";
import {CustomBreadcrumb} from "@/components/breadcrumb";
import NotFoundPage from "@/components/404";
import {BreadcrumbType} from "@/lib/types";
import { SkeletonProduct } from "@/components/skeleton";
import { ProductDescription } from "@/components/product/product-description";
import {Gallery} from "@/components/product/gallery";
import { Suspense } from "react";

async function getProduct (slug: string) {
    const res = await fetch(`https://byteboost-api.sebas.lat/products?slug=${slug}`);
    return res.json()
}

export default function Product({slug}: {slug: string}) {
    const { status, data } = useQuery({queryKey: [slug], queryFn: () => getProduct(slug)});

    if (status === 'pending') return <SkeletonProduct />
    if (status === 'error') return <div>Error</div>

    const product = data !== undefined ? data[0] : null;

    if (product === undefined) return <NotFoundPage />

    const paths: BreadcrumbType[] = [{name:"Inicio", path: "/"},{name:"Tienda", path:"/store"},{name:product.name, path:null}]

    return (
        <>
            <CustomBreadcrumb paths={paths}/>
            <div className="mx-auto max-w-screen-2xl px-4 mt-2">
                <div
                    className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
                    <div className="h-full w-full basis-full lg:basis-4/6">
                        <Suspense
                            fallback={
                                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden"/>
                            }
                        >
                            <Gallery
                                images={
                                        Array.isArray(product?.images)
                                        ?
                                        product.images.map((image: any) => ({src: image, altText: "Product image"}))
                                        :
                                        product?.images
                                        ?
                                        product.images
                                        :
                                        null
                                }
                            />
                        </Suspense>
                    </div>

                    <div className="basis-full lg:basis-2/6">
                        <ProductDescription product={product}/>
                    </div>
                </div>
                {/*<RelatedProducts id={product.id}/>*/}
            </div>
        </>
    )
}

