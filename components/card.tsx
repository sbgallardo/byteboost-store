import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
  } from "@/components/ui/table"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { Textarea } from "@/components/ui/textarea"

  
export function CrudCard(){
    return(
        <Tabs defaultValue="Create" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Create">Agregar</TabsTrigger>
        <TabsTrigger value="List">Listar</TabsTrigger>
      </TabsList>
      <TabsContent value="Create">
        <Card>
          <CardHeader>
            <CardTitle>Agregar</CardTitle>
            <CardDescription>
              Agregar productos al catalogo de la tienda
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Nombre producto</Label>
              <Input id="name" defaultValue="" />
            </div>

            <div className="flex space-x-2">
            <div className="space-y-1">
                <Label htmlFor="price">Precio</Label>
                <Input id="price" defaultValue="" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="discount">Descuento</Label>
                <Input id="discount" defaultValue="" />
            </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="stock">Cantidad</Label>
              <Input id="stock" defaultValue="" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="categories">Categorias</Label>
                <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleccione categoria" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">GPU'S</SelectItem>
                    <SelectItem value="2">CPU'S</SelectItem>
                </SelectContent>
                </Select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="brand">Marca</Label>
              <Input id="brand" defaultValue="" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="brand">Seleccionar imagen</Label>
                <Input id="image" defaultValue="" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="desc">Descripcion</Label>
              <Textarea />
            </div>

          </CardContent>
          <CardFooter>
            <Button>Agregar producto</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value = "List">

      </TabsContent>
    </Tabs>
    )

}