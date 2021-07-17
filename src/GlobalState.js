import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

const GlobalState = (props) => {
  const [page, setPage] = useState(localStorage.getItem('paideusispage') ? JSON.parse(localStorage.getItem('paideusispage')) : 'home');
  const [lan, setLan] = useState(localStorage.getItem('language') ? JSON.parse(localStorage.getItem('language')) : 'ro')

  const changePage = (newpage) => {
    setPage(newpage);
    localStorage.setItem('paideusispage', JSON.stringify(newpage));
  }

  const changeLan = () => {
    if (lan === 'en') {
      setLan('ro');
      localStorage.setItem('language', JSON.stringify('ro'));
    } else if (lan === 'ro') {
      setLan('en');
      localStorage.setItem('language', JSON.stringify('en'));
    } else {
      setLan('ro')
      localStorage.setItem('language', JSON.stringify('ro'));
    }
  }

  const checkLan = (text1, text2) => {
    if (lan === 'ro') {
      return text1
    } else if (lan === 'en') {
      return text2
    }
  }

  return (
    <GlobalContext.Provider value={{ page, changePage, changeLan, checkLan }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
