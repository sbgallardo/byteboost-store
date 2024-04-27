import { Header } from "@/components/Header";
import Footer from "@/components/footer";
import {Collections, FilterByBrands} from "@/components/store/collections";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header/>
            <div
                className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white mt-2">
                <div className="order-first w-full flex-none md:max-w-[125px]">
                    <Collections/>
                </div>
                <div className="order-last min-h-screen w-full md:order-none">{children}</div>
                <div className="order-none flex-none md:order-last md:w-[125px]">
                    <FilterByBrands />
                </div>
            </div>
            <Footer/>
        </>
    )
}