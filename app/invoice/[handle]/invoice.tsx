import { useQuery } from "@tanstack/react-query";
import { fetchWishlist } from "@/app/admin/wishlist";
import { ProductTable } from "@/app/bill/[handle]/bill";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {formatPrice} from "@/utils/pricing";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Pay from "@/components/pay";
import {Button} from "@/components/ui/button";
import {MdOutlineShoppingBag, MdOutlineShoppingCartCheckout} from "react-icons/md";


export function Invoice({id}: {id: string}) {
    const { status, data } = useQuery({
        queryFn: fetchWishlist,
        queryKey: ["wishlist"]
    })

    if (status === 'error') return <div>Error</div>
    if (status === 'pending') return <div>Loading...</div>


    const products = data?.find((item: any) => item._id === id)

    return (
        <>
            <Card className="my-5">
                <CardHeader>
                    <CardTitle>Detalles de la factura</CardTitle>
                    <CardDescription>Aqui se muestan los detalles de tu factura</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-3">
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Nombre de Wishlist
                      </span>
                                <span>{products.wishlist_name}</span>
                            </li>
                            <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                          ID Factura
                      </span>
                                <span>{id}</span>
                            </li>
                        </ul>

                        <ul className="grid gap-3">

                            <li className="flex items-center justify-between font-semibold">
                                <span className="text-muted-foreground">Total</span>
                                <span>{formatPrice(products.budget)} CLP</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
                <CardFooter>
                    <Pay total={data.budget}>
                        <Button variant="outline" >
                            <MdOutlineShoppingCartCheckout className="mr-2"/>
                            Pagar Factura
                        </Button>
                    </Pay>
                </CardFooter>
            </Card>

            <div className="mb-2 flex items-center">
                <MdOutlineShoppingBag className="mr-2 w-7 h-7"/>
                <h2 className="text-2xl font-semibold">Listado de productos</h2>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">ID Producto</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Cantidad</TableHead>
                        <TableHead className="text-right">Precio Unitario</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.product.map((wishlist: any) => (
                        <TableRow key={wishlist.id}>
                            <TableCell className="font-medium">{wishlist.product_id}</TableCell>
                            <TableCell>{wishlist.product_name}</TableCell>
                            <TableCell>{wishlist.quantity}</TableCell>
                            <TableCell className="text-right">{formatPrice(wishlist.price)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}