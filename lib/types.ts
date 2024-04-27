export type Prod = {
    id: number;
    name: string;
    slug: string;
    price: number;
    discount: number | null;
    description: string;
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

export type SearchParams = {
    q: string | null;
    category: string | null;
    brand: string | null;
    sort: string | null;
}