import { create } from 'zustand';

const useShop = create((set, get) => ({
    cartItems: [],
    showCartIcon: false,
    isCartOpen: false,
    quantity: 0,
    addToCart: (item) => {
        const existingItem = get().cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
            set({ cartItems: [...get().cartItems] });
        } else {
            set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
        }
        set({ showCartIcon: true, quantity: get().quantity + 1 });
    },
    toggleCart: () => {
        set({ isCartOpen: !get().isCartOpen });
    },
    removeFromCart: (item) => {
        const updatedCartItems = get().cartItems.filter((cartItem) => cartItem.id !== item.id);
        set({ cartItems: updatedCartItems, quantity: get().quantity - item.quantity });
        if (updatedCartItems.length === 0) {
            set({ showCartIcon: false });
            set({ quantity: 0 });
            set({ isCartOpen: !get().isCartOpen });
        }
    },
    clearCart: () => {
        set({ cartItems: [] });
        set({ showCartIcon: false });
        set({ quantity: 0 });
    },
    calculateItemTotal: (item) => {
        return (item.quantity * +item.price).toFixed(2);
    },
    calculateTotal: () => {
        return get().cartItems.reduce((acc, item) => {
            return acc + +get().calculateItemTotal(item);
        }, 0).toFixed(2);
    },
    onInputButtonChange: (type, item) => {
        switch (type) {
            case 'increase':
                if (item.quantity < 100) {
                    const cartItems = get().cartItems;
                    cartItems.find((cartItem) => cartItem.id === item.id).quantity += 1;
                    set({ quantity: get().quantity + 1 });
                }
                break;
            case 'decrease':
                if (item.quantity > 1) {
                    const cartItems = get().cartItems;
                    cartItems.find((cartItem) => cartItem.id === item.id).quantity -= 1;
                    set({ quantity: get().quantity - 1 });
                }
                break;
            default:
                break;
        }
    },
    onInputChange: (e, item) => {
        let newQuantity = parseInt(e.target.value);

        if (isNaN(newQuantity) || newQuantity < 1) {
            newQuantity = 1;
        } else if (newQuantity > 100) {
            newQuantity = 100;
        }

        const updatedCartItems = get().cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
        );

        set((prevState) => ({
            ...prevState,
            cartItems: updatedCartItems,
            quantity: prevState.quantity - item.quantity + newQuantity,
        }));
    },

}));

export default useShop;