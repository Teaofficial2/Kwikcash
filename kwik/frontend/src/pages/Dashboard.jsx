import React from "react";
import SurveyLinks from "../components/SurveyLinks";

export default function Dashboard() {
  // Placeholder user data
  const user = { id: "user123", balance: 3.50 };

  return (
    <div>
      <div className="bg-white rounded-xl shadow p-4 mb-6 flex items-center justify-between">
        <div>
          <div className="text-gray-500 text-sm">Balance</div>
          <div className="font-bold text-3xl text-green-600">${user.balance.toFixed(2)}</div>
        </div>
        <img src="/logo192.png" alt="kwikcashñ" className="w-14 h-14" />
      </div>
      <h2 className="font-bold text-lg mb-2">Earn by completing surveys</h2>
      <SurveyLinks userId={user.id} />
    </div>
  );
}