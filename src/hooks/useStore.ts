import { create } from 'zustand'

interface UseProps {
  openDashboard: boolean
  setOpenDashboard: (action: boolean) => void
}

export const useStore = create<UseProps>()((set) => ({
  openDashboard: false,
  setOpenDashboard: (action: boolean) => set({ openDashboard: action }),
}))
