import { configureStore} from "@reduxjs/toolkit";
import { coinApi } from "../components/services/criptoApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import {criptoNewsApi} from "../components/services/NewsApi";
export const store=configureStore({
  reducer:{
  [coinApi.reducerPath]:coinApi.reducer,[criptoNewsApi.reducerPath]:criptoNewsApi.reducer},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(criptoNewsApi.middleware,coinApi.middleware), 
 } )




// export const store=configureStore({
//   reducer:{[api.reducerPath]:api.reducer,},
//   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware)
// })
// setupListeners(store.dispatch)