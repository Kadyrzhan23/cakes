import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
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
import Cake from "../pages/Cake/Cake";
import Video from "../pages/Video/Video";
import Podborki from "../pages/Podborki/Podborki";
import Sale from "../pages/Sale/Sale";
import Tasting from "../pages/MainPage/Tasting/Tasting";
import Category from "../pages/Category/Category";
export default createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Layout/>}>
            <Route path="" element={<MainPage />} />
            <Route path="wedding" element={<WeddingCakes />} />
            <Route path="festive" element={<FestiveCakes />} />
            <Route path="children" element={<ChildrenCakes />} />
            <Route path="birthday" element={<BirthdayCakes />} />
            <Route path="annivarsary" element={<AnniversaryCakes />} />
            <Route path="cake" element={<Cake/>}/>
            <Route path="video-tortov" element={<Video/>}/>
            <Route path="podborki" element={<Podborki/>}/>
            <Route path="sale" element={<Sale/>}/>
            <Route path="tasting" element={<Tasting/>}/>
            <Route path="categoreis/:category" element={<Category/>}/>
            <Route path="corporate" element={<CorporateCakes/>}/>
            <Route path="bento" element={<BentoCakes/>}/>
            <Route path="favorites" element={<Favorites/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    </>))

