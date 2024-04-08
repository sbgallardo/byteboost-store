"use client"
import { Prod } from "@/lib/schema"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { create } from 'zustand'


export function Products({products}: {products: Prod[]}) {




    const addToCart = (id: number) => {
        console.log(id)

    }


    return (
        <>
            {products.map(
                function (item) {
                    return (
                        <div key={item.id} className="p-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>{item.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Button onClick={() => {addToCart(item.id)}}>Add to cart</Button>
                                </CardContent>
                            </Card>
                        </div>
                    )
                }
            )}

        </>
    )
}