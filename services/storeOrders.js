import React from "react";
import axios from "axios";

export function storeOrders(id) {
    const subByCategoryURL = 'http://34.125.5.25/api/store-orders/'
    return   axios.get(`${subByCategoryURL}`,{id:id}).then((response) => response);
}