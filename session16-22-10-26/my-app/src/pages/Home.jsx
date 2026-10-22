import ItemForm from '../components/ItemForm.jsx'
import CartAffichage from '../components/CartAffichage.jsx'
import CartTotal from '../components/CartTotal.jsx'

export default function Home() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ItemForm />
      <CartAffichage />
      <CartTotal />
    </div>
  )
}
