import React from 'react'
import s from './Header.module.css'
import {Button} from '../Button/Button'
import {useTelegram} from '../../hooks/useTelegram'

export const Header = () => {
  const {handleClose, user} = useTelegram()

  return <header className={s.header}>
    <Button onClick={handleClose}>Close</Button>
    <span className={s.username}>{user?.username}</span>
  </header>
}
