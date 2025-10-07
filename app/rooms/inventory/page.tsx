"use client";

import { motion } from "framer-motion";
import { Hotel, Search, Filter, Plus, CreditCard as Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const rooms = [
  { number: "101", type: "Deluxe", floor: 1, capacity: 2, rate: "₹4,500", status: "available" },
  { number: "102", type: "Deluxe", floor: 1, capacity: 2, rate: "₹4,500", status: "occupied" },
  { number: "103", type: "Suite", floor: 1, capacity: 4, rate: "₹8,000", status: "cleaning" },
  { number: "201", type: "Executive", floor: 2, capacity: 3, rate: "₹6,500", status: "available" },
  { number: "202", type: "Executive", floor: 2, capacity: 3, rate: "₹6,500", status: "occupied" },
  { number: "203", type: "Standard", floor: 2, capacity: 2, rate: "₹3,500", status: "maintenance" },
  { number: "301", type: "Suite", floor: 3, capacity: 4, rate: "₹8,000", status: "available" },
  { number: "302", type: "Deluxe", floor: 3, capacity: 2, rate: "₹4,500", status: "occupied" },
  { number: "303", type: "Executive", floor: 3, capacity: 3, rate: "₹6,500", status: "available" },
];

const statusColors = {
  available: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  occupied: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  cleaning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  maintenance: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

export default function RoomInventoryPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Room Inventory
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage all rooms and their current status
          </p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
          <Plus className="h-4 w-4" />
          Add New Room
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Rooms", value: "100", color: "from-blue-500 to-blue-600" },
          { label: "Available", value: "45", color: "from-green-500 to-green-600" },
          { label: "Occupied", value: "42", color: "from-orange-500 to-orange-600" },
          { label: "Maintenance", value: "13", color: "from-red-500 to-red-600" },
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
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                  >
                    <Hotel className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="border-gray-200 dark:border-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Rooms</CardTitle>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search rooms..."
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-gray-900">
                  <TableHead className="font-semibold">Room Number</TableHead>
                  <TableHead className="font-semibold">Type</TableHead>
                  <TableHead className="font-semibold">Floor</TableHead>
                  <TableHead className="font-semibold">Capacity</TableHead>
                  <TableHead className="font-semibold">Base Rate</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rooms.map((room, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900/50"
                  >
                    <TableCell className="font-medium">{room.number}</TableCell>
                    <TableCell>{room.type}</TableCell>
                    <TableCell>{room.floor}</TableCell>
                    <TableCell>{room.capacity} guests</TableCell>
                    <TableCell>{room.rate}</TableCell>
                    <TableCell>
                      <Badge
                        className={statusColors[room.status as keyof typeof statusColors]}
                      >
                        {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
