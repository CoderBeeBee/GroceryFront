import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


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
        })
    })
})

export const {useCreateProductMutation} = productApi