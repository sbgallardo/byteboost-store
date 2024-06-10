import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { MdCreditCard } from "react-icons/md";
import { formatPrice } from "@/utils/pricing";
import { SiRoblox } from "react-icons/si";
import { SiRiotgames } from "react-icons/si";
import { GiCamel } from "react-icons/gi";

export default function Pay({children, total}: {children: React.ReactNode, total?: number}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Pago</DialogTitle>
                    <DialogDescription>Elige tu metodo de pago</DialogDescription>
                </DialogHeader>
                <div>
                    {total && (
                    <div className="flex items-center justify-between">
                        <h3 className="text-muted-foreground">Total a pagar</h3>
                        <p className="font-semibold">{formatPrice(total)} CLP</p>
                    </div>
                        )}
                    <div className="flex grid gap-2 my-2">
                        <Button variant="outline">
                            <SiRiotgames className="mr-2"/>
                            Riot Points
                        </Button>
                        <Button variant="outline">
                            <SiRoblox className="mr-2"/>
                            Robux
                        </Button>
                        <Button variant="outline">
                            <GiCamel className="mr-2"/>
                            Camellos (Solo para Dubai)
                        </Button>
                        <Button variant="outline">
                            <FaCcPaypal className="mr-2"/>
                            Paypal
                        </Button>
                        <Button variant="outline">
                            <FaCcStripe className="mr-2"/>
                            Stripe
                        </Button>
                        <Button variant="outline">
                            <FaApplePay className="mr-2"/>
                            Apple Pay
                        </Button>
                        <Button variant="outline">
                            <FaGooglePay className="mr-2"/>
                            Google Pay
                        </Button>
                        <Button variant="outline">
                            <MdCreditCard className="mr-2"/>
                            Tarjeta de credito/debito
                        </Button>

                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancelar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}