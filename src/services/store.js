import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";


export const store = configureStore({
   // global store or state ko ek cake imagine karo and reducer allow karega ek slice lene ke liye
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
        
    },
    // this allows us to do something with the state before we get it.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
    
})