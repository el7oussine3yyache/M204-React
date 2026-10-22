import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'

const emptyForm = { id: '', name: '', quantity: '', price: '', stock: '' }

export default function ItemForm() {
  const dispatch = useDispatch()
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const quantity = Number(form.quantity)
    const price = Number(form.price)
    const stock = Number(form.stock)

    if (!form.id.trim() || !form.name.trim()) {
      setError('ID and name are required.')
      return
    }
    if (!Number.isInteger(quantity) || quantity < 1) {
      setError('Quantity must be a whole number of at least 1.')
      return
    }
    if (!Number.isInteger(stock) || stock < 1) {
      setError('Stock must be a whole number of at least 1.')
      return
    }
    if (form.price === '' || !(price >= 0)) {
      setError('Price must be 0 or more.')
      return
    }
    if (quantity > stock) {
      setError('Quantity cannot be higher than stock.')
      return
    }

    setError('')
    dispatch(
      addItem({
        id: form.id.trim(),
        name: form.name.trim(),
        quantity,
        price,
        stock,
      })
    )
    setForm(emptyForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add item</h2>
      <input
        name="id"
        placeholder="ID"
        value={form.id}
        onChange={handleChange}
      />
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="quantity"
        type="number"
        min="1"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
      />
      <input
        name="price"
        type="number"
        min="0"
        step="0.01"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />
      <input
        name="stock"
        type="number"
        min="1"
        placeholder="Stock"
        value={form.stock}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
      {error && <p>{error}</p>}
    </form>
  )
}
