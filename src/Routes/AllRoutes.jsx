import React from 'react'
import { Route, Routes } from 'react-router-dom'
import All from '../Pages/All'
import Css from '../Pages/Css'
import Html from '../Pages/Html'
import Javascript from '../Pages/Javascript'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/all' element={<All />} ></Route>
            <Route path='/html' element={<Html/>} ></Route>
            <Route path='/css' element={<Css/>} ></Route>
            <Route path='/js' element={<Javascript/>} ></Route>
        </Routes>
    )
}
