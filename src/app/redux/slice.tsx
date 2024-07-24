import {
  createAsyncThunk,
  createSlice,
  current,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
}

interface Data {
  apiuser: any;
  users: User[];
}

const getIntitialUsers = (): Data => {
  let initialState: Data;

  if (typeof window === "undefined") {
    initialState = { apiuser: null, users: [] };
  } else {
    const localUsers = localStorage.getItem("users");
    initialState = {
      apiuser: null,
      users: localUsers ? JSON.parse(localUsers) : [],
    };
  }

  return initialState;
};

export const fetchUsers = createAsyncThunk<User[]>("fetchUsers", async () => {
  const result = await fetch("https://fakestoreapi.com/users");
  return result.json();
});

const initialState: Data = getIntitialUsers();

const slice = createSlice({
  name: "addUser",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      const data: User = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      localStorage.setItem("users", JSON.stringify(current(state.users)));
    },
    removeUser: (state, action: PayloadAction<string>) => {
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      state.users = filteredUsers;
      localStorage.setItem("users", JSON.stringify(filteredUsers));
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.apiuser = action.payload;
    });
  },
});

export const { addUser, removeUser } = slice.actions;
export default slice.reducer;
