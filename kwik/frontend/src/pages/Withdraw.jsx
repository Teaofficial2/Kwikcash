import React, { useState } from "react";

const methods = [
  { name: "PayPal", value: "paypal" },
  { name: "Litecoin", value: "litecoin" },
  { name: "Azteco Voucher", value: "azteco" },
];

export default function Withdraw() {
  const [method, setMethod] = useState("paypal");
  const [destination, setDestination] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleWithdraw = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");
    // API call to backend (replace with real fetch)
    setTimeout(() => setMessage("Request submitted!"), 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-bold text-lg mb-2">Withdraw Earnings</h2>
      <form onSubmit={handleWithdraw} className="flex flex-col gap-3">
        <label className="font-semibold text-gray-700">Method</label>
        <select
          className="border rounded p-2"
          value={method}
          onChange={e => setMethod(e.target.value)}
        >
          {methods.map(m => (
            <option key={m.value} value={m.value}>{m.name}</option>
          ))}
        </select>
        <label className="font-semibold text-gray-700">
          {method === "paypal" ? "PayPal Email" : method === "litecoin" ? "Litecoin Address" : "Email for Voucher"}
        </label>
        <input
          className="border rounded p-2"
          type="text"
          value={destination}
          required
          onChange={e => setDestination(e.target.value)}
        />
        <label className="font-semibold text-gray-700">Amount (USD)</label>
        <input
          className="border rounded p-2"
          type="number"
          min="1"
          step="0.01"
          value={amount}
          required
          onChange={e => setAmount(e.target.value)}
        />
        <button
          className="bg-green-600 text-white rounded p-2 font-bold mt-2"
          type="submit"
        >Request Withdrawal</button>
      </form>
      {message && <div className="mt-4 text-green-600">{message}</div>}
    </div>
  );
}