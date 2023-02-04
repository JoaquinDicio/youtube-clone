import React from 'react'
import { createContext } from 'react'
export const AppContextProvider = createContext()

export default function AppContext({children}) {

    const categories = [
        {
          id: 1,
          name: "Entertainment"
        },
        {
          id: 2,
          name: "News"
        },
        {
          id: 3,
          name: "Gaming"
        },
        {
          id: 4,
          name: "Education"
        },
        {
          id: 5,
          name: "Technology"
        }
      ]
  return (
    <AppContextProvider.Provider value={{categories}}>
        {children}
    </AppContextProvider.Provider>
  )
}
