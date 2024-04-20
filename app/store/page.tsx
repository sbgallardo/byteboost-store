

export const metadata = {
    title: 'Store',
    description: 'Search for products in the store.'
};

export default async function Page({searchParams}:{searchParams?: { [key: string]: string | string[] | undefined }; }) {

    const { sort, q: searchValue } = searchParams as { [key: string]: string };


    return (
        <>
            <span>store {sort} {searchValue}</span>
        </>
    )
}