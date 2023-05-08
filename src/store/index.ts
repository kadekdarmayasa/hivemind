import {
  combineReducers,
  configureStore,
  PreloadedState
} from "@reduxjs/toolkit";

import dropdownReducer from "../slices/dropdownSlice";

// Create root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  dropdown: dropdownReducer
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];