// import { configureStore } from '@reduxjs/toolkit';
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistReducer,
//   persistStore,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from 'redux-persist';
// // import storage from "redux-persist/lib/storage";
// import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

// import productModalReducer from './product-modal/productModalSlice';
// import cartItemsReducer from './shopping-cart/cartItemsSlide';

// const createNoopStorage = () => {
//   return {
//     getItem(_key) {
//       return Promise.resolve(null);
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
//   typeof window !== 'undefined'
//     ? createWebStorage('local')
//     : createNoopStorage();

// const persistCartItemsConfig = {
//   key: 'cartItems',
//   storage,
// };
// const persistedCartItemsReducer = persistReducer(
//   persistCartItemsConfig,
//   cartItemsReducer,
// );

// export const store = configureStore({
//   reducer: {
//     productModal: productModalReducer,
//     cartItems: persistedCartItemsReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from 'src/redux/reducers/modalReducer';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
