import React, { Suspense } from 'react';
import { Category } from "@/lib/types";
import Link from 'next/link'
import { FilterItemDropdown } from './client-side'

function FilterItemList({ list, slug }: { list: Category[] | [], slug: string }) {
    return (
        <>
            {list.map((item: Category, i) => (
                <FilterItem key={i} item={item} slug={slug} />
            ))}
        </>
    );
}

function FilterItem({item, slug}: {item:Category, slug: string}) {
    return (
        <>
            <Link href={`?${slug}=${item.slug}`} className="hover:underline">
                <span>
                    {item.name}
                </span>
            </Link>
            <br/>
        </>
    )
}

export default function FilterList({ list, title, slug }: { list: Category[] | []; title: string, slug: string}) {
    return (
        <>
            <nav>
                {title ? (
                    <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
                        {title}
                    </h3>
                ) : null}
                <ul className="hidden md:block">
                    <Suspense fallback={null}>
                        <FilterItemList list={list} slug={slug} />
                    </Suspense>
                </ul>
                <ul className="md:hidden">
                    <Suspense fallback={null}>
                        <FilterItemDropdown list={list} slug={slug} title={title} />
                    </Suspense>
                </ul>
            </nav>
        </>
    );
}


