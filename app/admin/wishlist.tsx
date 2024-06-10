"use client"
import {
    Table,
    TableBody,
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
import { apiUrl } from "@/lib/env";
import { toast } from "sonner"
import { useState } from "react";

export async function fetchWishlist() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_3PARTY}`)
    return await response.json()
}

export async function sendConfirmation(body: any, reject: boolean) {
    if (reject === true) {
        await fetch(`${apiUrl}/confirm-wishlist`, { method: "DELETE" })
    } else {
        await fetch(`${apiUrl}/confirm-wishlist`, { method: "POST" , body: JSON.stringify(body)})
    }
}

export function WishlistTable() {
    const { status, data } = useQuery({queryKey: ["wishlist"], queryFn: fetchWishlist})
    const [disabled, setDisabled] = useState(false)

    const handleAccept = (id: number): void => {
        setDisabled(true)
        toast("Se envio el Email", {
            description: "Se envio el email de confirmación.",
            action: {
                label: "Ok",
                onClick: () => console.log(""),
            },
        })
        sendConfirmation({
            details: {
                "id": id
            },
        }, false).then(
            r => console.log(r)
        )
    }

    const handleReject = (): void => {

        setDisabled(true)
        toast("Se envio el Email", {
            description: "Se envio el email de rechazo.",
            action: {
                label: "Ok",
                onClick: () => console.log(""),
            },
        })

        sendConfirmation({}, true).then(
            r => console.log(r))
    }

    if (status === "pending") return <div>Loading...</div>
    if (status === "error") return <div>Error</div>

    return (
        <div className="mx-auto flex flex-col gap-8  pb-4 text-black md:flex-row dark:text-white mt-2">
            <div className="order-last w-full md:order-none">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
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
                                    <TableCell>{formatPrice(item.budget)}</TableCell>
                                    <TableCell className="text-right">
                                        <Dialog
                                            onOpenChange={
                                                (isOpen) => {
                                                    if (isOpen) {
                                                        setDisabled(false)
                                                    } else {
                                                        setDisabled(true)
                                                    }}
                                            }
                                        >
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
                                                                {item.product.map((item: any) => (
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
                                                            <Button
                                                                variant="destructive"
                                                                className="mr-2"
                                                                onClick={handleReject}
                                                                disabled={disabled}
                                                            >
                                                                Rechazar
                                                            </Button>
                                                            <Button
                                                                onClick={ () => {handleAccept(item._id)}}
                                                                disabled={disabled}
                                                            >
                                                                Confirmar
                                                            </Button>
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