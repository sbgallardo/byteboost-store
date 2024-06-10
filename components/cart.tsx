"use client"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import Pay from "@/components/pay";


export default function Cart() {

    const [itemCount, setItemCount] = useState(0);


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <div className="">
                        <FaShoppingCart/>
                    </div>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Cart</SheetTitle>

                </SheetHeader>

                {itemCount === 0 ? (
                    <div className="pt-5">
                        Cart is empty
                    </div>
                ) : (
                    <div>

                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}

export function AddToCart({id}: {id: number}) {
    const addToCart = () => {
        console.log(id)
    }

    return (
        <>
            <Pay>
                <Button
                    onClick={() => {addToCart()}}
                    variant="secondary"
                    className="flex items-center justify-center w-full"
                >
                    <MdAddShoppingCart className="mr-2 w-4 h-4"/>

                    Agregar al carrito
                </Button>
            </Pay>
        </>
    )
}