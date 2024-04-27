import {
    Skeleton
} from '@/components/ui/skeleton'

export const SkeletonProduct = () => {
    return (
        <>
            <div className="flex flex-col space-y-3">

                <Skeleton className="h-4 w-[250px]"/>

                <div className="grid grid-cols-2 items-center">
                    <div className="justify-center">
                        <Skeleton className="h-96 w-[500px]"/>
                    </div>
                    <div>
                        <Skeleton className="h-6 w-[500px] mb-2"/>
                        <Skeleton className="h-6 w-[500px] mb-2"/>
                        <Skeleton className="h-6 w-[500px] mb-2"/>
                    </div>
                </div>

            </div>
        </>
    )
}

export const SkeletonCards = () => {
    return (
        <div className="grid gap-3">
            <Skeleton className="w-full h-20 bg-slate-300" />
            <Skeleton className="w-full h-20 bg-slate-400" />
            <Skeleton className="w-full h-20" />
            <Skeleton className="w-full h-20" />
            <Skeleton className="w-full h-20" />
            <Skeleton className="w-full h-20" />
        </div>
    )
}