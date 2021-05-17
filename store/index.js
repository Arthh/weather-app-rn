import { configureStore } from '@reduxjs/toolkit';

import citiesSlice from './cities-slice';

const store = configureStore({
  reducer: {
    city: citiesSlice.reducer
  }
})

export default store;