// El store contiene el estado de la aplicación y su funcion reducer
import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";

import searchValueReducer from './features/searchValueSlice';
import { datosPersonalesApi } from "./services/datosPersonalesApi";

export const store = configureStore({
  reducer: {
    searchValueState: searchValueReducer,
    [datosPersonalesApi.reducerPath]: datosPersonalesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([datosPersonalesApi.middleware]),
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector; 