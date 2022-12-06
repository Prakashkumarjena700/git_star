import React from 'react'

export default function Pagination({ current, onchange }) {
    let prev = <button  style={{ backgroundColor: 'teal',color:'white' }} disabled={current == 1} onClick={() => onchange(current - 1)} >Prev</button>
    let next = <button style={{ backgroundColor: 'teal',color:'white' }} onClick={() => onchange(current + 1)} >Next</button>

    return (
        <div className='pagination' >
            {prev}
            <button  disabled={current == 1} onClick={() => onchange(current = 1)} >1</button>
            <button disabled={current == 1} onClick={() => onchange(current = current - 1)} >{current - 1}</button>
            <button style={{ backgroundColor: 'maroon',color:'white' }} disabled={true} >{current}</button>
            <button onClick={() => onchange(current = current - 1)} >{current + 1}</button>
            {next}
        </div>
    )
}
