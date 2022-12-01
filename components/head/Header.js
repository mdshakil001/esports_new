import React from 'react'
import MainHead from './MainHead'
import TopHead from './TopHead'
import styles from '../../styles/Header.module.css'

const Header = () => {
  return (
      <div>
          <TopHead />
          <MainHead />
    </div>
  )
}

export default Header