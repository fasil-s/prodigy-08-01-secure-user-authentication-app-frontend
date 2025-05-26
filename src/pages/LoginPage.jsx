import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuthStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-white to-purple-300 px-4">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form
        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <div className="flex items-center border rounded-full px-3 shadow focus-within:ring focus-within:ring-blue-300">
            <Mail className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="email"
              id="email"
              className="w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none bg-transparent"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="flex items-center border rounded-full px-3 shadow focus-within:ring focus-within:ring-blue-300">
            <Lock className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none bg-transparent"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <a
          href="/forgot-password"
          className="text-sm text-blue-500 hover:text-blue-700 mb-4 block text-right"
        >
          Forgot password?
        </a>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
        >
          Sign up
        </button>
      </form>

      <p className="mt-4 text-gray-600">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="text-blue-500 hover:text-blue-700">
          signup
        </Link>
      </p>
    </div>
  );
}
