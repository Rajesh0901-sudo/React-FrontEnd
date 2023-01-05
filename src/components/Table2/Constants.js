import { divide, multiply } from "./Formula";
export const terms = [
  {
    Code: "SHINC",
    Desccription: "SUN. & HOLIDAYS INCL.",
    factor: 1,
  },
  {
    Code: "SHEX0",
    Desccription: "SUN. & HOLIDAYS EXCL.",
    factor: 1.1667,
  },
  {
    Code: "SHEX1",
    Desccription: "SAT. 1200 TO SUN. 2400 EXCL.",
    factor: 1.2727,
  },
  {
    Code: "SHEX2",
    Desccription: "SAT. 1200 TO MON. 0800 EXCL.",
    factor: 1.3548,
  },
  {
    Code: "SHEX3",
    Desccription: "FRI. 2400 TO SUN. 2400 EXCL.",
    factor: 1.4,
  },
  {
    Code: "SHEX4",
    Desccription: "FRI. 1700 TO SUN. 2400 EXCL.",
    factor: 1.4867,
  },
  {
    Code: "SHEX5",
    Desccription: "FRI. 2400 TO MON. 0800 EXCL.",
    factor: 1.5,
  },
  {
    Code: "SHEX6",
    Desccription: "FRI. 1700 TO MON. 0800 EXCL.",
    factor: 1.6,
  },
  {
    Code: "FHINC",
    Desccription: "FRI. & HOLIDAYS INCL.",
    factor: 1,
  },
  {
    Code: "FHEX1",
    Desccription: "FRI. & HOLIDAYS EXCL.",
    factor: 1.1667,
  },
  {
    Code: "FHEX2",
    Desccription: "WEDN. 1700 TO SAT. 0800 EXCL.",
    factor: 1.6,
  },
  {
    Code: "CQD1",
    Desccription: "CUSTOMARY QUICK DESPATCH SHINC",
    factor: 1,
  },
  {
    Code: "SHEX7",
    Desccription: "THU. 1700 TO SUN. 0800 EXCL",
    factor: 1.6,
  },
  {
    Code: "SHEX8",
    Desccription: "THU. 1200 TO SAT. 0800 EXCL",
    factor: 1.4,
  },
];

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
    type: "dropdown",
    options: terms,
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
  {
    key: "Used time",
    values: [""],
    label: "Used time",
  },
  {
    key: "Deduction",
    values: [""],
    label: "Deduction",
  },
  {
    key: "Balance time",
    values: [""],
    label: "Balance time",
  },
  {
    key: "result@port",
    values: [""],
    label: "result@port",
  },
];
