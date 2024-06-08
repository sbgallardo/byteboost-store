"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useQuery } from "@tanstack/react-query";
import { formatPrice } from "@/utils/pricing";

async function fetchWishlist() {
    const response = await fetch("https://run.mocky.io/v3/a0fc6fae-3d70-4d6d-8ae3-898d50167369")
    return await response.json()
}


export function WishlistTable() {

    const { status, data } = useQuery({queryKey: ["wishlist"], queryFn: fetchWishlist})

    if (status === "pending") return <div>Loading...</div>
    if (status === "error") return <div>Error</div>

    return (
        <div className="mx-auto flex flex-col gap-8  pb-4 text-black md:flex-row dark:text-white mt-2">
            <div className="order-last w-full md:order-none">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">N&#176; Bucketlist</TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Total</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item: any) => {
                            return (
                                <TableRow key={item.wishlist_id}>
                                    <TableCell className="font-medium">{item.wishlist_id}</TableCell>
                                    <TableCell>{item.wishlist_name}</TableCell>
                                    <TableCell>{formatPrice(item.buget)}</TableCell>
                                    <TableCell className="text-right">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline">Ver detalle</Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>{item.wishlist_name}</DialogTitle>
                                                    <DialogDescription>
                                                        <Table>
                                                            <TableHeader>
                                                                <TableRow>
                                                                    <TableHead>ID</TableHead>
                                                                    <TableHead>Nombre</TableHead>
                                                                    <TableHead>Cantidad</TableHead>
                                                                    <TableHead>Precio</TableHead>
                                                                </TableRow>
                                                            </TableHeader>
                                                            <TableBody>
                                                                {item.products.map((item: any) => (
                                                                    <TableRow key={item.product_id}>
                                                                        <TableCell>{item.product_id}</TableCell>
                                                                        <TableCell>{item.product_name}</TableCell>
                                                                        <TableCell>{item.quantity}</TableCell>
                                                                        <TableCell>{formatPrice(item.price)}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                        <div className="flex justify-end mt-4">
                                                            <Button variant="destructive" className="mr-2">Rechazar</Button>
                                                            <Button>Confirmar</Button>
                                                        </div>
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}