import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

const GlobalState = (props) => {
  const [page, setPage] = useState(localStorage.getItem('paideusispage') ? JSON.parse(localStorage.getItem('paideusispage')) : 'home');

  const changePage = (newpage) => {
    setPage(newpage);
    localStorage.setItem('paideusispage', JSON.stringify(newpage));
  }

  return (
    <GlobalContext.Provider value={{ page, changePage }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
