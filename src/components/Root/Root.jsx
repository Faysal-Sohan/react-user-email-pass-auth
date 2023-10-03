import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto my-11">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;