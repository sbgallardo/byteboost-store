"use client"

import { CrudCard } from "@/components/product-form"
import {WishlistTable} from "@/app/admin/wishlist";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MdFormatListBulleted } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Products } from "@/app/admin/products";

export default function Admin() {
    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <div className="flex mb-8 mt-2 text-2xl items-center font-semibold">
                    <MdFormatListBulleted className="inline mr-2"/>
                    <h1>Wishlist</h1>
                </div>
                <WishlistTable/>
                <div className="flex my-3 text-2xl items-center font-semibold justify-between">
                    <div className="flex items-center">
                        <MdOutlineShoppingCart className="inline mr-2"/>
                        <h1>Productos</h1>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">
                                <div className="flex items-center">
                                    <IoMdAddCircleOutline className="mr-2 h-4 w-4"/>
                                    <span>Agregar Producto</span>
                                </div>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Agregar Producto</DialogTitle>
                                <DialogDescription>
                                    Crear un nuevo producto
                                </DialogDescription>
                            </DialogHeader>
                            <div>
                                <CrudCard/>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                <Products />
            </QueryClientProvider>
        </>
    )
}