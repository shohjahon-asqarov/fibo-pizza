import React from 'react'
import { useSelector } from 'react-redux'

export default function Button({ text }) {
    const num = useSelector((state) => state.korzina.data)

    return (
        <button className='btn-yellow max:static fixed bottom-8 right-6'>{text} | {num.length}</button>
    )
}
