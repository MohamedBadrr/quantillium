export const formatNumbers = (value: string | number | undefined) => {
  if (!value) return "0";

  const parsedValue = Number(value);

  // Check if the number has decimals
  const hasDecimals = parsedValue % 1 !== 0;

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: hasDecimals ? 2 : 0,
  });

  // Format and return the parsedValue
  return formatter.format(parsedValue);
};
