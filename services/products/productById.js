import React from "react";
import axios from "axios";
import {apiUrl} from "../apiUrl/apiUrl";

export function productById(productId) {
    const productByIdURL = `${apiUrl()}products/`
    return   axios.get(`${productByIdURL + productId}`).then((response) => response);

}