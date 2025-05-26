import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";
import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
  authUser: true,
  isLoggingIn: false,
  isSigningUp: false,
  isCheckingAuth: true,

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const response = await axiosInstance.post("/auth/signup", data);
      console.log("Signup response:", response);
      set({ authUser: response.data });
      toast.success("Signup successfully!");
    } catch (error) {
      console.error("Signup error:", error);
      set({ isSigningUp: false });
      toast.error("Signup failed. Please try again.");
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const response = await axiosInstance.post("/auth/login", data);
      set({ authUser: response.data });
      toast.success("Login successfully!");
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
      toast.success("Logout successfully!");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed. Please try again.");
    }
  },
  checkAuth: async () => {
    try {
      const response = await axiosInstance.get("/auth/check");
      console.log(response);
      set({ authUser: response.data });
    } catch (error) {
      console.error("Check auth error:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
