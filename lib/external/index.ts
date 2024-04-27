import axios from "axios";
import { Category, Brand } from "@/lib/types";

export async function getProduct(slug: string) {

    const baseUrl:string = 'https://byteboost-api.sebas.lat/products';

    let product;

    try {
        product = await axios.get(`${baseUrl}?slug=${slug}`)
    } catch (e) {
        product = null
    }

    return product
}

export async function getCategories() {
    const URL = 'https://byteboost-api.sebas.lat/categories'
    const content = await axios.get(URL)

    return content.data as Category[] | []
}

export async function getBrands() {
    const URL = 'https://byteboost-api.sebas.lat/brands'
    const content = await axios.get(URL)

    return content.data as Brand[] | []
}
