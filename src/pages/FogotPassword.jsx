import { Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("resetEmail", email);
      navigate("/verify-otp");
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-white to-purple-300 px-4">
      <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
      <form
        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2 block">
            Enter your email
          </label>
          <div className="flex items-center border rounded-full px-3 shadow focus-within:ring focus-within:ring-blue-300">
            <Mail className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="email"
              id="email"
              className="w-full py-2 px-1 text-gray-700 bg-transparent focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Send OTP
        </button>
        {message && <p className="text-red-500 mt-2 text-sm">{message}</p>}
      </form>
    </div>
  );
}
