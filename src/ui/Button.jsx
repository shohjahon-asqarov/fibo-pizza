import React from 'react'

export default function Button({text}) {
  return (
    <button className='btn-yellow max:static fixed bottom-8 right-6'>{text} | 1</button>
  )
}
