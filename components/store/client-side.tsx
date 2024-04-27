"use client"
import { Category, Brand } from "@/lib/types";
import React from "react";
import { Button } from "@/components/ui/button";
import {Suspense} from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";


export function FilterItemDropdown({list, title, slug}: {list: Category[] | Brand[] | [], title: string, slug: string}) {

    const [currentFilter, setCurrentFilter] = React.useState(title)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const clickedDiv = e.currentTarget;
        const keyValue = clickedDiv.dataset?.key;

        if (keyValue) {
            setCurrentFilter(keyValue)
        } else {
            console.error("No key found on the clicked div");
        }
    }

    return (
        <Suspense fallback="fallback">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full">{currentFilter}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                    <DropdownMenuLabel>Categorias</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup className="w-[300px]">
                        {list.map((item) => (
                            <Link href={`?${slug}=${item.slug}`} key={item.id}>
                                <DropdownMenuItem
                                    data-key={item.name}
                                    onClick={(e) => {handleClick(e)}}
                                >
                                    {item.name}
                                </DropdownMenuItem>
                            </Link>
                        ))}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </Suspense>
    )
}
