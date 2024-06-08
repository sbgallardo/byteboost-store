"use client"

import {UserProfile, useUser} from "@auth0/nextjs-auth0/client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardFooter,
    CardDescription
} from "@/components/ui/card"


import Link from "next/link"
import Cart from "@/components/cart";

import { IoLogOut } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import {FormEvent, useState} from "react";

const Loading = () => {
    return (
        <div className="">
            <Button variant="ghost" className="overflow-hidden">
                loading
            </Button>
        </div>
    )
}

export const AvatarMenu = () => {
    const { user, error, isLoading } = useUser();

    return (
        <>
            {isLoading && <Loading />}
            {user ? (
                <div className="relative border-t lg:border-none">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-indigo-600 lg:focus:ring-2 lg:block">
                            <Avatar>
                                <AvatarImage src={user.picture ? user.picture : ""}/>
                                <AvatarFallback>?</AvatarFallback>
                            </Avatar>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className="text-center">{user.nickname}</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                            {user.email === "admin@example.com" &&
                                (
                                    <Link href="/admin">
                                        <DropdownMenuItem>
                                            <span>Administración</span>
                                        </DropdownMenuItem>
                                    </Link>
                                )
                            }
                            <Link href="/profile">
                                <DropdownMenuItem>
                                    <span>Ver Perfil</span>
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/api/auth/logout">
                                <DropdownMenuItem>
                                    Cerrar sesión
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
            ) : isLoading ? null : (
                <Link href="/api/auth/login">
                    <Button variant="ghost">
                        <div className="flex gap-2 items-center">
                            <FaUser />
                            <span>Iniciar Sesión</span>
                        </div>
                    </Button>
                </Link>
            )}
            {error && (<div>error</div>)}
        </>
    )
}


export const MenuDrawer = () => {

    const { user, error, isLoading } = useUser();

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="ghost" className="text-gray-500 hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="w-full">
                        <SearchProduct />
                    </DrawerTitle>
                    <DrawerDescription asChild>
                        <ProfileCard user={user} />
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button asChild>
                        <Cart />
                    </Button>
                    <DrawerClose asChild>
                        <Button variant="outline" className="w-full">Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}


export const SearchProduct = () => {
    const [inputContent, setInputContent] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        window.location.href = `/store?q=${inputContent}`;
    };

    return (
        <form
            className="flex-1 items-center justify-start pb-4 lg:flex lg:pb-0"
            onSubmit={(e) => {handleSubmit(e)}}
        >
            <div className="flex items-center gap-1 px-2 border rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    minLength={2}
                    spellCheck="false"
                    className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                    onChange={(e) => {setInputContent(e.target.value)}}
                />
            </div>
        </form>
    )
}

const ProfileCard = ({user}: {user: UserProfile | undefined}) => {
    return (
        <>
            {user ? (
                <Card>
                    <Link href="/profile">
                        <CardHeader className="items-center content-center">
                            <CardTitle>
                                {user.nickname}
                            </CardTitle>
                            <CardDescription>
                                <Avatar>
                                    <AvatarImage src={user.picture ? user.picture : ""} />
                                    <AvatarFallback>?</AvatarFallback>
                                </Avatar>
                            </CardDescription>
                        </CardHeader>
                    </Link>
                    <CardFooter>
                        <Link href="/api/auth/logout" className="w-full">
                            <Button variant="outline" className="w-full">
                                <div className="flex gap-2">
                                    <span>Sign out </span>
                                    <IoLogOut className="w-5 h-5"/>
                                </div>
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
                ) : (
                    <Card>
                        <CardHeader>
                            <CardTitle>You are not logged in</CardTitle>
                            <CardDescription>To use some features you need to be logged in</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Link href="/api/auth/login" className="w-full">
                                <Button variant="outline" className="w-full">
                                    <div className="flex gap-2">
                                        <span>Log in </span>
                                        <IoLogIn className="w-5 h-5"/>
                                    </div>
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                )}
        </>
    )
}