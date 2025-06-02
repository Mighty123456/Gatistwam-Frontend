import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart, Settings, FileText } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import AnimatedElement from '../../components/ui/AnimatedElement';

const AdminDashboard: React.FC = () => {
  useEffect(() => {
    document.title = 'Admin Dashboard - Gatistwam';
  }, []);

  const stats = [
    {
      id: 1,
      title: 'Total Users',
      value: '1,234',
      icon: <Users className="w-8 h-8 text-secondary-500" />,
      change: '+12%',
    },
    {
      id: 2,
      title: 'Active Projects',
      value: '45',
      icon: <FileText className="w-8 h-8 text-secondary-500" />,
      change: '+5%',
    },
    {
      id: 3,
      title: 'Revenue',
      value: '$45,678',
      icon: <BarChart className="w-8 h-8 text-secondary-500" />,
      change: '+8%',
    },
    {
      id: 4,
      title: 'Settings',
      value: 'Updated',
      icon: <Settings className="w-8 h-8 text-secondary-500" />,
      change: '2h ago',
    },
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <AnimatedElement key={stat.id} delay={index * 100}>
              <div className="glass-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</h3>
                  </div>
                  {stat.icon}
                </div>
                <p className="text-sm text-green-500 mt-2">{stat.change}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* Add your activity items here */}
            <p className="text-gray-600 dark:text-gray-400">No recent activity to display.</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard; 