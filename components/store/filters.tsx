import React, { Suspense } from 'react';
import { Category } from "@/lib/types";
import Link from 'next/link'
import { FilterItemDropdown } from './client-side'

function FilterItemList({ list }: { list: Category[] | [] }) {
    return (
        <>
            {list.map((item: Category, i) => (
                <FilterItem key={i} item={item} />
            ))}
        </>
    );
}

function FilterItem({item}: {item:Category}) {
    return (
        <>
            <Link href={`?category=${item.name}`} className="hover:underline">
                <span>
                    {item.name}
                </span>
            </Link>
            <br/>
        </>
    )
}

export default function FilterList({ list, title }: { list: Category[] | []; title?: string }) {
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
                        <FilterItemList list={list} />
                    </Suspense>
                </ul>
                <ul className="md:hidden">
                    <Suspense fallback={null}>
                        <FilterItemDropdown list={list} />
                    </Suspense>
                </ul>
            </nav>
        </>
    );
}


