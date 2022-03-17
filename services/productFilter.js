import React from "react";
import axios from "axios";

export function productFilter(body) {
    const productFilterURL = `${apiUrl()}product-filter/`
    return   axios.post(`${productFilterURL}`,body).then((response) => response);
}