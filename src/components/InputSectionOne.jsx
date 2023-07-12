import React from "react";

import NumberInput from "@/components/NumberInput";
import SelectInput from "@/components/SelectInput";

export default function InputSectionOne(props) {
    
    return (<><div className="flex">
  <section className="p-4 border rounded w-25 flex-grow">
    <h2 className="text-xl font-semibold mb-2">Starting Position</h2>
    <NumberInput label="Savings in cash" />
    <NumberInput label="Retirement accounts" />
    <NumberInput label="ETF investments" />
    <NumberInput label="Equity investments" />
    <NumberInput label="Current age" />
  </section>

  <section className="p-4 border rounded w-25 flex-grow">
    <h2 className="text-xl font-semibold mb-2">Targets</h2>
    <NumberInput label="Retirement age" />
    <NumberInput label="Final age" />
  </section>

  <section className="p-4 border rounded w-25 flex-grow">
    <h2 className="text-xl font-semibold mb-2">Allocations</h2>
    <NumberInput label="Pension contribution %" />
    <NumberInput label="Investment in ETFs %" />
    <NumberInput label="Investment in Equity %" />
    <NumberInput label="Emergency stash" />
    <SelectInput
      label="Drawdown order"
      options={[
        { label: "First", value: "first" },
        { label: "Second", value: "second" },
        { label: "Third", value: "third" },
        { label: "Fourth", value: "fourth" },
      ]}
    />
  </section>

  <section className="p-4 border rounded w-25 flex-grow">
    <h2 className="text-xl font-semibold mb-2">Economy</h2>
    <NumberInput label="Pension Growth%" />
    <NumberInput label="ETF Growth%" />
    <NumberInput label="Equity Growth%" />
    <NumberInput label="Inflation Rate%" />
  </section>
</div>
</>);
} 