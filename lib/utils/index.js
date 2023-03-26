export default function formatCurrency({
  amount,
  local = 'en-US',
  currency = 'USD',
  decimalPlaces = 2
}) {
  if (typeof amount !== 'number') return

  const { format } = new Intl.NumberFormat(local, {
    style: 'currency',
    currency,
    maximumFractionDigits: decimalPlaces
  })

  return format(amount)
}
