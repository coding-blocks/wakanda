import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import store from '../store/index';
import client from '../services/api';

const activeTasksAdapter = createEntityAdapter();

const activeTasksInitialState = activeTasksAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const activeTasksSlice = createSlice({
  name: 'activeTasks',
  initialState: activeTasksInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('activeTasks/fetchTasks/pending', (state, action) => {
      state.status = 'loading';
    });
    builder.addCase('activeTasks/fetchTasks/fulfilled', (state, action: any) => {
      state.status = 'succeeded';
      activeTasksAdapter.upsertMany(state, action.payload);
    });
  },
});

export const fetchActiveTasks = createAsyncThunk('activeTasks/fetchTasks', async () => {
  const tasks = await client.get('/task');
  return tasks.data.data;
});

type RootState = ReturnType<typeof store.getState>;

export const {
  selectAll: selectAllActiveTasks,
  selectIds: selectIdsActiveTasks,
  selectEntities: selectEntitiesActiveTasks,
} = activeTasksAdapter.getSelectors<RootState>((state) => state.userTasks);

export default activeTasksSlice.reducer;
