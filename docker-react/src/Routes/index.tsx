// Pages Components
import { Home } from '../Pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const RoutesPage = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}