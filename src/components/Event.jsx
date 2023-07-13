"use client";

  import React from "react";

import SelectInput from "@/components/SelectInput";
import StringInput from "@/components/StringInput";
import NumberInput from "@/components/NumberInput";

export default function LifeEvent(props) {
    const [eventDetails, setEventDetails] = React.useState({});
const [errorMessage, setErrorMessage] = React.useState("");
    return (<><div className="flex flex-col">
  <div className="flex flex-row">
    <SelectInput
      label="Type"
      options={[
        { label: "Job income", value: "job_income" },
        { label: "RSUs", value: "rsus" },
        { label: "Rent income", value: "rent_income" },
        { label: "Real Estate", value: "realestate" },
        { label: "Mortgage", value: "mortgage" },
        { label: "Expense", value: "expense" },
        { label: "Stock Market Crash", value: "crash" },
      ]}
    />
    <StringInput label="Name" />
    <NumberInput label="Start year" />
    <NumberInput label="End year" />
  </div>
</div>
</>);
} 