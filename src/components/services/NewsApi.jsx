import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const criptoNewsApi=createApi({
reducerPath:'news',
baseQuery:fetchBaseQuery({
  baseUrl: 'https://cryptocurrency-news2.p.rapidapi.com',
 headers:{
    'x-rapidapi-key': '2eecc5ebc9msh92185117d9b736dp1740d5jsn5921d2749dec',
    'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
  }
}),
endpoints:(builder)=>({getNewsList:builder.query({query:(category)=>`/v1/${category}`})})
})

export const {useGetNewsListQuery}=criptoNewsApi;

