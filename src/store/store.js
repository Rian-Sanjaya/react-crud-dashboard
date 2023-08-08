import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'
import headerReducer from './features/header/headerSlice'
import komoditasReducer from './features/komoditas/komoditasSlice'
import areaReducer from './features/area/areaSlice'
import sizeReducer from './features/size/sizeSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer,
    comodities: komoditasReducer,
    areas: areaReducer,
    sizes: sizeReducer,
    users: userReducer,
  },
});