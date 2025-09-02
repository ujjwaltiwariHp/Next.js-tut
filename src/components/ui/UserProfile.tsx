"use client";
import { User, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function UserProfile() {
  const [user] = useState({
    name: "Ujjwal",
    email: "dazacramp@gmail",
    location: "Noida, India",
    phone: "+918222074648",
    joinDate: "January 2025",
    orders: 15,
    points: 2840
  });

  return (
   <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8 max-w-4xl mx-auto">
  <h2 className="text-xl font-bold mb-4 text-center">Welcome Back!</h2>

  <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
    <div className="flex-shrink-0 mb-4 md:mb-0">
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
        <User className="w-10 h-10 text-blue-600" />
      </div>
    </div>

    <div className="flex-1 text-center md:text-left space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
        <div className="flex items-center justify-center md:justify-start">
          <Mail className="w-4 h-4 mr-2" />
          {user.email}
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <Phone className="w-4 h-4 mr-2" />
          {user.phone}
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <MapPin className="w-4 h-4 mr-2" />
          {user.location}
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <User className="w-4 h-4 mr-2" />
          Member since {user.joinDate}
        </div>
      </div>
    </div>

    <div className="flex flex-row md:flex-col items-center justify-center gap-4 mt-4 md:mt-0">
      <div className="text-center">
        <div className="text-lg font-bold text-blue-600">{user.orders}</div>
        <div className="text-xs text-gray-500">Orders</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold text-green-600">{user.points}</div>
        <div className="text-xs text-gray-500">Points</div>
      </div>
    </div>
  </div>

  <div className="flex justify-center md:justify-start mt-4 space-x-3">
    <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-sm">
      View Profile
    </button>
    <button className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors text-sm">
      Order History
    </button>
  </div>
</div>
);
}