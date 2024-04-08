"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {
    Card,
    CardContent
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { useState } from "react";


export default function Cart() {




    const [itemCount, setItemCount] = useState(0);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost">Cart ({itemCount})</Button>
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