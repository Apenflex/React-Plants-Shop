import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useGoods = create((set, get) => ({
    allGoods: [],
    goods: [],
    isLoading: false,
    isError: null,
    perPage: 8,
    currentPage: 1,
    totalPages: 1,
    startIndex: 0,
    endIndex: 0,
    inputSearch: '',
    sortBy: '',
    fetchAllGoods: async () => {
        try {
            set({ isLoading: true });
            const data = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(require('./services/useGoods.json'));
                }, 1000);
            });
            set({ allGoods: data, isLoading: false, isError: false });
        } catch (err) {
            console.log(err);
            set({ goods: [], isLoading: false, isError: true });
        }
    },
    renderGoods: () => {
        setTimeout(() => {
            const { perPage, currentPage } = get();
            const startIndex = (currentPage - 1) * perPage;
            const endIndex = startIndex + perPage;
            if (get().inputSearch !== '') {
                const filteredData = get().allGoods.filter((item) => item.name.toLowerCase().includes(get().inputSearch.toLowerCase()));
                const totalPages = Math.ceil(filteredData.length / get().perPage);
                set({ goods: filteredData, totalPages, isLoading: false, isError: false });
                return;
            }
            if (get().sortBy !== '') {
                const sortedData = get().allGoods.sort((a, b) => {
                    switch (get().sortBy) {
                        case 'default': return a.id - b.id;
                        case 'priceAsc': return a.price - b.price;
                        case 'priceDesc': return b.price - a.price;
                        case 'nameAsc': return a.name.localeCompare(b.name);
                        case 'nameDesc': return b.name.localeCompare(a.name);
                        default: return 0;
                    } 
                });
                const totalPages = Math.ceil(sortedData.length / get().perPage);
                set({ goods: sortedData, totalPages, isLoading: false, isError: false });
                return;
            }
            const limitedData = get().allGoods.slice(startIndex, endIndex);
            const totalPages = Math.ceil(get().allGoods.length / perPage);
            set({ goods: limitedData, totalPages, isLoading: false, isError: false, startIndex, endIndex });
        }, 1000);
    },
    setPerPage: (perPage) => { set({ perPage, currentPage: 1 }) },
    changePages: (type) => {
        switch (type) {
            case 'next':
                if (get().currentPage < get().totalPages) {
                    set({ currentPage: get().currentPage + 1 });
                }
                break;
            case 'prev':
                if (get().currentPage > 1) {
                    set({ currentPage: get().currentPage - 1 });
                }
                break;
            default:
                break;
        }
    },
    setInputSearch: (inputSearch) => { set({ inputSearch }) },
    setSortBy: (sortBy) => {
        switch (sortBy) {
            case 'default': set({ sortBy }); break;
            case 'priceAsc': set({ sortBy }); break;
            case 'priceDesc': set({ sortBy }); break;
            case 'nameAsc': set({ sortBy }); break;
            case 'nameDesc': set({ sortBy }); break;
            default: break;
        }
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