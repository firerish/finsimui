"use client";

  import React from "react";

import NumberInput from "@/components/NumberInput";

export default function StartPosition(props) {
    
    return (<><section className="p-2 border rounded flex-grow">
  <h2 className="text-xl font-semibold mb-2">Starting Position</h2>
  <NumberInput label="Current age" />
  <NumberInput label="Savings in cash" />
  <NumberInput label="Retirement accounts" />
  <NumberInput label="ETF investments" />
  <NumberInput label="Equity investments" />
</section>
</>);
} 