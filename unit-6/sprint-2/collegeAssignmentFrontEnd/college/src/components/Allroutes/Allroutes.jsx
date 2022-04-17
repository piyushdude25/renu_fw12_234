import {Routes,Route} from 'react-router-dom';
import { Detailsteachers } from '../Detailsteacher';
import { Home } from '../Home';
export const Allroutes=()=>{
    return <>
    <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path="/details/:id" element={<Detailsteachers/>}></Route>
    </Routes>

    </>
}