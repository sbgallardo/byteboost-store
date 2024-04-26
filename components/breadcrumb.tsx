import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BreadcrumbType } from "@/lib/types"
import Link from "next/link"

export function CustomBreadcrumb({paths}: {paths: BreadcrumbType[]}) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {paths.map((item, index) => {
                    return (
                        <>
                            <BreadcrumbItem key={index}>
                                {item.path ? (
                                    <Link className="transition-colors hover:text-foreground" href={item.path}>{item.name}</Link>
                                ) : (
                                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {index === paths.length - 1 ? null : (
                                <BreadcrumbSeparator />
                            )}
                        </>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}