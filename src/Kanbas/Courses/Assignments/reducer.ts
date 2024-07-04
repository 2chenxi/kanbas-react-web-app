import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        ...payload,
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, { payload }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== payload
      );
    },
    updateAssignment: (state, { payload }) => {
      const index = state.assignments.findIndex((a) => a._id === payload._id);
      if (index !== -1) {
        state.assignments[index] = payload;
      }
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
