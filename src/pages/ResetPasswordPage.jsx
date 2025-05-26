import { Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const email = localStorage.getItem("resetEmail");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, newPassword }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Password reset successful. Redirecting to login...");
      localStorage.removeItem("resetEmail");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-white to-purple-300 px-4">
      <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
      <form
        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="newPassword" className="text-sm font-bold text-gray-700 mb-2 block">
            New Password
          </label>
          <div className="flex items-center border rounded-full px-3 shadow focus-within:ring focus-within:ring-blue-300">
            <Lock className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="password"
              id="newPassword"
              className="w-full py-2 px-1 text-gray-700 bg-transparent focus:outline-none"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Reset Password
        </button>
        {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
      </form>
    </div>
  );
}
