import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react"


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/auth"
    }),
    credentials: 'include', 
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (body) => ({
                url: "/login",
                method: "POST",
                body: body
            })
        }),
        userRegister:builder.mutation({
            query: (body) => ({
                url: "/register",
                method: "POST",
                body: body
            })
        }),
        userLogout:builder.mutation({
            query:()=>({
                url: "/logout",
                method: "POST"
            })
        })
    }),
})

export const {
    useUserLoginMutation,
    useUserRegisterMutation,
    useUserLogoutMutation
} = authApi