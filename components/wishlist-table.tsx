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

// Variable de inicio para el id de tablas  
let invoiceCount = 1;

// Esta variables const contiene los datos que se mostraran en las tablas. De momento tiene datos de prueba
const invoices = [
  {
    invoice: "",
    date: "01-05-2024",
    totalAmount: 250000,
    paymentMethod: "Efectivo",
  },
  {
    invoice: "",
    date: "01-05-2024",
    totalAmount: 250000,
    paymentMethod: "Paypal",
  },
  {
    invoice: "",
    date: "01-05-2024",
    totalAmount: 250000,
    paymentMethod: "Mastercard",
  },
  {
    invoice: "",
    date: "01-05-2024",
    totalAmount: 250000,
    paymentMethod: "Visa",
  },
]

const bucket_data = [
  {
    id: "1",
    Nombre: "Producto 1",
    Cantidad: "2",
    Subtotal: "50000",
  },
]

// Algunas funciones que quice hacer
const totalSum = invoices.reduce((total, invoice) => total + invoice.totalAmount, 0); // Suma total de los precios
const formattedTotalSum = totalSum.toLocaleString(); // Agrega los . para la definicion cada ciertos 0

export function TableDemo() {
  return (
    <div className="lg:mx-80 flex justify-center">
      <Table>
        {/* */}
        <TableCaption>Bucketlist almacenadas.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">N° Bucketlist</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Total</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => {
            const currentInvoice = invoiceCount;
            invoiceCount++;

            return (
              <TableRow key={currentInvoice}>
                <TableCell className="font-medium">{currentInvoice}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{`$${invoice.totalAmount.toLocaleString()}`}</TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Ver detalle</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Detalle Bucketlist</DialogTitle>
                        <DialogDescription>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Nombre</TableHead>
                                <TableHead>Cantidad</TableHead>
                                <TableHead>Subtotal</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {bucket_data.map((item, index) => (
                                <TableRow key={index}>
                                  <TableCell>{item.id}</TableCell>
                                  <TableCell>{item.Nombre}</TableCell>
                                  <TableCell>{item.Cantidad}</TableCell>
                                  <TableCell>{item.Subtotal}</TableCell>
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
  )
}
