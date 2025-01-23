import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
const headers={
  'x-rapidapi-key': '2eecc5ebc9msh92185117d9b736dp1740d5jsn5921d2749dec',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}
 export const coinApi=createApi({
  reducerPath:'coins',
  baseQuery:fetchBaseQuery({baseUrl:"https://coinranking1.p.rapidapi.com",headers}),
  endpoints:(builder)=>({getCoinList:builder.query({query:(count)=>`/coins?limit=${count}`})})
})

export const {useGetCoinListQuery}=coinApi