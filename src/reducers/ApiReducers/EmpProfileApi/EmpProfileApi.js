import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react"

const authToken = localStorage.getItem('authToken')
// const token = authToken ? `Bearer ${authToken && authToken}` : "";
export const empProfileApi = createApi({
    reducerPath: 'empProfileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/emp-profile"
    }),
    tagTypes: ["Emp_profile"],
    endpoints: (builder) => ({
        getEmployeeProfile: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')!==undefined && localStorage.getItem('authToken')}`,
                }
            }),
            invalidatesTags: ["Emp_profile"],
        }),
        createEmployerProfile: builder.mutation({
            query: (body) => ({
                url: "/",
                method: "POST",
                body: body,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            }),
            invalidatesTags: ["Emp_profile"],
        }),
        updateEmployerProfile: builder.mutation({
            query: (body) => ({
                url: "/",
                method: "PATCH",
                body: body,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            }),
            invalidatesTags: ["Emp_profile"],
        }),
        deleteEmployerProfile: builder.mutation({
            query: (body) => ({
                url: "/",
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            }),
            invalidatesTags: ["Emp_profile"],
        }),
        // testImage: builder.mutation({
        //     query: (body) => ({
        //         url: "/emp-profile/emp-img-upload",
        //         method: "POST",
        //         body: body,
        //         headers: {
        //             // 'Content-Type':'multipart/form-data',
        //             'Authorization': `Bearer ${authToken}`,
        //         }
        //     }),
        // }),
    })
});

export const {
    useGetEmployeeProfileQuery,
    useCreateEmployerProfileMutation,
    useUpdateEmployerProfileMutation,
    useDeleteEmployerProfileMutation,
    // useTestImageMutation
} = empProfileApi;