import {create} from 'zustand';

const useStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
  submittedData: null,
  isSubmitted: false,
  submitApplication: (data) => set({ submittedData: data, isSubmitted: true }),
  reset: () => set({ submittedData: null, isSubmitted: false }),
}));

export default useStore;
