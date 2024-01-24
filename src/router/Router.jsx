import { BrowserRouter, Routes, Route } from "react-router-dom";
import GaleryCarousel from "../pages/carousel/GaleryCarousel";
import Index from "../pages/Index";
import { PaginaServicos } from "../pages/paginaServicos/paginaServicos";


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/eventos" element={<Index/>}/>
                <Route path="/eventos/galerycarousel" element={<GaleryCarousel/>}/>
                <Route path="/eventos/servicos" element={<PaginaServicos/>}/>
                <Route path="/servicos/:id" element={<PaginaServicos/>}/>
                             
                
            </Routes>
        </BrowserRouter>
    )

}