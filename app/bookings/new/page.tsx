"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Mail, Phone, Globe, MessageSquare } from "lucide-react";
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

export default function NewBookingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Make A Reservation
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Create a new booking for your hotel
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Booking Information</CardTitle>
              <CardDescription>Enter guest and reservation details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="guest-name">Guest Name *</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="guest-name"
                      placeholder="Enter full name"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guest-email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="guest-email"
                      type="email"
                      placeholder="guest@example.com"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="guest-phone">Phone Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="guest-phone"
                      placeholder="+91 98765 43210"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guest-country">Country</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="guest-country"
                      placeholder="India"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-200 dark:bg-gray-800" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="check-in">Check-in Date *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="check-in"
                      type="date"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="check-out">Check-out Date *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="check-out"
                      type="date"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="room-type">Room Type *</Label>
                  <Select>
                    <SelectTrigger id="room-type">
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
                  <Label htmlFor="adults">Adults *</Label>
                  <Input id="adults" type="number" defaultValue="2" min="1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="children">Children</Label>
                  <Input id="children" type="number" defaultValue="0" min="0" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="booking-source">Booking Source *</Label>
                <Select>
                  <SelectTrigger id="booking-source">
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="direct">Direct Booking</SelectItem>
                    <SelectItem value="booking">Booking.com</SelectItem>
                    <SelectItem value="goibibo">Goibibo</SelectItem>
                    <SelectItem value="makemytrip">MakeMyTrip</SelectItem>
                    <SelectItem value="airbnb">Airbnb</SelectItem>
                    <SelectItem value="expedia">Expedia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="special-requests">Special Requests</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Textarea
                    id="special-requests"
                    placeholder="Any special requirements or requests..."
                    className="pl-10 min-h-[100px]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Room Type:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Deluxe Room</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Nights:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">3 nights</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Rate per night:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">₹4,500</span>
                </div>
                <div className="h-px bg-gray-200 dark:bg-gray-800" />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">₹13,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Tax (12%):</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">₹1,620</span>
                </div>
                <div className="h-px bg-gray-200 dark:bg-gray-800" />
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Total:</span>
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">₹15,120</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="payment-method">Payment Method *</Label>
                <Select>
                  <SelectTrigger id="payment-method">
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="card">Credit/Debit Card</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="wallet">Digital Wallet</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="paid-amount">Amount Paid</Label>
                <Input
                  id="paid-amount"
                  type="number"
                  placeholder="0.00"
                  defaultValue="0"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              Confirm Booking
            </Button>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
