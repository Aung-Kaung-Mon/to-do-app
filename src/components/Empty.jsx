import React from 'react'
import empty from '../img/empty.svg'

const Empty = () => {
  return (
    <div className="hidden last:flex flex-col items-center py-10">
    <img width={150} className="mb-5" src={empty} alt />
    <p className="text-sm">There is no list.</p>
  </div>
  )
}

export default Empty