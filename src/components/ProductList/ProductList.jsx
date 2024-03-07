import React, {useState} from 'react'
import s from './ProductList.module.css'
import {ProductItem} from '../ProductItem/ProductItem'
import {useTelegram} from '../../hooks/useTelegram'

const products = [
  {id: 1, title: 'Jacket 7', price: 172, description: 'Some description 1'},
  {id: 2, title: 'Jacket 1', price: 123, description: 'Some description 2'},
  {id: 3, title: 'Jacket 2', price: 132, description: 'Some description 3'},
  {id: 4, title: 'Jacket 4', price: 112, description: 'Some description 4'},
  {id: 5, title: 'Jacket 5', price: 152, description: 'Some description 5'},
]

function getTotalPrice(products) {
  return products.reduce((acc, product) => {
    return acc + product.price
  }, 0)
}

export const ProductList = () => {
  const [addedItems, setAddedItems] = useState([])
  const {tg} = useTelegram()

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id)
    let newItems = []

    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItems(newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Buy by ${getTotalPrice(newItems)}`
      })
    }
  }

  return <div className={s.list}>
    {
      products.map(item => <ProductItem product={item} onAdd={onAdd} className={s.item}/>)
    }
  </div>
}
