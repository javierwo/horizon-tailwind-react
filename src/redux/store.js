// El store contiene el estado de la aplicación y su funcion reducer
import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";

import searchValueReducer from './features/searchValueSlice';
import prioridadesReducer from './features/prioridadesSlice';

import { datosPersonalesApi } from "./services/datosPersonalesApi";
import { sriApi } from './services/sriApi';
import { iessApi } from './services/iessApi';
import { centralBancosApi } from './services/centralBancosApi';
import { prioridadesApi } from './services/prioridadesApi';
import { prioridadesDataApi } from './services/prioridadesDataApi';

export const store = configureStore({
  reducer: {
    searchValueState: searchValueReducer,
    prioridadesState: prioridadesReducer,
    [datosPersonalesApi.reducerPath]: datosPersonalesApi.reducer,
    [sriApi.reducerPath]: sriApi.reducer,
    [iessApi.reducerPath]: iessApi.reducer,
    [centralBancosApi.reducerPath]: centralBancosApi.reducer,
    [prioridadesApi.reducerPath]: prioridadesApi.reducer,
    [prioridadesDataApi.reducerPath]: prioridadesDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      datosPersonalesApi.middleware, 
      sriApi.middleware,
      iessApi.middleware,
      centralBancosApi.middleware,
      prioridadesApi.middleware,
      prioridadesDataApi.middleware,
    ]),
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector; 