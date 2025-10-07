"use client";

import { motion } from "framer-motion";
import { ChartBar as BarChart3, Calendar, Download, Filter, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const bookingsByMonth = [
  { month: "Jan", bookings: 145, revenue: 42000 },
  { month: "Feb", bookings: 165, revenue: 48000 },
  { month: "Mar", bookings: 185, revenue: 55000 },
  { month: "Apr", bookings: 172, revenue: 51000 },
  { month: "May", bookings: 205, revenue: 62000 },
  { month: "Jun", bookings: 220, revenue: 68000 },
];

const bookingsBySource = [
  { name: "Direct", value: 320, color: "#3b82f6" },
  { name: "Booking.com", value: 280, color: "#06b6d4" },
  { name: "Goibibo", value: 210, color: "#10b981" },
  { name: "MakeMyTrip", value: 180, color: "#f59e0b" },
  { name: "Others", value: 120, color: "#6366f1" },
];

const recentBookings = [
  {
    id: "BK2501",
    guest: "Amit Kumar",
    room: "Deluxe Room 201",
    checkIn: "2025-10-08",
    checkOut: "2025-10-10",
    amount: "₹9,000",
    source: "Direct",
    status: "confirmed",
  },
  {
    id: "BK2502",
    guest: "Priya Singh",
    room: "Suite 301",
    checkIn: "2025-10-09",
    checkOut: "2025-10-12",
    amount: "₹24,000",
    source: "Booking.com",
    status: "confirmed",
  },
  {
    id: "BK2503",
    guest: "Rahul Sharma",
    room: "Executive 202",
    checkIn: "2025-10-10",
    checkOut: "2025-10-11",
    amount: "₹6,500",
    source: "Goibibo",
    status: "pending",
  },
];

export default function BookingReportPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Booking Reports
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Comprehensive booking analytics and statistics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <Card className="border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle>Report Filters</CardTitle>
          <CardDescription>Customize your report parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Date Range</Label>
              <Select defaultValue="month">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <Label>Booking Source</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="direct">Direct</SelectItem>
                  <SelectItem value="booking">Booking.com</SelectItem>
                  <SelectItem value="goibibo">Goibibo</SelectItem>
                  <SelectItem value="makemytrip">MakeMyTrip</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: "Total Bookings",
            value: "1,110",
            change: "+12.5%",
            icon: Calendar,
            color: "from-blue-500 to-blue-600",
          },
          {
            title: "Total Revenue",
            value: "₹3,26,000",
            change: "+18.2%",
            icon: TrendingUp,
            color: "from-green-500 to-green-600",
          },
          {
            title: "Total Guests",
            value: "2,458",
            change: "+8.7%",
            icon: Users,
            color: "from-orange-500 to-orange-600",
          },
          {
            title: "Avg. Booking Value",
            value: "₹2,937",
            change: "+5.3%",
            icon: BarChart3,
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
                    <p className="text-sm text-green-600 mt-1">{stat.change}</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Bookings & Revenue Trend
            </CardTitle>
            <CardDescription>Monthly performance overview</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={bookingsByMonth}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  name="Bookings"
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="Revenue (₹)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Bookings by Source
            </CardTitle>
            <CardDescription>Distribution across channels</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={bookingsBySource}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {bookingsBySource.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
          <CardDescription>Latest booking transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Booking ID
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Guest Name
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Room
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Check-in
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Check-out
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Source
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking, index) => (
                  <motion.tr
                    key={booking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                      {booking.id}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                      {booking.guest}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                      {booking.room}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                      {booking.checkIn}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                      {booking.checkOut}
                    </td>
                    <td className="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {booking.amount}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                      {booking.source}
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        className={
                          booking.status === "confirmed"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }
                      >
                        {booking.status}
                      </Badge>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
