import React from 'react'
import './Newtask.css'

export default function Newtask() {
    return (
        <>
        <div className="newtask">
            <div>
                <input type='text' placeholder='write your task' />
            </div>
            <div>
                <span>➕ </span> <span> 🔁</span> 
            </div>
        </div>
        <div className='filters'>
            <button className='filter-btn'>All</button>
            <button className='filter-btn'>To Do</button>
            <button className='filter-btn'>Done</button>
        </div>
        </>
    )
}
