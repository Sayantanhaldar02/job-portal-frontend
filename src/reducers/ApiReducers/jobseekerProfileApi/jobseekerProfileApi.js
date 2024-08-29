import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react"

const authToken = localStorage.getItem('authToken')
console.log(authToken)
// const token = authToken ? `Bearer ${authToken && authToken}` : "";


export const jobseekerProfileApi = createApi({
    reducerPath: 'jobseekerProfileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/job-seeker"
    }),
    tagTypes: ["jobseeker_profile"],
    endpoints: (builder) => ({
        getJobseekerProfile: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')!==undefined && localStorage.getItem('authToken')}`,
                }
            }),
            invalidatesTags: ["jobseeker_profile"],
        }),
        createJobseekerProfile: builder.mutation({
            query: (body) => ({
                url: "/",
                method: "POST",
                body: body,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            }),
            invalidatesTags: ["jobseeker_profile"],
        }),
        updateJobseekerProfile: builder.mutation({
            query: (body) => ({
                url: "/",
                method: "PATCH",
                body: body,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            }),
            invalidatesTags: ["jobseeker_profile"],
        }),
        deleteJobseekerProfile: builder.mutation({
            query: (body) => ({
                url: "/",
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            }),
            invalidatesTags: ["jobseeker_profile"],
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
    useGetJobseekerProfileQuery,
    useCreateJobseekerProfileMutation,
    useUpdateJobseekerProfileMutation,
    useDeleteJobseekerProfileMutation,
    // useTestImageMutation
} = jobseekerProfileApi;