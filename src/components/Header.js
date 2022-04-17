import React from 'react'

const Header = ({ total , money }) => {
  return (
    <div>
      {total > 0 && money - total !== 0 && (
        <div>Harcayacak ${ money - total } paran kaldı.</div>
      )}
      {total === 0 &&(
        <div>Harcamak için ${money} paran bulunmaktadır.</div>
      )}
      {money -total === 0 && (
        <div>Paran bitti, parasız insan boş insandır.</div>
      )}
    </div>
  )
}

export default Header