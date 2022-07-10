import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Starter from "../components/landing/Starter";
import Card from "../components/landing/Card";
import Card1 from "../components/landing/Card1";

export default function Home() {
  
  return (
    <>

      <Navbar />

      <div className="relative screen-w max-w-screen-2xl px-6 laptop:px-24 m-auto">
  
        <Starter />
        {/* <Card />
        <Card1 /> */}
  
  </div>
    </>

  
  );
}