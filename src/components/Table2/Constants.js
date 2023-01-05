import { divide, multiply } from "./Formula";
export const data = [
  {
    key: "portName",
    values: [""],
    label: "Port Name",
  },
  {
    key: "cargoName",
    values: [""],
    label: "Cargo Name",
  },
  {
    key: "portFunc",
    values: [""],
    label: "Port func",
  },
  {
    key: "cpQty",
    values: [""],
    label: "CP qty (MT)",
  },
  {
    key: "LdRateD",
    values: [""],
    label: "L/D Rate(D)",
    formula: "LdRateD*24",
    args: ["LdRateD", 24],
    outputField: "ldRateH",
  },
  {
    key: "ldRateH",
    values: [""],
    label: "L/D rate(H)",
    formula: "ldRateH/24",
    args: ["ldRateH", 24],
    outputField: "LdRateD",
  },
  {
    key: "term",
    values: [""],
    label: "TERM",
  },
  {
    key: "demRatePerDay",
    values: [""],
    label: "Dem rate/D",
    formula: "demRatePerDay/2",
    args: ["demRatePerDay", 2],
    outputField: "desRatePerDay",
  },
  {
    key: "desRatePerDay",
    values: [""],
    label: "Des rate/D",
    formula: "desRatePerDay*2",
    outputField: "demRatePerDay",
  },
  {
    key: "laycan_start",
    values: [""],
    label: "Laycan start",
  },
  {
    key: "laycan_end",
    values: [""],
    label: "Laycan end",
  },
];
export const cpDetailsdata = [
  {
    key: "cargoPortName",
    values: [""],
    label: "Port Name",
    formula: "portName",
    outputField: "cargoPortName",
  },
  {
    key: "laytimeCommence",
    values: [""],
    label: "Laytime commence",
  },
  {
    key: "laytimeCompleted",
    values: [""],
    label: "Laytime completed",
  },
  {
    key: "allowedtime",
    values: [""],
    label: "Allowed Time",
  },
];
