import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { searchDataTypes } from "../features/navigation/types/navigation";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL




export const productApi = createApi({
    reducerPath:'product',
    baseQuery:fetchBaseQuery({baseUrl:BASE_URL, credentials:'include'}),
    endpoints: (builder)=>({
        createProduct: builder.mutation({
            query:(body)=>({
                url:`${PRODUCT_URL}/create-product`,
                method:"POST",
                headers:{'Content-type':"application/json"},
                body:{body}
            })
        }),
        searchProduct:builder.query<searchDataTypes[],string>({
            query:(query)=> `${PRODUCT_URL}/search/?query=${query}`
        })
    })
})

export const {useCreateProductMutation,useLazySearchProductQuery} = productApi