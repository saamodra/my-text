import React, { createContext, useMemo, useReducer } from 'react';
import Reducer from './reducer'

type StoreProps = {
  children: JSX.Element | JSX.Element[]
}

type InitialStateType = {
  pageTitle: string
  categoryModal: boolean
  textModal: boolean
}

type AppContextType = {
  state: InitialStateType
  dispatch: React.Dispatch<any>
}

const initialState = {
  pageTitle: 'Global State',
  categoryModal: false,
  textModal: false,
}

export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => null,
});

function AppProvider({ children }: StoreProps) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
