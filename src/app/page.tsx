"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Car,
  Clock,
  Users,
  MapPin,
  MessageSquare,
  User,
  Bell,
  Leaf,
  Star,
  Navigation,
} from "lucide-react";

const CarpoolPlatform = () => {
  const [activeTab, setActiveTab] = useState("search");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const demoRides = [
    {
      from: "Westlands",
      to: "CBD",
      driver: "John K.",
      time: "7:30 AM",
      price: "KSH 200",
      seats: 3,
      rating: 4.8,
      verified: true,
      carbonSaved: "2.5kg",
      distance: "12km",
    },
    {
      from: "Kiambu Road",
      to: "Industrial Area",
      driver: "Sarah M.",
      time: "8:00 AM",
      price: "KSH 250",
      seats: 2,
      rating: 4.9,
      verified: true,
      carbonSaved: "3.2kg",
      distance: "15km",
    },
  ];

  const notifications = [
    "New ride match found for your daily route!",
    "David M. rated your last ride 5 stars",
    "Upcoming ride in 2 hours",
  ];

  const messages = [
    { sender: "Alice W.", message: "I'll be at the pickup point in 5 mins" },
    { sender: "Tom K.", message: "Is tomorrow's ride still on?" },
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="space-y-1 bg-green-50">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Car className="w-6 h-6" />
            Twende Carpool
          </CardTitle>
          <div className="flex gap-4">
            <button
              className="relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                3
              </span>
            </button>
            <button
              className="relative"
              onClick={() => setShowMessages(!showMessages)}
            >
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                2
              </span>
            </button>
            <button>
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>

        {showNotifications && (
          <div className="absolute right-8 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
            <h3 className="font-semibold mb-2">Notifications</h3>
            {notifications.map((notif, i) => (
              <div
                key={i}
                className="p-2 hover:bg-gray-50 rounded cursor-pointer text-sm"
              >
                {notif}
              </div>
            ))}
          </div>
        )}

        {showMessages && (
          <div className="absolute right-8 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
            <h3 className="font-semibold mb-2">Messages</h3>
            {messages.map((msg, i) => (
              <div
                key={i}
                className="p-2 hover:bg-gray-50 rounded cursor-pointer"
              >
                <div className="font-medium text-sm">{msg.sender}</div>
                <div className="text-sm text-gray-600">{msg.message}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === "search" ? "bg-green-600 text-white" : "bg-white"}`}
            onClick={() => setActiveTab("search")}
          >
            Find Ride
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === "schedule" ? "bg-green-600 text-white" : "bg-white"}`}
            onClick={() => setActiveTab("schedule")}
          >
            Schedule Ride
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === "offer" ? "bg-green-600 text-white" : "bg-white"}`}
            onClick={() => setActiveTab("offer")}
          >
            Offer Ride
          </button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">From</label>
            <div className="flex items-center gap-2 p-2 border rounded-lg">
              <MapPin className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Pick-up location"
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">To</label>
            <div className="flex items-center gap-2 p-2 border rounded-lg">
              <MapPin className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Destination"
                className="w-full outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 px-4">
          <div className="flex-1">
            <input
              type="datetime-local"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2">
            <Navigation className="w-4 h-4" />
            Find Matches
          </button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-4">Available Rides</h3>
          <div className="space-y-4">
            {demoRides.map((ride, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        {ride.from} → {ride.to}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({ride.distance})
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {ride.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" /> {ride.seats} seats
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" /> {ride.rating}
                      </span>
                      <span className="flex items-center gap-1 text-green-600">
                        <Leaf className="w-4 h-4" /> {ride.carbonSaved} CO₂
                        saved
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">
                      {ride.price}
                    </div>
                    <div className="text-sm text-gray-500">per seat</div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="text-sm">Driver: {ride.driver}</div>
                    <button className="text-blue-600 text-sm flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" /> Message
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                    Book Seat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarpoolPlatform;
