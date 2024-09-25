export default function minimizeNumber(num: number, precision = 1) {
  const map = [
    { suffix: "T", threshold: 1e12, divicionFactor: 1e12 },
    { suffix: "B", threshold: 1e9, divicionFactor: 1e9 },
    { suffix: "M", threshold: 1e6, divicionFactor: 1e6 },
    { suffix: "K", threshold: 1e5, divicionFactor: 1e3 },
    // { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    // console.log("here");
    const formatted =
      Math.floor(num / found.divicionFactor).toFixed(precision) + found.suffix;
    return formatted;
  }

  // return Intl.NumberFormat("en-US").format(num);
  return num.toLocaleString("en-US");
}
