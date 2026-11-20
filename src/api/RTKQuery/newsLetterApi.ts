import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const NEWSLETTER_URL = process.env.NEXT_PUBLIC_NEWSLETTER_URL

export const newsLetterApi = createApi({
    reducerPath:'newsLetter',
    baseQuery:fetchBaseQuery({baseUrl:`${BASE_URL}`}),
    endpoints:builder =>({
        saveNewsLetter: builder.mutation<{message:string},{email:string}>({
            query:(email)=>({
                url:`${NEWSLETTER_URL}/save-newsletter`,
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:{email}
            })
        })
    })
})


export const {useSaveNewsLetterMutation} = newsLetterApi