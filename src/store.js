import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useGoods = create(( set ) => ({
    goods: [],
    isLoading: false,
    isError: null,
    fetchGoods: async () => {
        set({ isLoading: true });
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(require('./services/useGoods.json'));
            }, 1000)
        })
            .then((data) => {
                set({ goods: data, isLoading: false, isError: false });
                // set({ goods: [], isLoading: false, isError: true });
            })
            .catch((err) => {
                console.log(err);
                set({ goods: [], isLoading: false, isError: true})
            });
    },
}));

export const useShop = create(persist((set, get) => ({
    cartItems: [],
    showCartIcon: false,
    isCartOpen: false,
    quantity: 0,
    inputItemCount: 1,
    addToCart: (item, inputItemCount) => {
        const quantityToAdd = inputItemCount ? inputItemCount : 1;
        const existingItem = get().cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += quantityToAdd;
            set({ cartItems: [...get().cartItems] });
        } else {
            set({ cartItems: [...get().cartItems, { ...item, quantity: quantityToAdd }] });
        }
        set({ showCartIcon: true, quantity: get().quantity + quantityToAdd });
    },
    toggleCart: () => {
        set({ isCartOpen: !get().isCartOpen });
    },
    removeFromCart: (item) => {
        const { cartItems } = get();
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        const updatedQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0) - item.quantity;

        set({ cartItems: updatedCartItems, quantity: updatedQuantity });

        if (updatedCartItems.length === 0) {
            set({ showCartIcon: false, quantity: 0, isCartOpen: !get().isCartOpen });
        }
    },
    clearCart: () => {
        set({ cartItems: [], showCartIcon: false, quantity: 0 });
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
    oninputItemCount: (type) => {
        console.log('render oninputItemCount')
        switch (type) {
            case 'increase':
                set({ inputItemCount: get().inputItemCount + 1 });
                break;
            case 'decrease':
                if (get().inputItemCount > 1) {
                    set({ inputItemCount: get().inputItemCount - 1 });
                }
                break;
            default:
                break;
        }
    },
}),
    {
        name: 'shop-storage',
        storage: createJSONStorage(() => localStorage),
    }
));

export const useTabs = create((set, get) => ({
    activeTab: 'indoor',
    isModalOpen: false,
    onTabClick: (tab) => {
        set({ activeTab: tab });
    },
    onCustomOrderClick: () => {
        set({ isModalOpen: !get().isModalOpen });
    },
    onModal: (close) => {
        if (close) {
            set({ isModalOpen: false });
        } else {
            set({ isModalOpen: !get().isModalOpen });
        }
    }
}));

export const useAccordion = create((set, get) => ({
    activeIndex: null,
    onAccordeonClick: (index) => {
        const { activeIndex } = get();
        (activeIndex === index) ? set({ activeIndex: null }) : set({ activeIndex: index });
    },
}));

export const useScrollButton = create(( set ) => ({
    isVisible: false,
    toggleVisibility: () => {
        if (window.scrollY > 900) {
            set({ isVisible: true });
        } else {
            set({ isVisible: false });
        }
    },
    scrollToTop: () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    },
}));

export const useHamburger = create((set, get) => ({
    menuOpen: false,
    toggleMenu: () => {
        set({ menuOpen: !get().menuOpen });
    },
    toggleMeunuOnLinkClick: () => {
        if (get().menuOpen) {
            set({ menuOpen: false });
        }
    }
}));