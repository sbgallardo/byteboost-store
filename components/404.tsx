import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FaExternalLinkAlt} from "react-icons/fa";

export default function NotFoundPage() {
    return (
        <div>
            <div className="flex items-center mt-20 mb-20 p-4">
                <div className="mx-auto">
                    <div className="items-center justify-center p-8">
                        <h1>No se encontro el producto</h1>
                        <Link href="/store">
                            <Button variant="outline" className="flex gap-2 items-center">
                                <span>Back to store</span>
                                <FaExternalLinkAlt/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}