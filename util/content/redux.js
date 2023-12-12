import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const Wedding = createSlice({
  name: "Wedding",
  initialState: { first: null, second: null, tasks: [] },
  reducers: {
    addFirstMember(state, actions) {
      state.first = actions.payload;
    },
    addSecondMember(state, action) {
      state.second = action.payload;
    },
    getallmembers(state, action) {
      state.first = action.payload.first;
      state.second = action.payload.second;
    },
    deleteonemember(state, action) {
      if (action.payload === 1) {
        state.first = null;
      }
      if (action.payload === 2) {
        state.second = null;
      }
    },
    getAllTasks(state, actions) {
      state.tasks = actions.payload;
    },
    insertTask(state, action) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    updateTask(state, actions) {
      const findIndex = state.tasks.findIndex(
        (item) => item.id === actions.payload.id
      );
      state.tasks[findIndex] = actions.payload.values;
    },
    updateFavitem(state, actions) {
      const findIndex = state.tasks.findIndex(
        (item) => item.id === actions.payload
      )
      if (!state.tasks[findIndex].important) {
        state.tasks[findIndex].important = true;
      } else {
        state.tasks[findIndex].important = false;
      }
    },
  },
});

export const store = configureStore({
  reducer: { Wedding: Wedding.reducer },
});

export const actions = Wedding.actions;
