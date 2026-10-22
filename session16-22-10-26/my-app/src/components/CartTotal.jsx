import { useSelector } from 'react-redux'
import { selectSubtotal } from '../store/cartSlice'

const DISCOUNT_THRESHOLD = 1000
const DISCOUNT_RATE = 0.02

export default function CartTotal() {
  const subtotal = useSelector(selectSubtotal)
  const discount = subtotal > DISCOUNT_THRESHOLD ? subtotal * DISCOUNT_RATE : 0
  const total = subtotal - discount

  return (
    <div>
      <h2>Total</h2>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Discount (2% over $1,000): -${discount.toFixed(2)}</p>
      <p>
        <strong>Total: ${total.toFixed(2)}</strong>
      </p>
    </div>
  )
}
