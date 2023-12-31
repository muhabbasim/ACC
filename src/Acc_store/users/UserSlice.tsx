import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../Store';
import UsersData from 'src/Acc_apis/users/UserData';

// const API_URL = '/api/users/data/';

interface StateType {
  users: any[];
  currentFilter: string;
  usersSearch: string;
  setlectedUser: null;
}

const initialState = {
  users: [],
  currentFilter: 'total_tickets',
  usersSearch: '',
  setlectedUser: null,
};

export const UserSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getUser: (state, action) => {
      state.setlectedUser = action.payload;
    },
    setVisibilityFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    SearchUser: (state, action) => {
      state.usersSearch = action.payload;
    },
    DeleteUser: (state: StateType, action) => {
      const index = state.users.findIndex((ticket) => ticket.Id === action.payload);
      state.users.splice(index, 1);
    },
  },
});

export const { getUsers, getUser, setVisibilityFilter, SearchUser, DeleteUser } = UserSlice.actions;

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    // const response = await axios.get(`${API_URL}`);
    dispatch(getUsers(UsersData));
  } catch (err: any) {
    throw new Error(err);
  }
};

export const fetchUser = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getUser(UsersData.map(user => user.Id === id)));
  } catch (err: any) {
    throw new Error(err);
  }
}

export default UserSlice.reducer;
