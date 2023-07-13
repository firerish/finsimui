"use client";

  import React from "react";

import NumberInput from "@/components/NumberInput";
import SelectInput from "@/components/SelectInput";

export default function Allocations(props) {
    
    return (<><div className="p-2 border rounded flex-grow  w-1/4">
  <h2 className="text-xl font-semibold mb-2">Allocations</h2>
  <div className="flex flex-col">
    <div className="flex flex-row">
      <div className="w-3/4">
        <NumberInput label="Investment in ETFs %" />
      </div>
      <div className="w-1/4">
        <SelectInput
          label="Withdraw"
          options={[
            { label: "First", value: "1" },
            { label: "Second", value: "2" },
            { label: "Third", value: "3" },
            { label: "Fourth", value: "4" },
          ]}
        />
      </div>
    </div>
    <div className="flex flex-row">
      <div className="w-3/4">
        <NumberInput label="Investment in equity %" />
      </div>
      <div className="w-1/4">
        <SelectInput
          label="."
          options={[
            { label: "First", value: "1" },
            { label: "Second", value: "2" },
            { label: "Third", value: "3" },
            { label: "Fourth", value: "4" },
          ]}
        />
      </div>
    </div>
    <div className="flex flex-row">
      <div className="w-3/4">
        <NumberInput label="Pension contribution %" />
      </div>
      <div className="w-1/4">
        <SelectInput
          label="."
          options={[
            { label: "First", value: "1" },
            { label: "Second", value: "2" },
            { label: "Third", value: "3" },
            { label: "Fourth", value: "4" },
          ]}
        />
      </div>
    </div>
    <div className="flex flex-row">
      <div className="w-3/4">
        <NumberInput label="Emergency stash" />
      </div>
      <div className="w-1/4">
        <SelectInput
          label="."
          options={[
            { label: "First", value: "1" },
            { label: "Second", value: "2" },
            { label: "Third", value: "3" },
            { label: "Fourth", value: "4" },
          ]}
        />
      </div>
    </div>
  </div>
</div>
</>);
} 