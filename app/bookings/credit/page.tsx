"use client";

import { motion } from "framer-motion";
import { CreditCard, CircleAlert as AlertCircle, CircleCheck as CheckCircle, Clock, DollarSign, Download, Filter, Search, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const creditTransactions = [
  {
    id: "CR001",
    bookingId: "BK2501",
    guest: "Rajesh Kumar",
    room: "Deluxe 201",
    totalAmount: "₹13,500",
    paidAmount: "₹8,000",
    pendingAmount: "₹5,500",
    dueDate: "2025-10-15",
    status: "partial",
    checkIn: "2025-10-08",
    checkOut: "2025-10-10",
  },
  {
    id: "CR002",
    bookingId: "BK2502",
    guest: "Priya Sharma",
    room: "Suite 301",
    totalAmount: "₹40,000",
    paidAmount: "₹20,000",
    pendingAmount: "₹20,000",
    dueDate: "2025-10-12",
    status: "partial",
    checkIn: "2025-10-09",
    checkOut: "2025-10-14",
  },
  {
    id: "CR003",
    bookingId: "BK2503",
    guest: "Amit Patel",
    room: "Executive 202",
    totalAmount: "₹13,000",
    paidAmount: "₹0",
    pendingAmount: "₹13,000",
    dueDate: "2025-10-10",
    status: "unpaid",
    checkIn: "2025-10-10",
    checkOut: "2025-10-12",
  },
  {
    id: "CR004",
    bookingId: "BK2490",
    guest: "Anita Singh",
    room: "Deluxe 101",
    totalAmount: "₹9,000",
    paidAmount: "₹3,000",
    pendingAmount: "₹6,000",
    dueDate: "2025-10-05",
    status: "overdue",
    checkIn: "2025-10-05",
    checkOut: "2025-10-07",
  },
];

export default function CreditReportPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Credit Report
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Track pending payments and credit transactions
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: "Total Pending",
            value: "₹44,500",
            subtitle: "15 transactions",
            icon: CreditCard,
            color: "from-red-500 to-red-600",
          },
          {
            title: "Partial Payments",
            value: "₹25,500",
            subtitle: "8 bookings",
            icon: Clock,
            color: "from-yellow-500 to-yellow-600",
          },
          {
            title: "Overdue",
            value: "₹12,000",
            subtitle: "3 accounts",
            icon: AlertCircle,
            color: "from-orange-500 to-orange-600",
          },
          {
            title: "Collected Today",
            value: "₹18,000",
            subtitle: "+15% vs yesterday",
            icon: TrendingUp,
            color: "from-green-500 to-green-600",
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

      <Card className="border-gray-200 dark:border-gray-800">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Pending Payments</CardTitle>
              <CardDescription>
                All bookings with outstanding balances
              </CardDescription>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search..." className="pl-10 w-64" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="partial">Partial Payment</SelectItem>
                  <SelectItem value="unpaid">Unpaid</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {creditTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg border-2 transition-colors ${
                transaction.status === "overdue"
                  ? "border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/20"
                  : transaction.status === "partial"
                  ? "border-yellow-300 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="outline" className="font-mono text-xs">
                      {transaction.bookingId}
                    </Badge>
                    <Badge
                      className={
                        transaction.status === "overdue"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          : transaction.status === "partial"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      }
                    >
                      {transaction.status === "overdue"
                        ? "Overdue"
                        : transaction.status === "partial"
                        ? "Partial Payment"
                        : "Unpaid"}
                    </Badge>
                    {transaction.status === "overdue" && (
                      <Badge className="bg-red-600 text-white">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Action Required
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {transaction.guest}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Room: {transaction.room}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {transaction.checkIn} to {transaction.checkOut}
                      </p>
                    </div>

                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Total Amount:</span>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                          {transaction.totalAmount}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Paid Amount:</span>
                        <span className="font-semibold text-green-600">
                          {transaction.paidAmount}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Pending:</span>
                        <span className="font-bold text-red-600">
                          {transaction.pendingAmount}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">Due Date:</span>
                        <span
                          className={`font-medium ${
                            transaction.status === "overdue"
                              ? "text-red-600"
                              : "text-gray-900 dark:text-gray-100"
                          }`}
                        >
                          {transaction.dueDate}
                        </span>
                      </div>
                      {transaction.paidAmount !== "₹0" && (
                        <div className="text-sm">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-gray-600 dark:text-gray-400">
                              Payment Progress:
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                              style={{
                                width: `${
                                  (parseFloat(transaction.paidAmount.replace(/[₹,]/g, "")) /
                                    parseFloat(transaction.totalAmount.replace(/[₹,]/g, ""))) *
                                  100
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 min-w-[140px]">
                  <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Collect Payment
                  </Button>
                  <Button variant="outline" size="sm">
                    Send Reminder
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Distribution of payment types</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { method: "Cash", amount: "₹45,000", percentage: 35, color: "bg-green-500" },
              { method: "Credit Card", amount: "₹62,000", percentage: 48, color: "bg-blue-500" },
              { method: "UPI", amount: "₹18,000", percentage: 14, color: "bg-cyan-500" },
              { method: "Bank Transfer", amount: "₹4,000", percentage: 3, color: "bg-orange-500" },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {item.method}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.amount} ({item.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full transition-all`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Collection Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Send automated payment reminders 3 days before due date
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Offer multiple payment methods for convenience
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Follow up immediately on overdue accounts
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Consider deposit requirements for advance bookings
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Maintain clear payment terms and policies
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
