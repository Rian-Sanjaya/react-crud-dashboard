import { steinStore } from "../../../api/api-method";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  areas: [],
  loading: false,
};

export const areaSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    areasFetch: (state, action) => {
      state.areas = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

// selectors
export const getAreas = (state) => state.areas.areas;
export const getLoading = (state) => state.areas.loading;

export function fetchAreas() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoading(true));
      steinStore.read("option_area")
        .then(res => {
          const data = res;
          dispatch(areasFetch(data));
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

export const { areasFetch, setLoading } = areaSlice.actions
export default areaSlice.reducer