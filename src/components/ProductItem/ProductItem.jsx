import React from 'react'
import s from './ProductItem.module.css'
import {Button} from '../Button/Button'

export const ProductItem = ({product, className, onAdd}) => {
  const onAddHandler = () => {
    onAdd(product)
  }

  return <div className={`${s.product} ${className}`}>
    <div className={s.img}/>
    <div className={s.title}>
      {product.title}
    </div>
    <div className={s.desc}>
      {product.description}
    </div>
    <div className={s.price}>
      Price: {product.price}
    </div>
    <Button className={s.addBtn} onClick={onAddHandler}>
      Add to cart
    </Button>
  </div>
}
