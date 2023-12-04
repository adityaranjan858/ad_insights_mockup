import {createSlice} from "@reduxjs/toolkit"
const initialState = {
  adData : [
    { id: 1, campaign: "Cosmetics", clicks: 712, cost: 4272, conversions: 8, revenue: 16568 },
    { id: 2, campaign: "Serums", clicks: 3961, cost: 27331, conversions: 115, revenue: 362526 },
    { id: 3, campaign: "Facewash", clicks: 9462, cost: 76831, conversions: 123, revenue: 266800 },
    { id: 4, campaign: "Shampoos", clicks: 439, cost: 2151, conversions: 5, revenue: 11029 },
    { id: 5, campaign: "Conditioners", clicks: 1680, cost: 3864, conversions: 49, revenue: 175245 },
    { id: 6, campaign: "Facewash 2", clicks: 4978, cost: 29370, conversions: 189, revenue: 623106 },
],
alert : "",
show : false
}
const adInsight = createSlice({
    name : "adInsightData",
    initialState,
    reducers : {
        ascendingOrder : (state, action)=>{
            const field = action.payload
            return {
              ...state,
              adData: [...state.adData].sort((a, b) => a[field] - b[field])
            } 
        },
        descendingOrder : (state, action)=>{
            const field = action.payload
            return {
              ...state,
                adData: [...state.adData].sort((a, b) => b[field] - a[field])
            } 
        },
        ascendingForCampaign : (state)=>{
             const compare=( a, b )=>{
                if ( a.campaign < b.campaign ){
                  return -1;
                }
                if ( a.campaign > b.campaign ){
                  return 1;
                }
                return 0;
              }
              
              return {
                ...state,
              adData: [...state.adData].sort( compare )
              } 
        },
        descendingForCampaign : (state)=>{
             const compare=( a, b )=>{
                if ( b.campaign < a.campaign ){
                  return -1;
                }
                if ( b.campaign > a.campaign ){
                  return 1;
                }
                return 0;
              }
              
              return {
                ...state,
                adData: [...state.adData].sort( compare )
              } 
        },
        alertMessage : (state, action)=>{
          state.alert = action.payload
        },
        handleShow : (state, action)=>{
          state.show = action.payload
        },
        handleClose : (state, action)=>{
          state.show = action.payload
        }

    }
})
export const {ascendingOrder, descendingOrder,ascendingForCampaign,descendingForCampaign, alertMessage,handleShow,handleClose} = adInsight.actions;
export default adInsight.reducer;