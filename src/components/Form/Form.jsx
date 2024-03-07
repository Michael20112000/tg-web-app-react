import React, {useEffect, useState} from 'react'
import s from './Form.module.css'
import {useTelegram} from '../../hooks/useTelegram'

export const Form = () => {
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('phisical')

  const handleChangeCountry = e => setCountry(e.target.value)
  const handleChangeStreet = e => setStreet(e.target.value)
  const handleChangeSubject = e => setSubject(e.target.value)

  const {tg} = useTelegram()

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Send data'
    })
  }, [])

  useEffect(() => {
    if (!country || !street) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [country, street])

  return <form className={s.form}>
    <input className={s.input} type="text" placeholder="Country"
           value={country}
           onChange={handleChangeCountry}/>
    <input className={s.input} type="text" placeholder="Street"
           value={street}
           onChange={handleChangeStreet}/>
    <select className={s.select}
            value={subject}
            onChange={handleChangeSubject}>
      <option value="phisical">phisical</option>
      <option value="legal">legal</option>
    </select>
  </form>
}
