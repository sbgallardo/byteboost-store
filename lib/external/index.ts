import axios from "axios";
import { Category, Brand } from "@/lib/types";
import {apiUrl} from "@/lib/env";

export async function getCategories() {
    const URL = `${apiUrl}/categories`
    const content = await axios.get(URL)
    return content.data as Category[] | []
}

export async function getBrands() {
    const URL = `${apiUrl}/brands`
    const content = await axios.get(URL)
    return content.data as Brand[] | []
}
