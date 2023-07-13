"use client";

  import React from "react";

import NumberInput from "@/components/NumberInput";

export default function Economy(props) {
    
    return (<><section className="p-2 border rounded flex-grow">
  <h2 className="text-xl font-semibold mb-2">Economy</h2>
  <div className="flex flex-row">
    <div className="w-2/3">
      <NumberInput label="ETF growth%" />
    </div>
    <div className="w-1/3">
      <NumberInput label="StdDev" />
    </div>
  </div>
  <div className="flex flex-row">
    <div className="w-2/3">
      <NumberInput label="Equity growth%" />
    </div>
    <div className="w-1/3">
      <NumberInput label="." />
    </div>
  </div>
  <div className="flex flex-row">
    <div className="w-2/3">
      <NumberInput label="Pension growth%" />
    </div>
    <div className="w-1/3">
      <NumberInput label="." />
    </div>
  </div>
  <div className="flex flex-row">
    <div className="w-2/3">
      <NumberInput label="Inflation rate%" />
    </div>
  </div>
</section>
</>);
} 