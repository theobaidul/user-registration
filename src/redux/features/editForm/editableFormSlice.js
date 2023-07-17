import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    editable: false,
    formInfo: {},
};

const editableFormSlice = createSlice({
    name: 'editForm',
    initialState,
    reducers: {
        setEditableFormValue(state, actions) {
            state.editable = true;
            state.formInfo = actions?.payload || {};
        },
        resetEditableFormValue(state) {
            state.editable = false;
            state.formInfo = {};
        },
    },
});

export default editableFormSlice.reducer;
export const { setEditableFormValue, resetEditableFormValue } = editableFormSlice.actions;
