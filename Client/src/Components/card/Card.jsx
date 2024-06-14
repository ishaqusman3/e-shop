import styles from './Card.module.scss'
import React from 'react'

export const Card = ({children, cardClass}) => {
  return (
    <div className={`${styles.card} ${cardClass}`}>
        {children}
    </div>
  )
}
