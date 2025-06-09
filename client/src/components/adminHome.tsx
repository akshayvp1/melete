import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  UserPlus, 
  Settings, 
  Bell, 
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Star,
  Clock,
  MapPin,
  Phone
} from 'lucide-react';

interface Consultant {
  id: number;
  name: string;
  qualification: string;
  expertise: string[];
  languages: string[];
  experience: string;
  rating: number;
  sessions: number;
  status: 'Active' | 'Inactive' | 'Pending';
  joinDate: string;
  location: string;
  image: string;
}

const AdminHome: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // Sample consultant data
  const consultants: Consultant[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      qualification: "Ph.D. in Clinical Psychology",
      expertise: ["Anxiety", "Depression", "Stress Management"],
      languages: ["English", "Spanish"],
      experience: "8+ Years",
      rating: 4.9,
      sessions: 1200,
      status: 'Active',
      joinDate: '2022-01-15',
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&face&auto=format"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      qualification: "M.D. Psychiatrist",
      expertise: ["PTSD", "Bipolar Disorder", "Trauma Recovery"],
      languages: ["English", "Mandarin"],
      experience: "12+ Years",
      rating: 4.8,
      sessions: 2100,
      status: 'Active',
      joinDate: '2021-08-20',
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&face&auto=format"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      qualification: "M.A. in Marriage & Family Therapy",
      expertise: ["Relationship Issues", "Family Conflicts"],
      languages: ["English", "Spanish", "Portuguese"],
      experience: "6+ Years",
      rating: 4.9,
      sessions: 850,
      status: 'Pending',
      joinDate: '2023-03-10',
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1594824750514-38bee4c4ce13?w=300&h=300&fit=crop&face&auto=format"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      qualification: "Ph.D. in Child Psychology",
      expertise: ["Child Development", "ADHD"],
      languages: ["English", "French"],
      experience: "10+ Years",
      rating: 4.7,
      sessions: 1600,
      status: 'Inactive',
      joinDate: '2020-11-05',
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&face&auto=format"
    }
  ];

  // Dashboard stats
  const dashboardStats = [
    {
      title: "Total Counsellors",
      value: consultants.length.toString(),
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "Active Sessions",
      value: "342",
      change: "+8%",
      trend: "up",
      icon: Calendar,
      color: "bg-[#015F4A]"
    },
    {
      title: "Total Sessions",
      value: consultants.reduce((sum, c) => sum + c.sessions, 0).toLocaleString(),
      change: "+15%",
      trend: "up",
      icon: MessageSquare,
      color: "bg-purple-500"
    },
    {
      title: "Average Rating",
      value: (consultants.reduce((sum, c) => sum + c.rating, 0) / consultants.length).toFixed(1),
      change: "+0.2",
      trend: "up",
      icon: Star,
      color: "bg-yellow-500"
    }
  ];

  const recentActivities = [
    "Dr. Sarah Johnson completed a session with Patient #1234",
    "New counsellor Dr. Emily Rodriguez submitted application",
    "Dr. Michael Chen updated availability schedule",
    "Weekly report generated successfully",
    "System maintenance completed"
  ];

  const filteredConsultants = consultants.filter(consultant => {
    const matchesSearch = consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultant.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'All' || consultant.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-[#015F4A]">Admin Dashboard</h1>
              <p className="text-gray-600 text-sm">Manage counsellors and monitor platform activity</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-500 hover:text-[#015F4A] transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-[#015F4A] transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-[#015F4A] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                A
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                      <span className="text-gray-500 text-sm ml-1">vs last month</span>
                    </div>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Counsellors Management */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-[#015F4A]">Counsellors Management</h2>
                  <button 
                    onClick={() => setShowAddModal(true)}
                    className="bg-[#015F4A] text-white px-4 py-2 rounded-lg hover:bg-[#017A5E] transition-colors flex items-center gap-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    Add Counsellor
                  </button>
                </div>
                
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search counsellors..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#015F4A] focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <select
                      className="border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#015F4A] focus:border-transparent"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="All">All Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Counsellors List */}
              <div className="divide-y divide-gray-100">
                {filteredConsultants.map((consultant) => (
                  <div key={consultant.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={consultant.image}
                          alt={consultant.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">{consultant.name}</h3>
                          <p className="text-sm text-gray-600">{consultant.qualification}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center text-xs text-gray-500">
                              <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                              {consultant.rating}
                            </div>
                            <div className="flex items-center text-xs text-gray-500">
                              <Calendar className="w-3 h-3 mr-1" />
                              {consultant.sessions} sessions
                            </div>
                            <div className="flex items-center text-xs text-gray-500">
                              <MapPin className="w-3 h-3 mr-1" />
                              {consultant.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(consultant.status)}`}>
                          {consultant.status}
                        </span>
                        <div className="flex items-center gap-1">
                          <button className="p-1 text-gray-400 hover:text-[#015F4A] transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-[#015F4A] mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#015F4A] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">{activity}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-[#015F4A] mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <UserPlus className="w-4 h-4 text-[#015F4A]" />
                    <span className="text-sm font-medium">Add New Counsellor</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-[#015F4A]" />
                    <span className="text-sm font-medium">View All Sessions</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-4 h-4 text-[#015F4A]" />
                    <span className="text-sm font-medium">Generate Report</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;