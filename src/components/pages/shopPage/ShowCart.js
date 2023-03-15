import {useShop} from '../../../store';

import OrderForm from '../../orderForm/OrderForm';

import shopIcon from '../../../resources/img/icons/basket-shopping-solid.svg';
import deleteItemIcon from '../../../resources/img/icons/deleteItemIcon.svg';

const ShowCart = () => {
   // console.log('render ShowCart');
   const {
      cartItems,
      showCartIcon,
      isCartOpen,
      quantity,
      toggleCart,
      removeFromCart,
      clearCart,
      onInputButtonChange,
      onInputChange,
   } = useShop();

   const calculateItemTotal = useShop((state) => state.calculateItemTotal);
   const calculateTotal = useShop((state) => state.calculateTotal);

   return (
      <>
         {showCartIcon && (
            <div className="cart-icon" onClick={() => toggleCart()}>
               <div className="cart-icon-img">
                  <img src={shopIcon} alt="shopIcon" />
               </div>
               <span className="cart-count">{quantity}</span>
            </div>
         )}
         {isCartOpen && (
            <div className="modal">
               <div className="modal-content">
                  <div className="modal-header">
                     <h2>Shopping Cart</h2>
                     <div className="btn_close" onClick={() => toggleCart()}>+</div>
                  </div>
                  <div className="modal-body">
                     <ul>
                        {cartItems.map((item) => (
                           <li key={item.id}
                              className="modal-body-item">
                              <div className="modal-body-item-wrapper">
                                 <div className="modal-body-item-img">
                                    <img src={item.img} alt="" />
                                 </div>
                                 <div className="modal-body-item-title">
                                    {item.name}
                                 </div>
                              </div>
                              <div className="modal-body-item-wrapper">
                                 <div className="modal-body-item-count">
                                    <input type="number" value={item.quantity}
                                       onChange={(e) => onInputChange(e, item)}
                                    />
                                    <div className="arrows">
                                       <div className="up"
                                          onClick={() => onInputButtonChange('increase', item)}
                                       >
                                       </div>
                                       <div className="down"
                                          onClick={() => onInputButtonChange('decrease', item)}
                                       >
                                       </div>
                                    </div>
                                 </div>
                                 <div className="modal-body-item-price">
                                    ${calculateItemTotal(item)}
                                 </div>
                                 <div className="modal-body-item-delete">
                                    <div className="btn_delete"
                                       onClick={() => removeFromCart(item)}>
                                       <img src={deleteItemIcon} alt="deleteItemIcon" />
                                    </div>
                                 </div>
                              </div>
                           </li>
                        ))}
                        <div className="modal-body-order-total">
                           <div className="modal-body-order-total-title">
                              Order Total:
                           </div>
                           <div className="modal-body-order-total-price">
                              ${calculateTotal()}
                           </div>
                        </div>
                        <OrderForm onSubmit={() => {
                           console.log(`Order is sent to server: ${JSON.stringify(cartItems)}`)
                           toggleCart()
                           clearCart()
                        }} />
                     </ul>
                  </div>
               </div>
            </div>
         )}
      </>
   )
}

export default ShowCart;