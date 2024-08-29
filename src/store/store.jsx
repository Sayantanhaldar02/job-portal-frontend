import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger";
// import { authApi } from "../reducers/authApi/authApi";
import { userSlice } from "../reducers/userSlice/userSlice";
// import { empProfileApi } from "../reducers/EmpProfileApi/EmpProfileApi";
import { employerSlice } from "../reducers/employerSlice/employerSlice";
import { authApi } from "../reducers/ApiReducers/authApi/authApi";
import { empProfileApi } from "../reducers/ApiReducers/EmpProfileApi/EmpProfileApi";
import { jobApi } from "../reducers/ApiReducers/jobApi/jobApi";
import { jobApplicationApi } from "../reducers/ApiReducers/JoApplicationApi/jobApplicationApi";
import { jobseekerProfileApi } from "../reducers/ApiReducers/jobseekerProfileApi/jobseekerProfileApi";
// import { jobApi } from "../reducers/jobApi/jobApi";

const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [empProfileApi.reducerPath]: empProfileApi.reducer,
        [employerSlice.name]:employerSlice.reducer,
        [jobApi.reducerPath]: jobApi.reducer,
        [jobApplicationApi.reducerPath]: jobApplicationApi.reducer,
        [jobseekerProfileApi.reducerPath]: jobseekerProfileApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),  authApi.middleware, empProfileApi.middleware, jobApi.middleware, jobApplicationApi.middleware, jobseekerProfileApi.middleware]
})

export default store;