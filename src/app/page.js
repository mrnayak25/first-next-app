import Link from 'next/link'
import React from 'react'
import "./styles.css"
function page() {
  return (
    <div>
      <h1>hello world</h1>
      <Link href="/about">about</Link>
      
    </div>
  )
}

export default page
