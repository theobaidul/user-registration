import { configureStore } from '@reduxjs/toolkit';
import editableFormSlice from '../features/editForm/editableFormSlice';
import userSlice from '../features/user/userSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        editableForm: editableFormSlice,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
});
export default store;
