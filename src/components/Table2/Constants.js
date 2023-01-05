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
];
