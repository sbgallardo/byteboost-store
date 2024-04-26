import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter
} from '@/components/ui/card'
import {Button} from "@/components/ui/button";

export default withPageAuthRequired(async function Page() {

    const session = await getSession();

    const user = session ? session.user : null;

    return (
        <>
            {!user ? null : (
                <div>
                    <div className="container lg:px-28 ">
                        <Card>
                            <CardHeader>
                                <CardTitle>{user.nickname}</CardTitle>
                                <CardDescription>{user.email}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button>Log out</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            )}
        </>
    )
}, {returnTo: '/api/auth/login'})