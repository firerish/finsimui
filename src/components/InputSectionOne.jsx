import React from "react";

import NumberInput from "@/components/NumberInput";
import SelectInput from "@/components/SelectInput";

export default function InputSectionOne(props) {
    
    return (<><section className="p-4 border rounded">
  <h2 className="text-xl font-semibold mb-2">Starting Position</h2>
  <NumberInput label="Savings in cash" />
  <NumberInput label="Retirement accounts" />
  <NumberInput label="ETF investments" />
  <NumberInput label="Equity investments" />
  <NumberInput label="Current age" />
</section>

<section className="p-4 border rounded mt-4">
  <h2 className="text-xl font-semibold mb-2">Targets</h2>
  <NumberInput label="Retirement age" />
  <NumberInput label="Final age" />
  <NumberInput label="Emergency stash" />
</section>

<section className="p-4 border rounded">
  <h2 className="text-xl font-semibold mb-2">Allocations</h2>
  <NumberInput label="Investment in Pension %" />
  <NumberInput label="Investment in ETFs %" />
  <NumberInput label="Investment in Equity %" />
  <SelectInput
    label="Drawdown Order"
    options={[
      { label: "First", value: "first" },
      { label: "Second", value: "second" },
      { label: "Third", value: "third" },
      { label: "Fourth", value: "fourth" },
    ]}
  />
</section>

<section className="p-4 border rounded">
  <h2 className="text-xl font-semibold mb-2">Economic Parameters</h2>
  <NumberInput label="Inflation Rate%" />
  <NumberInput label="Stock Growth%" />
  <NumberInput label="Pension Growth%" />
</section>
</>);
} 