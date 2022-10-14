import React from "react";

const Copyright = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return <div>©{getCurrentYear()} Iboost by Praxis Dev Team</div>;
};

export default Copyright;
