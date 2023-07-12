import React from "react";

import SelectInput from "@/components/SelectInput";
import NumberInput from "@/components/NumberInput";
import StringInput from "@/components/StringInput";
import Button from "@/components/Button";

export default function LifeEvent(props) {
    const [eventDetails, setEventDetails] = React.useState({});
const [errorMessage, setErrorMessage] = React.useState("");
    return (<><div className='flex flex-col'><SelectInput label='Type' options={[{'label': 'Job income', 'value': 'job_income'}, {'label': 'RSUs', 'value': 'rsus'}, {'label': 'Rent income', 'value': 'rent_income'}, {'label': 'Real Estate', 'value': 'realestate'}, {'label': 'Mortgage', 'value': 'mortgage'}, {'label': 'Expense', 'value': 'expense'}, {'label': 'Stock Market Crash', 'value': 'crash'}]} /><NumberInput label='Start Year' /><NumberInput label='End Year' /><StringInput placeholder='Name' /><Button>Save Event</Button></div></>);
} 