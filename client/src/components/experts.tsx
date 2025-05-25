import React from 'react';
import { Star, Users, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';

interface Consultant {
  id: number;
  name: string;
  qualification: string;
  expertise: string[];
  languages: string[];
  counseling: string[];
  experience: string;
  rating: number;
  sessions: number;
  image: string;
  specialties: string[];
  availability: string;
  location: string;
}

interface CounsellorCardProps {
  consultant: Consultant;
}

const CounsellorCard: React.FC<CounsellorCardProps> = ({ consultant }) => {
  const handleBookSession = (): void => {
    const phoneNumber = '+918943175522';
    const message = `Hello, I'm interested in booking a session with ${consultant.name}.\n\nDetails:\n- Qualification: ${consultant.qualification}\n- Expertise: ${consultant.expertise.join(', ')}\n- Languages: ${consultant.languages.join(', ')}\n- Experience: ${consultant.experience}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group max-w-sm">
      {/* Header with Image and Badge */}
      <div className="relative p-4">
        <div className="flex items-start gap-3">
          <div className="relative">
            <img
              src={consultant.image}
              alt={consultant.name}
              className="w-16 h-16 rounded-full object-cover border-3 border-[#015F4A] group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-[#015F4A] to-[#017A5E] text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow">
              {consultant.experience}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-[#015F4A] mb-1 truncate">
              {consultant.name}
            </h3>
            <p className="text-gray-600 text-xs mb-2 line-clamp-2">{consultant.qualification}</p>
            
            {/* Rating and Sessions */}
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center">
                <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                <span className="font-semibold">{consultant.rating}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Users className="w-3 h-3 mr-1" />
                <span>{consultant.sessions}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Details Section */}
      <div className="px-4 pb-4">
        {/* Expertise Tags - Show only first 2 */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {consultant.expertise.slice(0, 2).map((skill: string, i: number) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-200"
              >
                {skill}
              </span>
            ))}
            {consultant.expertise.length > 2 && (
              <span className="px-2 py-0.5 bg-gray-50 text-gray-500 text-xs rounded-full border border-gray-200">
                +{consultant.expertise.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Compact Info */}
        <div className="space-y-1.5 mb-3 text-xs text-gray-600">
          <div className="flex items-center">
            <span className="font-medium w-16">Languages:</span>
            <span className="truncate">{consultant.languages.slice(0, 2).join(', ')}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 text-gray-400 mr-1" />
            <span className="truncate text-xs">{consultant.availability}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-3 h-3 text-gray-400 mr-1" />
            <span className="truncate text-xs">{consultant.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleBookSession}
            className="flex-1 bg-gradient-to-r from-[#015F4A] to-[#017A5E] text-white py-2 px-3 rounded-lg text-sm font-semibold hover:shadow-md transition-all duration-300 flex items-center justify-center"
          >
            <MessageCircle className="w-3 h-3 mr-1" />
            Book
          </button>
          <button className="px-3 py-2 border-2 border-[#015F4A] text-[#015F4A] rounded-lg hover:bg-[#015F4A] hover:text-white transition-all duration-300">
            <Phone className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Complete Expert Component with optimized cards
const ExpertCounsellorsComponent: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = React.useState<string>('All');
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const consultants: Consultant[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      qualification: "Ph.D. in Clinical Psychology",
      expertise: ["Anxiety", "Depression", "Stress Management"],
      languages: ["English", "Spanish"],
      counseling: ["Individual", "Group Therapy"],
      experience: "8+ Years",
      rating: 4.9,
      sessions: 1200,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&face&auto=format",
      specialties: ["Cognitive Behavioral Therapy", "Mindfulness-Based Therapy"],
      availability: "Mon-Fri, 9AM-6PM",
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      qualification: "M.D. Psychiatrist",
      expertise: ["PTSD", "Bipolar Disorder", "Trauma Recovery"],
      languages: ["English", "Mandarin"],
      counseling: ["Individual", "Family Therapy"],
      experience: "12+ Years",
      rating: 4.8,
      sessions: 2100,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&face&auto=format",
      specialties: ["Psychiatric Evaluation", "Medication Management"],
      availability: "Tue-Sat, 10AM-7PM",
      location: "San Francisco, CA"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      qualification: "M.A. in Marriage & Family Therapy",
      expertise: ["Relationship Issues", "Family Conflicts", "Communication"],
      languages: ["English", "Spanish", "Portuguese"],
      counseling: ["Couples", "Family", "Individual"],
      experience: "6+ Years",
      rating: 4.9,
      sessions: 850,
      image: "https://images.unsplash.com/photo-1594824750514-38bee4c4ce13?w=300&h=300&fit=crop&face&auto=format",
      specialties: ["Gottman Method", "Emotionally Focused Therapy"],
      availability: "Mon-Thu, 2PM-8PM",
      location: "Miami, FL"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      qualification: "Ph.D. in Child Psychology",
      expertise: ["Child Development", "ADHD", "Autism Spectrum"],
      languages: ["English", "French"],
      counseling: ["Child", "Adolescent", "Parent Coaching"],
      experience: "10+ Years",
      rating: 4.7,
      sessions: 1600,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&face&auto=format",
      specialties: ["Play Therapy", "Behavioral Interventions"],
      availability: "Wed-Sun, 9AM-5PM",
      location: "Chicago, IL"
    },
    {
      id: 5,
      name: "Dr. Priya Sharma",
      qualification: "M.Sc. in Counseling Psychology",
      expertise: ["Career Counseling", "Life Transitions", "Self-Esteem"],
      languages: ["English", "Hindi", "Gujarati"],
      counseling: ["Individual", "Group", "Career Coaching"],
      experience: "7+ Years",
      rating: 4.8,
      sessions: 950,
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&face&auto=format",
      specialties: ["Solution-Focused Therapy", "Career Development"],
      availability: "Mon-Fri, 11AM-7PM",
      location: "Toronto, ON"
    },
    {
      id: 6,
      name: "Dr. Robert Martinez",
      qualification: "Ph.D. in Addiction Psychology",
      expertise: ["Substance Abuse", "Addiction Recovery", "Relapse Prevention"],
      languages: ["English", "Spanish"],
      counseling: ["Individual", "Group", "12-Step Programs"],
      experience: "15+ Years",
      rating: 4.9,
      sessions: 2800,
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop&face&auto=format",
      specialties: ["Motivational Interviewing", "Relapse Prevention"],
      availability: "Daily, 8AM-8PM",
      location: "Los Angeles, CA"
    }
  ];

  const specialtyFilters: string[] = ["All", "Anxiety", "Depression", "PTSD", "Relationships", "Child Psychology", "Addiction"];

  const filteredConsultants = consultants.filter((consultant: Consultant) => {
    const matchesFilter = selectedFilter === 'All' || consultant.expertise.some((exp: string) => 
      exp.toLowerCase().includes(selectedFilter.toLowerCase())
    );
    const matchesSearch = consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultant.expertise.some((exp: string) => exp.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#015F4A] mb-3">
            Meet Our Expert Counsellors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Connect with licensed mental health professionals dedicated to your wellness journey.
          </p>
          
          {/* Compact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-6">
            {[
              { number: "50+", label: "Expert Counsellors" },
              { number: "10K+", label: "Sessions Completed" },
              { number: "4.8", label: "Average Rating" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="text-xl font-bold text-[#015F4A] mb-1">{stat.number}</div>
                <div className="text-gray-600 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by name or expertise..."
                className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#015F4A] focus:border-transparent text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {specialtyFilters.map((filter: string) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'bg-[#015F4A] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Counsellors Grid - Responsive grid with proper spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredConsultants.map((consultant: Consultant) => (
            <CounsellorCard key={consultant.id} consultant={consultant} />
          ))}
        </div>

        {/* No Results */}
        {filteredConsultants.length === 0 && (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No counsellors found</h3>
            <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpertCounsellorsComponent;