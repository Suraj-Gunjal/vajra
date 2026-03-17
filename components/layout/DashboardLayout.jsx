"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { motion } from "framer-motion";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className="flex min-h-screen w-full relative "
      style={{ background: "#0A0F1C" }}
    >
      <Sidebar
        mobileOpen={sidebarOpen}
        setMobileOpen={setSidebarOpen}
        collapsed={isCollapsed}
        setCollapsed={setIsCollapsed}
      />

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 dashboard-main lg:pl-72 ${isCollapsed ? "collapsed" : ""}`}
      >
        <TopNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-4 sm:p-6 dot-grid overflow-x-hidden"
        >
          <div className="max-w-[1400px] mx-auto w-full">{children}</div>
        </motion.main>
      </div>
    </div>
  );
}
