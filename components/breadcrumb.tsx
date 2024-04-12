import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BreadcrumbType } from "@/lib/schema"

export function CustomBreadcrumb({paths}: {paths: BreadcrumbType[]}) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {paths.map((item, index) => {
                    return (
                        <>
                            <BreadcrumbItem key={index}>
                                {item.path ? (
                                    <BreadcrumbLink href={item.path}>{item.name}</BreadcrumbLink>
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