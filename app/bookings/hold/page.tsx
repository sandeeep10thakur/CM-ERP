"use client";

import { motion } from "framer-motion";
import { Clock, Users, Mail, Phone, Calendar, Hotel, CircleAlert as AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const holdBookings = [
  {
    id: "HB001",
    guest: "Rajesh Kumar",
    phone: "+91 98765 43210",
    room: "Deluxe Room",
    checkIn: "2025-10-15",
    holdUntil: "2025-10-12",
    status: "active",
  },
  {
    id: "HB002",
    guest: "Priya Sharma",
    phone: "+91 87654 32109",
    room: "Suite",
    checkIn: "2025-10-18",
    holdUntil: "2025-10-14",
    status: "active",
  },
  {
    id: "HB003",
    guest: "Amit Patel",
    phone: "+91 76543 21098",
    room: "Executive Room",
    checkIn: "2025-10-20",
    holdUntil: "2025-10-10",
    status: "expired",
  },
];

export default function HoldBookingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Hold Booking
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Temporarily reserve rooms for potential guests
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-600" />
                Create Hold Booking
              </CardTitle>
              <CardDescription>
                Reserve a room temporarily without full payment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hold-guest-name">Guest Name *</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="hold-guest-name"
                      placeholder="Enter guest name"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hold-phone">Phone Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="hold-phone"
                      placeholder="+91 98765 43210"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hold-email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="hold-email"
                    type="email"
                    placeholder="guest@example.com"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="h-px bg-gray-200 dark:bg-gray-800" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hold-check-in">Check-in Date *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="hold-check-in"
                      type="date"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hold-check-out">Check-out Date *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="hold-check-out"
                      type="date"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hold-room-type">Room Type *</Label>
                  <Select>
                    <SelectTrigger id="hold-room-type">
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deluxe">Deluxe Room</SelectItem>
                      <SelectItem value="suite">Suite</SelectItem>
                      <SelectItem value="executive">Executive Room</SelectItem>
                      <SelectItem value="standard">Standard Room</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hold-until">Hold Until Date *</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="hold-until"
                      type="date"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hold-notes">Notes / Reason for Hold</Label>
                <Textarea
                  id="hold-notes"
                  placeholder="Add any notes about this hold booking..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                  <Clock className="mr-2 h-4 w-4" />
                  Create Hold
                </Button>
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-gray-200 dark:border-gray-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                Hold Booking Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  Hold bookings are temporary reservations
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  Must be confirmed before hold expiry date
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  Room is blocked for other bookings during hold
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  Automatically releases after expiry
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  No payment required for hold
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Active Holds
                </span>
                <span className="text-2xl font-bold text-orange-600">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Expiring Today
                </span>
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Confirmed
                </span>
                <span className="text-2xl font-bold text-green-600">8</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hotel className="h-5 w-5 text-blue-600" />
            Current Hold Bookings
          </CardTitle>
          <CardDescription>
            Manage all temporary room reservations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {holdBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className="font-mono text-xs"
                      >
                        {booking.id}
                      </Badge>
                      <Badge
                        className={
                          booking.status === "active"
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        }
                      >
                        {booking.status === "active" ? "Active" : "Expired"}
                      </Badge>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {booking.guest}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {booking.phone}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Hotel className="h-4 w-4" />
                        {booking.room}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Check-in: {booking.checkIn}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Hold until: {booking.holdUntil}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    >
                      Confirm Booking
                    </Button>
                    <Button size="sm" variant="outline">
                      Extend Hold
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      Release
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
