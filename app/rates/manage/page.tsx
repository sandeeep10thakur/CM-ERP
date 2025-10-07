"use client";

import { motion } from "framer-motion";
import { DollarSign, Save, Calendar, TrendingUp } from "lucide-react";
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

const roomTypes = [
  { name: "Standard Room", baseRate: "₹3,500", weekendRate: "₹4,200" },
  { name: "Deluxe Room", baseRate: "₹4,500", weekendRate: "₹5,400" },
  { name: "Executive Room", baseRate: "₹6,500", weekendRate: "₹7,800" },
  { name: "Suite", baseRate: "₹8,000", weekendRate: "₹9,600" },
];

export default function RateManagementPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Rate Management
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Configure room rates and pricing strategies
          </p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
          <Save className="h-4 w-4" />
          Save All Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[
          { label: "Average Rate", value: "₹5,625", icon: DollarSign, color: "from-blue-500 to-blue-600" },
          { label: "Weekend Premium", value: "+20%", icon: TrendingUp, color: "from-green-500 to-green-600" },
          { label: "Season Peak", value: "₹7,500", icon: Calendar, color: "from-orange-500 to-orange-600" },
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
            <CardTitle>Room Type Rates</CardTitle>
            <CardDescription>
              Set base rates for each room type
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {roomTypes.map((room, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-semibold">{room.name}</Label>
                  <Badge variant="outline">Active</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs text-gray-500">Weekday Rate</Label>
                    <Input defaultValue={room.baseRate} />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-gray-500">Weekend Rate</Label>
                    <Input defaultValue={room.weekendRate} />
                  </div>
                </div>
                {index < roomTypes.length - 1 && (
                  <div className="h-px bg-gray-200 dark:bg-gray-800" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Seasonal Pricing</CardTitle>
              <CardDescription>
                Configure rates for different seasons
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Season Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="peak">Peak Season</SelectItem>
                    <SelectItem value="high">High Season</SelectItem>
                    <SelectItem value="regular">Regular Season</SelectItem>
                    <SelectItem value="low">Low Season</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Price Adjustment</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select adjustment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+30">+30% Increase</SelectItem>
                    <SelectItem value="+20">+20% Increase</SelectItem>
                    <SelectItem value="+10">+10% Increase</SelectItem>
                    <SelectItem value="0">No Change</SelectItem>
                    <SelectItem value="-10">-10% Discount</SelectItem>
                    <SelectItem value="-20">-20% Discount</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">Add Season Rate</Button>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                View Rate Calendar
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="mr-2 h-4 w-4" />
                Copy Rates to Date Range
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="mr-2 h-4 w-4" />
                Bulk Update Rates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-gray-200 dark:border-gray-800">
        <CardHeader>
          <CardTitle>OTA Channel Rates</CardTitle>
          <CardDescription>
            Manage rates for online travel agencies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Booking.com", commission: "15%", status: "active" },
              { name: "Goibibo", commission: "12%", status: "active" },
              { name: "MakeMyTrip", commission: "18%", status: "active" },
              { name: "Airbnb", commission: "14%", status: "inactive" },
              { name: "Expedia", commission: "20%", status: "active" },
              { name: "Agoda", commission: "15%", status: "inactive" },
            ].map((ota, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {ota.name}
                  </p>
                  <Badge
                    className={
                      ota.status === "active"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    }
                  >
                    {ota.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Commission: {ota.commission}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Configure Rates
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
