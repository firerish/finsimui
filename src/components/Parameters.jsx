"use client";

  import React from "react";

import StartPosition from "@/components/StartPosition";
import Targets from "@/components/Targets";
import Allocations from "@/components/Allocations";
import Economy from "@/components/Economy";

export default function Parameters(props) {
    
    return (<><div className="flex flex-row">
  <StartPosition />
  <Targets />
  <Allocations />
  <Economy />
</div></>);
} 