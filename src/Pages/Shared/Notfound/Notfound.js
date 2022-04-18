import React from "react";
import error404 from '../../../images/404.webp';

const Notfound = () => {
  return (
    <div style={{height:'100vh'}} className="mx-auto w-50">
      <img className="w-100" src={error404} alt="" />
    </div>
  );
};

export default Notfound;
