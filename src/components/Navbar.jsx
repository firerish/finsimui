"use client";

  import React from "react";

import Tab from "@/components/Tab";
import Button from "@/components/Button";

export default function Navbar(props) {
    
    return (<><header className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-3 flex justify-between items-center gap-3 font-light">
  <div className="text-slate-100 text-xl">{props.logo}</div>
  <div className="flex justify-center gap-6 z-50">
    {props.links.map((link) => (
      <Tab
        label={link.text}
        active={link.text == props.activeTab} // Added active prop
        onClick={() => props.setActiveTab(link.text)} // Added onClick handler
      >
        {link.text}
      </Tab>
    ))}
  </div>
  {props.cta && (
    <Button primary size="sm">
      {props.cta.text}
    </Button>
  )}
</header>
</>);
} 