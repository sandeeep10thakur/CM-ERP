"use client";

import { motion } from "framer-motion";
import { LogIn, LogOut, CircleCheck as CheckCircle, Clock, Users, Hotel, Phone, Mail, CircleAlert as AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const checkIns = [
  {
    id: "CI001",
    guest: "Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "rajesh@email.com",
    room: "Deluxe 201",
    bookingId: "BK2501",
    expectedTime: "2:00 PM",
    guests: 2,
    nights: 3,
    amount: "₹13,500",
    status: "pending",
  },
  {
    id: "CI002",
    guest: "Priya Sharma",
    phone: "+91 87654 32109",
    email: "priya@email.com",
    room: "Suite 301",
    bookingId: "BK2502",
    expectedTime: "3:30 PM",
    guests: 4,
    nights: 5,
    amount: "₹40,000",
    status: "completed",
  },
  {
    id: "CI003",
    guest: "Amit Patel",
    phone: "+91 76543 21098",
    email: "amit@email.com",
    room: "Executive 202",
    bookingId: "BK2503",
    expectedTime: "4:00 PM",
    guests: 2,
    nights: 2,
    amount: "₹13,000",
    status: "pending",
  },
];

const checkOuts = [
  {
    id: "CO001",
    guest: "Anita Singh",
    phone: "+91 98111 22333",
    email: "anita@email.com",
    room: "Deluxe 101",
    bookingId: "BK2401",
    expectedTime: "11:00 AM",
    checkInDate: "2025-10-05",
    totalAmount: "₹9,000",
    pendingAmount: "₹0",
    status: "completed",
  },
  {
    id: "CO002",
    guest: "Vikram Malhotra",
    phone: "+91 87222 11444",
    email: "vikram@email.com",
    room: "Suite 302",
    bookingId: "BK2402",
    expectedTime: "12:00 PM",
    checkInDate: "2025-10-03",
    totalAmount: "₹32,000",
    pendingAmount: "₹5,000",
    status: "pending",
  },
  {
    id: "CO003",
    guest: "Sneha Reddy",
    phone: "+91 76333 44555",
    email: "sneha@email.com",
    room: "Executive 203",
    bookingId: "BK2403",
    expectedTime: "10:30 AM",
    checkInDate: "2025-10-06",
    totalAmount: "₹6,500",
    pendingAmount: "₹0",
    status: "completed",
  },
];

export default function TodayCheckInOutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Today's Check-In & Check-Out
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage all arrivals and departures for {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: "Expected Check-ins",
            value: "18",
            subtitle: "3 pending",
            icon: LogIn,
            color: "from-green-500 to-green-600",
          },
          {
            title: "Expected Check-outs",
            value: "15",
            subtitle: "2 pending",
            icon: LogOut,
            color: "from-orange-500 to-orange-600",
          },
          {
            title: "Currently Occupied",
            value: "42",
            subtitle: "of 100 rooms",
            icon: Hotel,
            color: "from-blue-500 to-blue-600",
          },
          {
            title: "Today's Revenue",
            value: "₹45,280",
            subtitle: "+23% vs yesterday",
            icon: CheckCircle,
            color: "from-cyan-500 to-cyan-600",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-gray-200 dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {stat.subtitle}
                    </p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Tabs defaultValue="checkin" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="checkin" className="gap-2">
            <LogIn className="h-4 w-4" />
            Check-Ins
          </TabsTrigger>
          <TabsTrigger value="checkout" className="gap-2">
            <LogOut className="h-4 w-4" />
            Check-Outs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="checkin" className="space-y-4">
          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogIn className="h-5 w-5 text-green-600" />
                Today's Check-Ins
              </CardTitle>
              <CardDescription>
                Expected arrivals for today
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {checkIns.map((checkIn, index) => (
                <motion.div
                  key={checkIn.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-700 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge variant="outline" className="font-mono text-xs">
                          {checkIn.bookingId}
                        </Badge>
                        <Badge
                          className={
                            checkIn.status === "completed"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          }
                        >
                          {checkIn.status === "completed" ? "Checked In" : "Pending"}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            {checkIn.guest}
                          </p>
                          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <p className="flex items-center gap-2">
                              <Phone className="h-3 w-3" />
                              {checkIn.phone}
                            </p>
                            <p className="flex items-center gap-2">
                              <Mail className="h-3 w-3" />
                              {checkIn.email}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Room:</span>
                            <span className="font-medium text-gray-900 dark:text-gray-100">
                              {checkIn.room}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Time:</span>
                            <span className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {checkIn.expectedTime}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Guests:</span>
                            <span className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {checkIn.guests}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Nights:</span>
                            <span className="font-medium text-gray-900 dark:text-gray-100">
                              {checkIn.nights}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Amount:</span>
                            <span className="font-semibold text-green-600">
                              {checkIn.amount}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 min-w-[140px]">
                      {checkIn.status === "pending" ? (
                        <>
                          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                            Check In
                          </Button>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="outline" disabled>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Completed
                          </Button>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="checkout" className="space-y-4">
          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogOut className="h-5 w-5 text-orange-600" />
                Today's Check-Outs
              </CardTitle>
              <CardDescription>
                Expected departures for today
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {checkOuts.map((checkOut, index) => (
                <motion.div
                  key={checkOut.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge variant="outline" className="font-mono text-xs">
                          {checkOut.bookingId}
                        </Badge>
                        <Badge
                          className={
                            checkOut.status === "completed"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : checkOut.pendingAmount !== "₹0"
                              ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          }
                        >
                          {checkOut.status === "completed"
                            ? "Checked Out"
                            : checkOut.pendingAmount !== "₹0"
                            ? "Payment Pending"
                            : "Pending"}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            {checkOut.guest}
                          </p>
                          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <p className="flex items-center gap-2">
                              <Phone className="h-3 w-3" />
                              {checkOut.phone}
                            </p>
                            <p className="flex items-center gap-2">
                              <Mail className="h-3 w-3" />
                              {checkOut.email}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Room:</span>
                            <span className="font-medium text-gray-900 dark:text-gray-100">
                              {checkOut.room}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Time:</span>
                            <span className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {checkOut.expectedTime}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Check-in:</span>
                            <span className="font-medium text-gray-900 dark:text-gray-100">
                              {checkOut.checkInDate}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Total:</span>
                            <span className="font-semibold text-gray-900 dark:text-gray-100">
                              {checkOut.totalAmount}
                            </span>
                          </div>
                          {checkOut.pendingAmount !== "₹0" && (
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                <AlertCircle className="h-3 w-3 text-red-600" />
                                Pending:
                              </span>
                              <span className="font-semibold text-red-600">
                                {checkOut.pendingAmount}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 min-w-[140px]">
                      {checkOut.status === "pending" ? (
                        <>
                          <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                            Check Out
                          </Button>
                          <Button variant="outline" size="sm">
                            View Bill
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="outline" disabled>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Completed
                          </Button>
                          <Button variant="outline" size="sm">
                            View Bill
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
