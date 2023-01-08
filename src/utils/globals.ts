export function currencyAmount(amount = 0, currency: string, symbol: string) {
  // (amount, "NGN", "₦")
  const amountString = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(amount / 100);

  return symbol ? amountString.replace(/\w+\s/g, symbol) : amountString;
}
