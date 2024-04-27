import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbLink
} from "@/components/ui/breadcrumb"
import { BreadcrumbType } from "@/lib/types"
import Link from "next/link"

export function CustomBreadcrumb({paths}: {paths: BreadcrumbType[]}) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {paths.map((item, index) =>
                    <>
                        <BreadcrumbItem key={item.name}>
                            {item.path
                                ?
                                <BreadcrumbLink asChild>
                                    <Link href={item.path}>{item.name}</Link>
                                </BreadcrumbLink>
                                :
                                <BreadcrumbPage>{item.name}</BreadcrumbPage>
                            }
                        </BreadcrumbItem>
                        {index === paths.length - 1
                            ?
                            null
                            :
                            <BreadcrumbSeparator/>
                        }
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    )
}