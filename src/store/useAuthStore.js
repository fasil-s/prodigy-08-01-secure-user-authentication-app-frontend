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

      set({ authUser: response.data });
    } catch (error) {
      console.error("Check auth error:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  forgotPassword: async (email) => {
    try {
      const response = await axiosInstance.post("/auth/forgot-password", {
        email,
      });
      toast.success(response.data.message || "Reset link sent to your email!");
    } catch (error) {
      console.error("Forgot password error:", error);
      toast.error(
        error?.response?.data?.message || "Failed to send reset link."
      );
    }
  },

  verifyResetToken: async (token) => {
    try {
      const response = await axiosInstance.get(`/auth/reset-password/${token}`);
      toast.success(response.data.message || "Token is valid.");
      return true;
    } catch (error) {
      console.error("Verify token error:", error);
      toast.error(
        error?.response?.data?.message || "Invalid or expired token."
      );
      return false;
    }
  },

  resetPassword: async ({ token, newPassword }) => {
    try {
      const response = await axiosInstance.post(
        `/auth/reset-password/${token}`,
        {
          newPassword,
        }
      );
      toast.success(response.data.message || "Password reset successfully!");
    } catch (error) {
      console.error("Reset password error:", error);
      toast.error(error?.response?.data?.message || "Password reset failed.");
    }
  },
}));
