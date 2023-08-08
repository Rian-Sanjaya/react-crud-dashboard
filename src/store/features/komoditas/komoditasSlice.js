import { steinStore } from "../../../api/api-method";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comodities: [],
  loading: false,
};

export const komoditasSlice = createSlice({
  name: 'komoditas',
  initialState,
  reducers: {
    comoditiesFetch: (state, action) => {
      state.comodities = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

// selectors
export const getComodities = (state) => state.comodities.comodities
export const getLoading = (state) => state.comodities.loading

// action / function thunk
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchComodities = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true))
    steinStore.read('list')
      .then(res => {
        const data = res;
        dispatch(comoditiesFetch(data))
        dispatch(setLoading(false))
        resolve(data)
      })
      .catch(err => {
        dispatch(setLoading(false))
        console.error("Error: ", err)
        reject(err)
      })
  })
}

export function addComodity(comodity) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoading(true));
      steinStore.append("list", comodity)
        .then(() => {
          dispatch(fetchComodities())
            .then(res => {
              dispatch(setLoading(false));
              resolve(res);
            })
            .catch(err => {
              dispatch(setLoading(false));
              console.log("Error: ", err);
              reject(err);
            });
        })
        .catch(err => {
          dispatch(setLoading(false));
          console.log("Error: ", err);
          reject(err);
        })
    });
  };
}

export function editComodity(comodity) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoading(true));
      steinStore.edit("list", {
        search: { uuid: comodity.uuid },
        set: {
          komoditas: comodity.komoditas,
          area_kota: comodity.area_kota,
          area_provinsi: comodity.area_provinsi,
          price: comodity.price,
          size: comodity.size,
          timestamp: Date.now().toString(),
        }
      })
        .then(() => {
          dispatch(fetchComodities())
            .then(res => {
              dispatch(setLoading(false));
              resolve(res);
            })
            .catch(err => {
              dispatch(setLoading(false));
              console.log("Error: ", err);
              reject(err);
            });
        })
        .catch(err => {
          dispatch(setLoading(false));
          console.log("Error: ", err);
          reject(err);
        })
    })
  }
}

export function deleteComodity(comodity) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoading(true));
      steinStore.delete("list", {
        search: { uuid: comodity.uuid },
      })
        .then(() => {
          dispatch(fetchComodities())
            .then(res => {
              dispatch(setLoading(false));
              resolve(res);
            })
            .catch(err => {
              dispatch(setLoading(false));
              console.log("Error: ", err);
              reject(err);
            });
        })
        .catch(err => {
          dispatch(setLoading(false));
          console.log("Error: ", err);
          reject(err);
        })
    })
  }
}

export const { comoditiesFetch, setLoading } = komoditasSlice.actions

export default komoditasSlice.reducer
