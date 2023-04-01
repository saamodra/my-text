import React, { createContext, useReducer } from 'react';
import Reducer from './reducer'

type StoreProps = {
  children: JSX.Element | JSX.Element[]
}

type InitialStateType = {
  pageTitle: string;
}

type AppContextType = {
  state: InitialStateType
  dispatch: React.Dispatch<any>
}

const initialState = {
  pageTitle: 'Global State',
}

export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => null,
});

function AppProvider({ children }: StoreProps) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
