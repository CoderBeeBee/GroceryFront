import { create } from "zustand";

type AuthTypes = {
    isLogged: boolean
}

export const useAuthStore = create<AuthTypes>(()=>({
    isLogged:false,
}))

