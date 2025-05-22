import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: true,
  isLoggingIn: false,
  isLoggingUp: false,

  signup: async (data) => {
    set({ isLoggingUp: true });
    try {
      const response = await axiosInstance.post("/auth/signup", data);
      set({ authUser: response.data, isLoggingUp: false });
      toast.success("Signup successful!");
    } catch (error) {
      console.error("Signup error:", error);
      set({ isLoggingUp: false });
      toast.error("Signup failed. Please try again.");
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const response = await axios.post("/auth/login", data);
      set({ authUser: response.data, isLoggingIn: false });
      toast.success("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      set({ isLoggingIn: false });
      toast.error("Login failed. Please try again.");
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logout successful!");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed. Please try again.");
    }
  },
}));
