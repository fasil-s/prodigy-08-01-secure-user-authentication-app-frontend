import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const email = localStorage.getItem("resetEmail");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();
    if (res.ok) {
      navigate("/reset-password");
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-white to-purple-300 px-4">
      <h1 className="text-3xl font-bold mb-4">Verify OTP</h1>
      <form
        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="otp" className="text-sm font-bold text-gray-700 mb-2 block">
            Enter the OTP sent to your email
          </label>
          <input
            type="text"
            id="otp"
            className="w-full py-2 px-3 border rounded-full text-gray-700 shadow focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Verify OTP
        </button>
        {message && <p className="text-red-500 mt-2 text-sm">{message}</p>}
      </form>
    </div>
  );
}
