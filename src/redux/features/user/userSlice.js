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
        toggleSelect(state, action) {
            return state?.map((user) =>
                user?.id === action?.payload?.id ? { ...user, selected: !user?.selected } : user
            );
        },
        toggleSelectAll(state, action) {
            return state?.map((user) => ({ ...user, selected: action?.payload?.allSelected }));
        },
    },
});

export default userSlice.reducer;
export const { addUser, updateUser, removeUser, toggleSelect, toggleSelectAll } = userSlice.actions;
