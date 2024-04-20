export type Prod = {
    id: number
    name: string
    price: number
}

export type Category = {
    id: number
    name: string
    description: string | null
    image: string | null
}

export type Brand = {
    id: number
    name: string
}

export type BreadcrumbType = {
    name: string
    path: string | null
}