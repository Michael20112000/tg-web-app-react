import React from 'react'
import s from './Button.module.css'

export const Button = (props) => {
  return <button {...props} className={`${s.btn} ${props.className}`}/>
}
