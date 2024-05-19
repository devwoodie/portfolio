import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Home } from "../pages/Home";
import { Project } from "../pages/Project";
import { Contact } from "../pages/Contact";
import { ScrollToTop } from "../utils/ScrollToTop";

export const PageList = () => {

    return(
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/project' element={<Project />} />
                        <Route path='/contact' element={<Contact />} />
                    </Route>
                    </Routes>
            </ScrollToTop>
        </BrowserRouter>
    )
}