import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "./shop/shop.api.";
import { shopReducer } from "./shop/shop.slice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
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

const persistConfig = {
  key: "fav",
  storage,
};

const persistedShopReducer = persistReducer(persistConfig, shopReducer);

export const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
    shop: persistedShopReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    shopApi.middleware,
  ],
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store);