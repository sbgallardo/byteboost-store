import clsx from 'clsx';
import { Suspense } from 'react';
import {getBrands, getCategories} from "@/lib/external";
import FilterList from '@/components/store/filters'

async function CollectionList() {
    const collections = await getCategories();
    return <FilterList list={collections} title="Categorias" slug="category" />;
}

async function BrandsList() {
    const brands = await getBrands();
    return <FilterList list={brands} title="Marcas" slug="brand" />
}

const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded';
const activeAndTitles = 'bg-neutral-800 dark:bg-neutral-300';
const items = 'bg-neutral-400 dark:bg-neutral-700';

export function Collections() {
    return (
        <Suspense
            fallback={<FilterSkeleton />}
        >
            <CollectionList />
        </Suspense>
    );
}

export function FilterByBrands() {
    return (
        <Suspense
            fallback={<FilterSkeleton />}
        >
            <BrandsList />
        </Suspense>
    )
}

const FilterSkeleton = () => {
    return (
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
            <div className={clsx(skeleton, activeAndTitles)}/>
            <div className={clsx(skeleton, activeAndTitles)}/>
            <div className={clsx(skeleton, items)}/>
            <div className={clsx(skeleton, items)}/>
            <div className={clsx(skeleton, items)}/>
            <div className={clsx(skeleton, items)}/>
            <div className={clsx(skeleton, items)}/>
            <div className={clsx(skeleton, items)}/>
            <div className={clsx(skeleton, items)}/>
            <div className={clsx(skeleton, items)}/>
        </div>
    )
}