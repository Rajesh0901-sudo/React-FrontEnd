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
    key: "Activity",
    values: [""],
    label: "Activity",
  },
  {
    key: "From_date",
    values: [""],
    label: "From date",
  },
  {
    key: "Time",
    values: [""],
    label: "Time",
  },
  {
    key: "Day",
    values: [""],
    label: "CP qty (MT)",
  },
  
  {
    key: "remark",
    values: [""],
    label: "Remark",
    type: "date",
  },
  
];
export const cpDetailsdata = [
  {
    key: "Activity",
    values: [""],
    label: "Activity",
  },
  {
    key: "From_date",
    values: [""],
    label: "From date",
  },
  {
    key: "Time",
    values: [""],
    label: "Time",
  },
  {
    key: "Day",
    values: [""],
    label: "CP qty (MT)",
  },
  
  {
    key: "remark",
    values: [""],
    label: "Remark",
    type: "date",
  },
  
];