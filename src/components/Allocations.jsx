"use client";

  import React from "react";

import NumberInput from "@/components/NumberInput";
import SelectInput from "@/components/SelectInput";

export default function Allocations(props) {
    
    return (<><section className="p-2 border rounded flex-grow">
  <h2 className="text-xl font-semibold mb-2">Allocations</h2>
  <div className="flex flex-col">
    <div className="flex flex-row">
      <div className="w-2/3">
        <NumberInput label="Investment in ETFs %" />
      </div>
      <div className="w-1/3">
        <SelectInput
          label="Withdraw"
          options={[
            { label: "First", value: "first" },
            { label: "Second", value: "second" },
            { label: "Third", value: "third" },
            { label: "Fourth", value: "fourth" },
          ]}
        />
      </div>
    </div>
    <div className="flex flex-row">
      <div className="w-2/3">
        <NumberInput label="Investment in equity %" />
      </div>
      <div className="w-1/3">
        <SelectInput
          label="."
          options={[
            { label: "First", value: "first" },
            { label: "Second", value: "second" },
            { label: "Third", value: "third" },
            { label: "Fourth", value: "fourth" },
          ]}
        />
      </div>
    </div>
    <div className="flex flex-row">
      <div className="w-2/3">
        <NumberInput label="Pension contribution %" />
      </div>
      <div className="w-1/3">
        <SelectInput
          label="."
          options={[
            { label: "First", value: "first" },
            { label: "Second", value: "second" },
            { label: "Third", value: "third" },
            { label: "Fourth", value: "fourth" },
          ]}
        />
      </div>
    </div>
    <div className="flex flex-row">
      <div className="w-2/3">
        <NumberInput label="Emergency stash" />
      </div>
      <div className="w-1/3">
        <SelectInput
          label="."
          options={[
            { label: "First", value: "first" },
            { label: "Second", value: "second" },
            { label: "Third", value: "third" },
            { label: "Fourth", value: "fourth" },
          ]}
        />
      </div>
    </div>
  </div>
</section>
</>);
} 