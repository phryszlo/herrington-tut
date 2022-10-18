import {
  useLogin,
  useLogout,
  useAddtoCart,
  useUser,
  useCartCount
 } from './store-zustand'

const LoginSection = () => {
  const login = useLogin();
  const logout = useLogout();

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

const UserSection = () => {
  const user = useUser()
  return <div>User: {user}</div>
}
const AddToCartSection = () => {
  const addToCart = useAddtoCart();
  return (
    <div>
      <button onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
}
const CartCountSection = () => {
  const cartCount = useCartCount();
  return (
    <div>
      Cart count: {cartCount}
    </div>
  )
}

function ZustandPage() {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  )
}

export default ZustandPage