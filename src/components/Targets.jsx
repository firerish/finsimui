"use client";

  import React from "react";

import NumberInput from "@/components/NumberInput";

export default function Targets(props) {
    
    return (<><section className="p-2 border rounded flex-grow">
  <h2 className="text-xl font-semibold mb-2">Targets</h2>
  <NumberInput label="Retirement age" />
  <NumberInput label="Final age" />
</section>
</>);
} 