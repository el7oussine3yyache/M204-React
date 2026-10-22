import { useSelector, useDispatch } from 'react-redux'
import {
  selectItems,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../store/cartSlice'

export default function CartAffichage() {
  const items = useSelector(selectItems)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty. Add an item above.</p>
      ) : (
        <table border="1" cellPadding="6">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.stock}</td>
                <td>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    disabled={item.quantity >= item.stock}
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <button onClick={() => dispatch(removeItem(item.id))}>
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
