import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"

export function CrudCard() {
  return (

    <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white mt-2">
      <div className="order-last w-full md:order-none container px-2 lg:px-96 md:px-2 sm:px-2">
      <div className="flex justify-between">
          <div className="w-full space-y-1 pr-1">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" defaultValue="" />
          </div>
          <div className="w-full space-y-1">
            <Label htmlFor="Stock">Stock</Label>
            <Input id="stock" defaultValue="" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full space-y-1 pr-1">
            <Label htmlFor="price">Precio</Label>
            <Input id="price" defaultValue="" />
          </div>
          <div className="w-full space-y-1">
            <Label htmlFor="discount">Descuento</Label>
            <Input id="discount" defaultValue="" />
          </div>
        </div>

          <div className="flex justify-between">
            <div className="w-full space-y-1 pr-1">
              <Label htmlFor="categories">Categorias</Label>
              <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione categoria" />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="1">GPU'S</SelectItem>
                  <SelectItem value="2">CPU'S</SelectItem>
              </SelectContent>
              </Select>
            </div>
            <div className="w-full space-y-1">
              <Label htmlFor="categories">Marcas</Label>
              <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione marca" />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="1">GPU'S</SelectItem>
                  <SelectItem value="2">CPU'S</SelectItem>
              </SelectContent>
              </Select>
            </div>
          </div>
        <div className="space-y-1">
          <Label htmlFor="desc">Descripcion</Label>
          <Textarea />
        </div>
        <div className="space-y-1">
          <Label htmlFor="brand">Ingrese enlace de imagen</Label>
          <Input id="image" defaultValue="" />
        </div>
        <div className="w-full flex justify-center pt-3">
          <Button className="w-40">Confirmar</Button>
        </div>
      </div>
    </div>
  )
}