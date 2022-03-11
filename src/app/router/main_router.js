import {Route, Routes} from "react-router";
import HomeComponent from "../components/home";

const Main_router = ()=>{
    return (
        <Routes>
            <Route path={"/home"} element={<HomeComponent />} />
        </Routes>
    )
}

export default Main_router