import React from "react";
import banner from '../../../Video/pexels-kindel-media-7578552.mp4';

const Banner = () =>{
    return(
<>
<div className="col-md-6 m-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus illum rem, fugit assumenda fugiat repellat nulla nobis cupiditate mollitia quaerat reprehenderit, velit veniam molestiae doloremque non atque accusantium repellendus.</div>
<video autoPlay loop muted
    style = {{
        position: 'absolute',
        width: '100%',
        left: '50%',
        top: '50%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1'
    }}
     >
     <source src={banner} type="video/mp4" />
     </video>
     </>
    )};
    
    export default Banner;