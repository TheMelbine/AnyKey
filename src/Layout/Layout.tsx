import Categories from "../components/Categories";
import {Outlet} from "react-router-dom";
import Sort from "../components/Sort/Sort";
import React from "react";

export const Layout = () =>{
    return(
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <Outlet/>
        </>
    )
}