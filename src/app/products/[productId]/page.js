import React from 'react'

function page( {params}) {
  return (
    <div>
      <h1>Details about Product {params.productId}</h1>
    </div>
  )
}

export default page
