import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, PackageCheck, Warehouse, Truck, Home } from "lucide-react";

const statuses = [
  { key: "confirmed", label: "Order Confirmed", icon: CheckCircle2 },
  { key: "packed", label: "Packed", icon: PackageCheck },
  { key: "dispatched", label: "Dispatched from Warehouse", icon: Warehouse },
  { key: "outfordelivery", label: "Out for Delivery", icon: Truck },
  { key: "delivered", label: "Delivered", icon: Home },
];

export default function OrderTracking() {
  const [currentStep] = useState(2); // demo: simulate live tracking

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-16">
      <h1 className="text-2xl font-bold text-navy dark:text-cream mb-2">Track Your Order</h1>
      <p className="text-navy/60 dark:text-cream/60 mb-10">Order #ROR20260811 — 2 books</p>

      <div className="relative">
        {statuses.map((status, i) => {
          const isDone = i <= currentStep;
          return (
            <motion.div
              key={status.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-4 pb-10 relative"
            >
              {i !== statuses.length - 1 && (
                <div
                  className={`absolute left-[19px] top-10 w-0.5 h-full ${
                    isDone ? "bg-orange" : "bg-navy/10 dark:bg-cream/10"
                  }`}
                />
              )}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                  isDone ? "bg-orange text-white" : "bg-navy/10 dark:bg-cream/10 text-navy/40 dark:text-cream/40"
                }`}
              >
                <status.icon size={18} />
              </div>
              <div>
                <p className={`font-semibold ${isDone ? "text-navy dark:text-cream" : "text-navy/40 dark:text-cream/40"}`}>
                  {status.label}
                </p>
                {isDone && (
                  <p className="text-xs text-navy/50 dark:text-cream/50">
                    Completed
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

