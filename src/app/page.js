import React from "react";

import Navbar from "@/components/Navbar";
import InputSectionOne from "@/components/InputSectionOne";
import InputSectionThree from "@/components/InputSectionThree";

export default function index(props) {
    const [activeTab, setActiveTab] = React.useState('Home');
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
  />
  <main className="p-8 bg-gray-100">
    <InputSectionOne />
    {activeTab === "Parameters" && <InputSectionOne />}
    {activeTab === "Events" && <InputSectionThree />}
  </main>
</>
</>);
} 