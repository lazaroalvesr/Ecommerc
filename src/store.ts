import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProductType } from '@/types/ProductType';

type CartState = {
    cart: ProductType[];
    addProduct: (product: ProductType) => void;
    // removeProduct: (productId: string) => void
    isOpen: boolean;
    toggleCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist((set) => ({
        cart: [],
        addProduct: (item) =>
            set((state) => {
                const product = state.cart.find((p) => p.id === item.id)
                if (product) {
                    const updatedCart = state.cart.map((p) => {
                        if (p.id === item.id) {
                            return { ...p, quantify: p.quantify ? p.quantify + 1 : 1 }
                        }
                        return p;
                    });
                    return {cart: updatedCart};
                } else {
                    return { cart: [...state.cart, { ...item, quantify: 1 }] }
                }
            }),
        isOpen: false,
        toggleCart: () => set((state) => ({ isOpen: !state.isOpen }))
    }), { name: 'cart-storage' })
)