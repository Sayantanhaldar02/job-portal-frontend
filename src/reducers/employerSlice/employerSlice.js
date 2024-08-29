import {
    createSlice
} from "@reduxjs/toolkit"

export const employerSlice = createSlice({
    name: "employer",
    initialState: {
        company_city: "",
        company_country: "",
        company_logo: "",
        company_name: "",
        company_state: "",
        company_website: "",
        contact_email: "",
        contact_name: "",
        contact_phone_number: "",
    },
    reducers: {
        setEmployeeDetails: (state, action) => {
            // console.log(action.payload)
            state.company_city = action.payload  && action.payload.company_city
            state.company_country = action.payload  && action.payload.company_country
            state.company_logo = action.payload  && action.payload.company_logo
            state.company_name = action.payload  && action.payload.company_name
            state.company_state = action.payload  && action.payload.company_state
            state.company_website = action.payload  && action.payload.company_website
            state.contact_email = action.payload  && action.payload.contact_email
            state.contact_name = action.payload  && action.payload.contact_name
            state.contact_phone_number = action.payload  && action.payload.contact_phone_number
        },
        clearEmployeeDetails: (state) => {
            // console.log(action.payload)
            state.company_city = ""
            state.company_country = ""
            state.company_logo = ""
            state.company_name = ""
            state.company_state = ""
            state.company_website = ""
            state.contact_email = ""
            state.contact_name = ""
            state.contact_phone_number = ""
        }
    },
})

export const {
    setEmployeeDetails,
    clearEmployeeDetails
} = employerSlice.actions;