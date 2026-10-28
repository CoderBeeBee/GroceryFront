import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { createAccountRequest } from "../features/auth/schemas/createAccountSchema";
import { messageResponseType } from "../types/globalTypes";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const USER_URL = process.env.NEXT_PUBLIC_USER_URL



export const userApi = createApi({
    reducerPath:'user',
    baseQuery:fetchBaseQuery({baseUrl:`${BASE_URL}`,credentials:'include'}),
    tagTypes:['User'],
    endpoints:(builder)=>({
        createAccount:builder.mutation<messageResponseType,createAccountRequest>({
            query:(data)=>({
                url:`${USER_URL}/createUser`,
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:data
            }),
            invalidatesTags:() => [{type:'User'}]
        }),
        signIn:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/signIn`,
                method:'POST',
                headers:{'Content-type':"application/json"},
                body:data
            })
        }),
        signOut:builder.mutation({
            query:()=>({
                url:`${USER_URL}/signOut`,
                method:'POST',
                headers:{'Content-type':"application/json"},
                
            })
        }),

    })
})


export const {useCreateAccountMutation,useSignInMutation,useSignOutMutation} = userApi