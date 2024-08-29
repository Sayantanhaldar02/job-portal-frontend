import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const jobApplicationApi = createApi({
    reducerPath: 'jobApplicationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/job-application',
    }),
    tagTypes: ["Applications"],
    endpoints: (builder) => ({
        submitApplication: builder.mutation({
            query: ({id, ...job}) => ({
                url: `/${id}`,
                method: 'POST',
                body: job,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            }),
            // providesTags:["Applications"],
        }),
        getJobApplicationsJobSeeker:builder.query({
            query: () => ({
                url: '/',
                method:"GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            }),
            providesTags: ["Applications"],
        }),
        getJobApplicationsEmployer:builder.query({
            query: () => ({
                url: '/emp-application',
                method:"GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            }),
            providesTags: ["Applications"],
        }),
        applicationStatusUpdate:builder.mutation({
            query: ({id, status}) => ({
                url: `/${id}`,
                method: 'PATCH',
                body: {status},
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            }),
            providesTags: ["Applications"],
        })
    }),
})

export const {
    useSubmitApplicationMutation,
    useGetJobApplicationsJobSeekerQuery,
    useGetJobApplicationsEmployerQuery,
    useApplicationStatusUpdateMutation,
} = jobApplicationApi;