"use client"
import { Category } from "@/lib/types";
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
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";


export function FilterItemDropdown({list}: {list: Category[] | []}) {

    const [currentFilter, setCurrentFilter] = React.useState("Categorias")

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
                            <Link href={`?category=${item.name}`} key={item.id}>
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
