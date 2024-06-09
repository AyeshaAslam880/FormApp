import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  Addform: [] // Make sure this is an array
};

export const FormSlice = createSlice({
  name: 'Form',
  initialState,
  reducers: {
    AddsForm: (state, action) => {
      const formData = {
        id: nanoid(),
        Fname: action.payload.Fname,
        Sname: action.payload.Sname,
        Country: action.payload.Country,
        Subject: action.payload.Subject,
      };
      state.Addform.push(formData);
    },
    DeleteForm: (state, action) => {
     state.Addform=state.Addform.filter(val => val.id !== action.payload.id);
    },
    EditForm:(state,action) =>{
      const index = state.Addform.findIndex(form => form.id === action.payload.id);
      if (index !== -1) {
        state.Addform[index] = {
          ...state.Addform[index],
          ...action.payload.data
        }
    }
  }
}
});

export const { AddsForm, DeleteForm ,EditForm} = FormSlice.actions;
export default FormSlice.reducer;
