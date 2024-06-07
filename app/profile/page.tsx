import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from '@/components/ui/card'
import {Button} from "@/components/ui/button";
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";
import Link from "next/link";
import { MdExitToApp } from "react-icons/md";

export default withPageAuthRequired(async function Page() {
    const session = await getSession();
    const user = session ? session.user : null;

    return (
        <>
            {!user ? null : (
                <div className="my-10">
                    <div className="container lg:px-28 ">
                        <Card className="flex grid gap-3 items-center justify-center text-center">
                            <CardHeader className="grid gap-2">
                                <CardTitle>{user.nickname}</CardTitle>
                                <div className="flex justify-center">
                                    <Avatar className="h-16 w-16">
                                        <AvatarImage src={user.picture}/>
                                        <AvatarFallback>?</AvatarFallback>
                                    </Avatar>
                                </div>
                                <CardDescription>{user.email}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Link href="/api/auth/logout">
                                    <Button variant="ghost">
                                        <MdExitToApp className="mr-2"/>
                                        Cerrar sesión
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            )}
        </>
    )
}, {returnTo: '/api/auth/login'})