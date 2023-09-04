import { Route, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainPage from '../pages/MainPage/MainPage'
import WeddingCakes from '../pages/WeddingCakes/WeddingCakes'
import FestiveCakes from '../pages/FestiveCakes/FestiveCakes'
import ChildrenCakes from '../pages/ChildrensCakes/ChildrensCakes'
import BirthdayCakes from '../pages/BirthdayCakes/BirthdayCakes'
import AnniversaryCakes from '../pages/AnniversaryCakes/AnniversaryCakes'
import Layout from "../components/Layout/Layout";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import CorporateCakes from "../pages/CorporateCakes/Corporatecakes"
import BentoCakes from "../pages/BentoCakes/BentoCakes"
import Favorites from "../pages/Favorites/Favorites";
export default createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Layout/>}>
            <Route path="" element={<MainPage />} />
            <Route path="wedding" element={<WeddingCakes />} />
            <Route path="festive" element={<FestiveCakes />} />
            <Route path="children" element={<ChildrenCakes />} />
            <Route path="birthday" element={<BirthdayCakes />} />
            <Route path="annivarsary" element={<AnniversaryCakes />} />
            <Route path="corporate" element={<CorporateCakes/>}/>
            <Route path="bento" element={<BentoCakes/>}/>
            <Route path="favorites" element={<Favorites/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    </>))

