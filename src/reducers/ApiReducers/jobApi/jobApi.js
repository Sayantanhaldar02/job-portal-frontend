import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'


// const token = localStorage.getItem('authToken')


export const jobApi = createApi({
    reducerPath: 'jobApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/jobs',
    }),
    tagTypes: ["Jobs"],
    endpoints: (builder) => ({
        getAllJobs: builder.query({
            query: (filters) => {
                let queryStr = '';
                if (filters) {
                    const params = new URLSearchParams(filters).toString();
                    queryStr = `?${params}`;
                }

                return {
                    url: `/${queryStr}`,
                    method: 'GET',
                    headers: {
                        'Authorization': localStorage.getItem('authToken') ?
                            `Bearer ${localStorage.getItem('authToken')}` :
                            '',
                    },
                };
            },
            transformResponse: (response) => response.all_jobs && response.all_jobs.reverse(),
            providesTags: ['Jobs'],
        }),
        getJobById: builder.query({
            query: (id) => ({
                url: `/${id}`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            }),
            providesTags: ["Jobs"],
        }),
        createJob: builder.mutation({
            query: (data) => ({
                url: '/',
                method: 'POST',
                body: data,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            }),
            invalidatesTags: ["Jobs"],
        }),
        updateJob: builder.mutation({
            query: (data) => ({
                url: `/${data.id}`,
                method: 'PATCH',
                body: data,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            }),
            invalidatesTags: ["Jobs"],
        }),
        deleteJob: builder.mutation({
            query: (data) => ({
                url: `/${data.id}`,
                method: 'DELETE',
                body: data,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            }),
            invalidatesTags: ["Jobs"],
        })
    })
})

export const {
    useGetAllJobsQuery,
    useGetJobByIdQuery,
    useCreateJobMutation,
    useDeleteJobMutation,
    useUpdateJobMutation,
} = jobApi