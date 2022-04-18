import React from 'react'
import {moneyFormat} from '../helpers'
import './App.css'

const Header = ({ total , money }) => {
  return (
    <div>
      {total > 0 && money - total !== 0 && (
        <div className='header'>Harcayacak <span>${moneyFormat(money - total) }</span> paran kaldı.</div>
      )}
      {total === 0 &&(
        <div className='header'>Harcamak için <span>${moneyFormat(money)}</span> paran bulunmaktadır.</div>
      )}
      {money -total === 0 && (
        <div className='header'>Paran bitti, parasız insan boş insandır.</div>
      )}
    </div>
  )
}

export default Header