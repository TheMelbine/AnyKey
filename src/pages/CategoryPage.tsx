import {useParams} from "react-router-dom";
import React from "react";
import {Category} from "../components/Category";

export const CategoryPage: React.FC = () => {
    const {id} = useParams()
    return <Category categoryId ={id}/>
}
