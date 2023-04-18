export function currencyAmount(amount = 0, currency: string, symbol: string) {
  // (amount, "NGN", "₦")
  const amountString = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(amount / 100);

  return symbol ? amountString.replace(/\w+\s/g, symbol) : amountString;
}

export function nairaToKobo(amount: number) {
  return amount * 100;
}

export function formatMoney(amount: number) {
  const amountString = amount.toString();
  // insert commas every three digits from the right
  const formattedAmount = amountString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedAmount;
}
