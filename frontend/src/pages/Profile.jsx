import { motion } from "framer-motion";
import { User, Package, Heart, Gift, LogOut } from "lucide-react";
import { useRentalBag } from "../context/RentalBagContext";

export default function Profile() {
  const { rewardPoints } = useRentalBag();

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-10"
      >
        <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
          R
        </div>
        <div>
          <h1 className="text-xl font-bold text-navy dark:text-cream">Reader</h1>
          <p className="text-navy/60 dark:text-cream/60 text-sm">reader@example.com</p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-4">
        <ProfileCard icon={Package} title="Active Rentals" value="2" />
        <ProfileCard icon={Heart} title="Wishlist" value="5" />
        <ProfileCard icon={Gift} title="Reward Points" value={rewardPoints} />
        <ProfileCard icon={User} title="Rental History" value="12" />
      </div>

      <button className="flex items-center gap-2 text-red-500 mt-10 text-sm font-medium">
        <LogOut size={16} /> Logout
      </button>
    </div>
  );
}

function ProfileCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-white dark:bg-navy-light rounded-2xl p-5 shadow-card">
      <Icon className="text-orange mb-3" size={20} />
      <p className="text-2xl font-bold text-navy dark:text-cream">{value}</p>
      <p className="text-xs text-navy/50 dark:text-cream/50">{title}</p>
    </div>
  );
}

