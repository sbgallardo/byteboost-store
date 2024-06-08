import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { apiUrl } from "@/lib/env";
import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/utils/pricing";
import { MdDeleteForever } from "react-icons/md";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

async function createProduct(product:any) {
    const response = await fetch(`${apiUrl}/products`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        },
        method: "POST",
        body: product,
    });

    if (!response.ok) {
        throw new Error("Something went wrong!");
    }

    return response.json();
}

export function CrudCard() {

    const [product, setProduct] = useState({
        name: "",
        stock: 0,
        price: 0,
        discount: 0,
        categoryId: 0,
        brandId: 0,
        description: "",
        images: "",
    });

    const handleSubmit = async () => {
        await createProduct(JSON.stringify(product));
        window.location.reload();
    }


    return (

        <div className="flex flex-col gap-8 text-black md:flex-row dark:text-white mt-2">
            <div className="order-last w-full md:order-none">
                <div className="flex justify-between">
                    <div className="w-full space-y-1 pr-1">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                            id="name"
                            defaultValue=""
                            onChange={(e) => setProduct({...product, name: e.target.value})}
                        />
                    </div>
                    <div className="w-full space-y-1">
                        <Label htmlFor="Stock">Stock</Label>
                        <Input
                            id="stock"
                            defaultValue=""
                            onChange={(e) => setProduct({...product, stock: Number(e.target.value) })}
                        />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-full space-y-1 pr-1">
                        <Label htmlFor="price">Precio</Label>
                        <Input
                            id="price"
                            defaultValue=""
                            onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
                        />
                    </div>
                    <div className="w-full space-y-1">
                        <Label htmlFor="discount">Descuento</Label>
                        <Input
                            id="discount"
                            defaultValue=""
                            onChange={(e) => setProduct({...product, discount: Number(e.target.value)})}
                        />
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="w-full space-y-1 pr-1">
                        <Label htmlFor="categories">Categorias</Label>
                        <Select
                            onValueChange={value => setProduct({...product, categoryId: Number(value)})}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccione categoria" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">GPU</SelectItem>
                                <SelectItem value="3">CPU</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full space-y-1">
                        <Label htmlFor="categories">Marcas</Label>
                        <Select
                            onValueChange={value => setProduct({...product, brandId: Number(value)})}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccione marca" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">GPU</SelectItem>
                                <SelectItem value="2">CPU</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="desc">Descripcion</Label>
                    <Textarea
                        id="desc"
                        defaultValue=""
                        onChange={(e) => setProduct({...product, description: e.target.value})}
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="brand">Ingrese enlace de imagen</Label>
                    <Input
                        id="image"
                        defaultValue=""
                        onChange={(e) => setProduct({...product, images: e.target.value})}
                    />
                </div>
                <div className="w-full flex justify-center pt-3">
                    <Button className="w-40" onClick={() => handleSubmit()}>Confirmar</Button>
                </div>
            </div>
        </div>
    )
}

export function ProductList({products}: {products: any[]}) {

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Precio</TableHead>
                    <TableHead className="text-right">Stock</TableHead>
                    <TableHead className="text-right">Acción</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((item) => (
                    <TableRow key={item.invoice}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{formatPrice(item.price)}</TableCell>
                        <TableCell className="text-right">{item.stock}</TableCell>
                        <TableCell className="text-right">
                            <DeleteProduct id={item.id}/>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export function DeleteProduct({id}: {id: number}) {

    const b = {
        "ids": [id]
    }

    const handleDelete = () => {
        fetch(`${apiUrl}/products`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
                },
                method: "DELETE",
                body: JSON.stringify(b)
            }
        ).then(r => console.log(r));
        window.location.reload();
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="ghost">
                    <MdDeleteForever className="h-5 w-5"/>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Estas Seguro?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Se eliminara el producto {id} de forma permanente.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}