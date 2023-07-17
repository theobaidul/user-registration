import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action) {
            return [...state, action?.payload];
        },
        updateUser(state, action) {
            return state?.map((user) =>
                user?.id === action?.payload?.id ? action?.payload : user
            );
        },
        removeUser(state, action) {
            return state?.filter((user) => user?.id !== action?.payload?.id);
        },
    },
});

export default userSlice.reducer;
export const { addUser, updateUser, removeUser } = userSlice.actions;
