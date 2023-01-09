import { divide, multiply } from "./Formula";
export const portOptions = [
  { label: 'Singapore', value: 'Singapore' },
  { label: 'Mumbai', value: 'Mumbai' },
  { label: 'Gujrat', value: 'Gujrat' },         
];
export const cpFuncOptions = [
  { label: 'Loading', value: 'Loading' },
  { label: 'Discharging', value: 'Discharging' },
  { label: 'Ship to ship', value: 'ship to ship' },
  { label: 'Bunker', value: 'Bunker' },
  { label: 'other', value: 'other' },         
];




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
    type: "dropdown",
    options:portOptions,
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
    type:'dropdown',
    options:cpFuncOptions,
  },
  {
    key: ["cpQty"],
    values: [""],
    label: "CP qty (MT)",
    type:'number',
    formula: ["cpQty/LdRateD"],
    outputField: ["allowedtime"],
  },
  {
    key: "LdRateD",
    values: [""],
    label: "L/D Rate(D)",
    type:'number',
    formula: ["LdRateD*24", "cpQty/LdRateD"],
    args: ["LdRateD", 24],
    outputField: ["ldRateH", "allowedtime"],
  },
  {
    key: "ldRateH",
    values: [""],
    label: "L/D rate(H)",
    type:'number',
    formula: ["ldRateH/24"],
    args: ["ldRateH", 24],
    outputField: ["LdRateD"],
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
    type:'number',
    formula: ["demRatePerDay/2"],
    args: ["demRatePerDay", 2],
    outputField: ["desRatePerDay"],
  },
  {
    key: "desRatePerDay",
    values: [""],
    label: "Des rate/D",
    type:'number',
    formula: ["desRatePerDay*2"],
    outputField: ["demRatePerDay"],
  },
  {
    key: "laycan_start",
    values: [""],
    label: "Laycan start",
    type:'date'
  },
  {
    key: "laycan_end",
    values: [""],
    label: "Laycan end",
    type:'date'
  },
  // {
  //   key: "Action",
  //   label:"Action",
  //   values:[""],
  // },
];
export const cpDetailsdata = [
  {
    key: "portName",
    values: [""],
    label: "Port Name",

  },
  {
    key: "laytimeCommence",
    values: [""],
    label: "Laytime commence",
    type:'date'
  },
  {
    key: "laytimeCompleted",
    values: [""],
    label: "Laytime completed",
    type:'date'
  },
  {
    key: "allowedtime",
    values: [""],
    type:'number',
    label: "Allowed Time",
    disabled:'disabled'
  },
  {
    key: "Used_time",
    values: [""],
    type:'number',
    label: "Used time",
    disabled:'disabled'
  },
  {
    key: "Deduction",
    values: [""],
    type:'number',
    label: "Deduction",
  },
  {
    key: "Balance_time",
    values: [""],
    type:'number',
    label: "Balance time",
    disabled:'disabled'
  },
  {
    key: "result@port",
    values: [""],
    label: "result@port",
    disabled:'disabled'
  },
  // {
  //   key: "Action",
  //   label:"Action",
  //   values:[""],
  // },
];

