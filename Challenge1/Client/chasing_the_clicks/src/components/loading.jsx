import React from "react";
import ReactLoading from "react-loading"

const loadingBar = ( type, color ) => (
    <ReactLoading type={type} color={color} height={'10%'} width={'10%'} />
);
 
export default loadingBar;