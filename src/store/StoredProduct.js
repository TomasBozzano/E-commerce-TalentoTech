import {create} from 'zustand';

export const useStore = create((set) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  removeProduct: (id) => set((state) => ({ products: state.products.filter((p) => p.id !== id) })),
  countProducts: () => set((state) => ({ count: state.products.length })),
  clearCart: () => set({ products: [] }),
}));
