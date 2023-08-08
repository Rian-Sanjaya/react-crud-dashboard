import { steinStore } from "../../../api/api-method";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sizes: [],
  loading: false,
};

export const sizeSlice = createSlice({
  name: 'size',
  initialState,
  reducers: {
    sizesFetch: (state, action) => {
      state.sizes = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

// selectors
export const getSizes = (state) => state.sizes.sizes;
export const getLoading = (state) => state.sizes.loading;

export function fetchSizes() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoading(true));
      steinStore.read("option_size")
        .then(res => {
          const data = res;
          dispatch(sizesFetch(data));
          dispatch(setLoading(false));
          resolve(data);
        })
        .catch(err => {
          dispatch(setLoading(false));
          console.error("Error: ", err);
          reject(err);
        });
    });
  }
}

export const { sizesFetch, setLoading } = sizeSlice.actions
export default sizeSlice.reducer