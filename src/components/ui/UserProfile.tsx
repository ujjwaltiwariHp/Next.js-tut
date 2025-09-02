"use client";
import { User, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function UserProfile() {
  const [user] = useState({
    name: "Ujjwa Tiwari",
    email: "dazacramp@gmail",
    location: "Noida, India",
    phone: "+918222074647",
    joinDate: "August 2025",
    orders: 15,
    points: 2840,
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 animate-fadeIn">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-2 text-gray-500" />
          {user.phone}
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2 text-gray-500" />
          {user.location}
        </div>
        <div className="flex items-center">
          <User className="w-4 h-4 mr-2 text-gray-500" />
          Member since {user.joinDate}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="text-center">
          <div className="text-lg font-bold text-blue-600">{user.orders}</div>
          <div className="text-xs text-gray-500">Orders</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-green-600">{user.points}</div>
          <div className="text-xs text-gray-500">Points</div>
        </div>
      </div>

      <div className="flex justify-center mt-5 gap-3">
        <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-s">
          Orders
        </button>
      </div>
    </div>
  );
}
