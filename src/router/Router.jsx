import { BrowserRouter, Routes, Route } from "react-router-dom";
import GaleryCarousel from "../pages/carousel/GaleryCarousel";
import Index from "../pages/Index";
import { PaginaServicos } from "../pages/paginaServicos/paginaServicos";


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Index/>}/>
                <Route path="/galerycarousel" element={<GaleryCarousel/>}/>
                <Route path="/servicos" element={<PaginaServicos/>}/>
                <Route path="/servicos/:id" element={<PaginaServicos/>}/>
                             
                
            </Routes>
        </BrowserRouter>
    )

}