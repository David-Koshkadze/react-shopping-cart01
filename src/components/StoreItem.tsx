import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  let quantity = getItemQuantity(id);

  return (
    <div className="rounded shadow-md hover:shadow-lg bg-white">
      <img src={imgUrl} className="h-64 w-full object-cover" />
      <div className="flex flex-col justify-center">
        <div className="flex my-4">
          <span className="mr-1">{name}</span>
          <span>{formatCurrency(price)}</span>
        </div>

        {quantity === 0 ? (
          <button className="px-4 py-2 bg-teal-600" onClick={() => increaseCartQuantity(id)}>
            Add To Cart
          </button>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center mb-2">
              <button
                className="bg-green-700"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <span className="mx-2">
                <strong>{quantity}</strong> in cart
              </span>
              <button
                className="bg-green-700"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            <button className="bg-red-700" onClick={() => removeFromCart(id)}>
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
