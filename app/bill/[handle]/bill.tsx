import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
    CardHeader
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { apiUrl } from "@/lib/env";
import { useQuery } from "@tanstack/react-query";
import Pay from "@/components/pay";
import { formatPrice } from "@/utils/pricing";

interface Wishlist {
    id: string;
    partnerId: string;
    handle: string;
    createdAt: string | null;
    status: "active" | "paid" | "cancelled";
}

interface WishlistItem {
    id: string
    wishlistId: string
    productId: string
    productName: string
    quantity: number
    productPrice: number
}

async function getWishlist (handle: string, token: string) {
    const bill = await fetch(`${apiUrl}/wishlist/${handle}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (bill.status === 404) return null
    return bill.json()
}

export default function Bill({handle, token}: {handle: string, token: string}) {
    const { status, data  } = useQuery({queryKey: [handle], queryFn: () => getWishlist(handle, token)})

    if (status === 'error') return <div>Error</div>
    if (status === 'pending') return <div>Loading...</div>
    if (!data) return <div>Not found</div>
    let total = 0;

    if (data) {
        total = data.wishlistItems.reduce((acc: number, item: WishlistItem) => acc + item.productPrice * item.quantity, 0)
    }


    return (
        <div>
            <BillDetails data={data.wishlist[0]} total={total}/>
            <div className="mb-2 flex items-center">
                <MdOutlineShoppingBag className="mr-2 w-7 h-7"/>
                <h2 className="text-2xl font-semibold">Listado de productos</h2>
            </div>
            <ProductTable data={data.wishlistItems} total={total} />
        </div>
    )
}

export function ProductTable({data, total}: {data: WishlistItem[], total?: number}) {
    return (
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
                {data.map((wishlist) => (
                    <TableRow key={wishlist.id}>
                        <TableCell className="font-medium">{wishlist.productId}</TableCell>
                        <TableCell>{wishlist.productName}</TableCell>
                        <TableCell>{wishlist.quantity}</TableCell>
                        <TableCell className="text-right">{formatPrice(wishlist.productPrice)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            {total && (
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">{formatPrice(total)} CLP</TableCell>
                    </TableRow>
                </TableFooter>
            )}
        </Table>
    )
}

export function BillDetails({data, total}: {data: Wishlist, total: number}) {
    const statusMap = new Map([
        ["active", "Activa"],
        ["paid", "Pagada"],
        ["cancelled", "Cancelada"]
    ]);

    const getStatus = (status: string) => {
        return statusMap.get(status)
    }

    return (
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
                        ID Socio
                      </span>
                            <span>{data.partnerId}</span>
                        </li>
                        <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                          ID Factura
                      </span>
                            <span>{data.id}</span>
                        </li>
                    </ul>

                    <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Estado</span>
                            <span className={data.status === "active" ? "text-green-700" : "text-muted-foreground"}>{getStatus(data.status)}</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                            <span className="text-muted-foreground">Total</span>
                            <span>{formatPrice(total)} CLP</span>
                        </li>
                    </ul>
                </div>
            </CardContent>
            <CardFooter>
                <Pay total={total}>
                    <Button variant="outline" disabled={data.status !== "active"}>
                        <MdOutlineShoppingCartCheckout className="mr-2"/>
                        Pagar Factura
                    </Button>
                </Pay>
            </CardFooter>
        </Card>
    )
}