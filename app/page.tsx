"use client";

import { motion } from "framer-motion";
import { Calendar, Users, DollarSign, Hotel, TrendingUp, ArrowUpRight, ArrowDownRight, Clock, CircleAlert as AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const statsData = [
  {
    title: "Today's Bookings",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: Calendar,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Check-ins Today",
    value: "18",
    change: "+8%",
    trend: "up",
    icon: Users,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Check-outs Today",
    value: "15",
    change: "-5%",
    trend: "down",
    icon: Clock,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Today's Earnings",
    value: "₹45,280",
    change: "+23%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-emerald-600",
  },
];

const revenueData = [
  { month: "Jan", revenue: 42000, bookings: 145 },
  { month: "Feb", revenue: 48000, bookings: 165 },
  { month: "Mar", revenue: 55000, bookings: 185 },
  { month: "Apr", revenue: 51000, bookings: 172 },
  { month: "May", revenue: 62000, bookings: 205 },
  { month: "Jun", revenue: 68000, bookings: 220 },
];

const occupancyData = [
  { day: "Mon", occupied: 85, available: 15 },
  { day: "Tue", occupied: 90, available: 10 },
  { day: "Wed", occupied: 88, available: 12 },
  { day: "Thu", occupied: 92, available: 8 },
  { day: "Fri", occupied: 95, available: 5 },
  { day: "Sat", occupied: 98, available: 2 },
  { day: "Sun", occupied: 87, available: 13 },
];

const systemUpdates = [
  { title: "New OTA Integration Available", time: "2 hours ago", type: "info" },
  { title: "Monthly Report Generated", time: "5 hours ago", type: "success" },
  { title: "System Maintenance Scheduled", time: "1 day ago", type: "warning" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Dashboard Overview
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Welcome back! Here's what's happening with your hotel today.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Hotel className="h-4 w-4" />
            Room Status
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
            <Calendar className="h-4 w-4" />
            Quick Reservation
          </Button>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </CardTitle>
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {stat.value}
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        {stat.trend === "up" ? (
                          <ArrowUpRight className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-600" />
                        )}
                        <span
                          className={`text-sm font-medium ${
                            stat.trend === "up" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {stat.change}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          vs last week
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Monthly Revenue & Bookings
              </CardTitle>
              <CardDescription>
                Track your hotel's performance over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
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
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: "#3b82f6", r: 4 }}
                    name="Revenue (₹)"
                  />
                  <Line
                    type="monotone"
                    dataKey="bookings"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    dot={{ fill: "#06b6d4", r: 4 }}
                    name="Bookings"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                System Updates
              </CardTitle>
              <CardDescription>Latest notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemUpdates.map((update, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        update.type === "success"
                          ? "bg-green-500"
                          : update.type === "warning"
                          ? "bg-orange-500"
                          : "bg-blue-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {update.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {update.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hotel className="h-5 w-5 text-green-600" />
                Weekly Occupancy Rate
              </CardTitle>
              <CardDescription>Room occupancy for the current week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={occupancyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="occupied" fill="#22c55e" name="Occupied Rooms" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="available" fill="#94a3b8" name="Available Rooms" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <Card className="border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
            <CardHeader>
              <CardTitle>Today's Task</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                All tasks completed for today! Great job managing your hotel operations.
              </p>
              <Button variant="outline" className="mt-4">
                View All Tasks
              </Button>
            </CardContent>
          </Card>

          <Card className="border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                Booking Alert
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                No bookings for the next 3 days. Consider running a promotion to boost occupancy.
              </p>
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                Click Here to Get More Bookings
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
