"use client";

  import React from "react";

import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Parameters from "@/components/Parameters";
import InputSectionThree from "@/components/InputSectionThree";

export default function index(props) {
    const [activeTab, setActiveTab] = React.useState("Parameters");
    return (<><>
  <Navbar
    logo="Financial Simulator"
    links={[
      { text: "Home" },
      { text: "Parameters" },
      { text: "Events" },
      { text: "Run Simulation" },
      { text: "Data" },
    ]}
    cta={{ text: "Sign Up", url: "/signup" }}
    activeTab={activeTab}
    setActiveTab={setActiveTab}
  />
  <main className="p-8 bg-gray-100">
    {activeTab == "Home" && <Home />}
    {activeTab == "Parameters" && <Parameters />}
    {activeTab == "Events" && <InputSectionThree />}
  </main>
</>
</>);
} 