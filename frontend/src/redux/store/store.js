import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { postSlice } from "../slice/postSlice.js";
 
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
 
const rootReducer = combineReducers({
  user: userReducer,
  post : postSlice,
});
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
 
export const store = configureStore({
  reducer: persistedReducer,


  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persistor
export const persistor = persistStore(store);
