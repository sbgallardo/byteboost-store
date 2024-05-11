//Se realizan las importaciones despues de haber realizado la intalacion de las tables atraves de CLI
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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import { Button } from "@/components/ui/button"

//Variable de inicio para el id de tablas  
let invoiceCount = 1;

/*
Cosas a tener en cuenta variable anterior: El codigo que tiene el +1 esta en el cuerpo de la tabla, 
puesto a que funciona de esta forma: Se crea la id (comienza en variable), pone datos de la tabla: Repite ciclo 
*/ 

let pay = 1; 

//Esta variables const contiene los datos que se mostraran en las tablas. De momento tiene datos de prueba
  const invoices = [
    {
      invoice: "",
      date: "dd/mm/yyyy",
      totalAmount: 2000000,
      paymentMethod: "Efectivo",
    },
    {
      invoice: "",
      date: "dd/mm/yyyy",
      totalAmount: 350000,
      paymentMethod: "Paypal",
    },
    {
      invoice: "",
      date: "dd/mm/yyyy",
      totalAmount: 50000,
      paymentMethod: "Mastercard",
    },
  ]

  const bucket_data = [
    {
      id: "",
      Nombre: "",
      Cantidad: "",
      Subtotal: "",
    },
  ]

//Algunas funciones que quice hacer
const totalSum = invoices.reduce((total, invoice) => total + invoice.totalAmount, 0); //Suma total de los precios
const formattedTotalSum = totalSum.toLocaleString(); //Agrega los . para la definicion cada ciertos 0




//Crea funcion de exportado para probar con la tabla
export function TableDemo() {
  return (
    <Table>
      {/* */}
      <TableCaption>Bucketlist almacenadas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">N°Bucketlist</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Forma de pago</TableHead>
          <TableHead className="text-right">Monto</TableHead>
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
          <TableCell>{invoice.paymentMethod}</TableCell>
          <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          <TableCell>
            <Dialog>
          <DialogTrigger>Ver detalle</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Detalle Bucketlist</DialogTitle>
              <DialogDescription>
                <Table>
                <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Subtotal</TableHead>
                </TableRow>
                <TableCell>
                <Button variant="outline">Confirmar</Button>
                </TableCell>
                <span style={{marginLeft: '30%'}}></span>
                <TableCell>
                <span style={{marginLeft: '100%'}}></span>
                <Button variant="destructive">Rechazar</Button>
                </TableCell>
                </Table>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
            </Dialog>
</TableCell>
        </TableRow>
      );
    })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Pagado</TableCell>
          <TableCell className="text-right">${formattedTotalSum}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
