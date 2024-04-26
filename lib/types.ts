export type Prod = {
    id: number;
    name: string;
    slug: string;
    price: number;
    discount: number | null;
    images: string | string[] | null;
    stock: number;
    categoryId: number;
    brandId: number;
}

export type Category = {
    id: number;
    name: string;
    slug: string;
}

export type Brand = {
    id: number;
    name: string;
    slug: string;
}

export type BreadcrumbType = {
    name: string;
    path: string | null;
}