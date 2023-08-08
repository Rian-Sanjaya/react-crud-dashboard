import { userStore } from "../../../api/api-method";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetch: (state, action) => {
      state.users = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

// selectors
export const getUsers = (state) => state.users.users;
export const getLoading = (state) => state.users.loading;

export function fetchUsers() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoading(true));
      userStore.read("list")
        .then(res => {
          const data = res;
          dispatch(usersFetch(data));
          dispatch(setLoading(false));
          resolve(data);
        })
        .catch(err => {
          dispatch(setLoading(false));
          console.error("Error: ", err);
          reject(err);
        });
    });
  };
}

export function addUser(user) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoading(true));
      userStore.append("list", user)
        .then(() => {
          dispatch(fetchUsers())
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

export function editUser(user) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoading(true));
      userStore.edit("list", {
        search: { uuid: user.uuid },
        set: {
          nama: user.nama,
          alamat: user.alamat,
          jenis_kelamin: user.jenis_kelamin,
          tanggal_lahir: user.tanggal_lahir,
          created_at: user.created_at,
          updated_at: user.updated_at,
        }
      })
        .then(() => {
          dispatch(fetchUsers())
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

export function deleteUser(user) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoading(true));
      userStore.delete("list", {
        search: { uuid: user.uuid },
      })
        .then(() => {
          dispatch(fetchUsers())
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

export const { usersFetch, setLoading } = userSlice.actions
export default userSlice.reducer