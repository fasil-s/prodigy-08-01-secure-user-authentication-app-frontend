import { Lock, Mail, User } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-white to-purple-300 px-4">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <form className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <div className="flex items-center border rounded-full px-3 shadow focus-within:ring focus-within:ring-blue-300">
            <User className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="text"
              id="username"
              className="w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none bg-transparent"
              placeholder="Username"
            />
          </div>
        </div>

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
              type="password"
              id="password"
              className="w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none bg-transparent"
              placeholder="Password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 hover:text-blue-700">
          Log in
        </a>
      </p>
    </div>
  );
}