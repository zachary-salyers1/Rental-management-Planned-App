import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/Card';
import { Badge } from './components/ui/Badge';

export default function Dashboard() {
  // In a real application, these would be fetched from an API or database
  const summaryData = {
    properties: 5,
    guests: 12,
    activeBookings: 3,
    upcomingBookings: 5,
    monthlyRevenue: 15000,
    occupancyRate: 75,
  };

  return (
    <div className="space-y-6 bg-gray-100 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SummaryCard title="Properties" count={summaryData.properties} link="/properties" />
        <SummaryCard title="Guests" count={summaryData.guests} link="/guests" />
        <SummaryCard title="Active Bookings" count={summaryData.activeBookings} link="/bookings" />
        <SummaryCard title="Upcoming Bookings" count={summaryData.upcomingBookings} link="/bookings" />
        <SummaryCard 
          title="Monthly Revenue" 
          count={`$${summaryData.monthlyRevenue.toLocaleString()}`} 
          link="/bookings" 
        />
        <SummaryCard 
          title="Occupancy Rate" 
          count={`${summaryData.occupancyRate}%`} 
          link="/properties" 
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <QuickActionCard title="Add New Property" link="/properties/new" />
          <QuickActionCard title="Create Booking" link="/bookings/new" />
          <QuickActionCard title="Add Guest" link="/guests/new" />
          <QuickActionCard title="View Calendar" link="/calendar" />
          <QuickActionCard title="Generate Report" link="/reports" />
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ title, count, link }: { title: string; count: number | string; link: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold mb-2">{count}</p>
        <Link href={link} className="text-blue-600 hover:underline inline-block">
          View Details
        </Link>
      </CardContent>
    </Card>
  );
}

function QuickActionCard({ title, link }: { title: string; link: string }) {
  return (
    <Link href={link}>
      <Card className="hover:bg-gray-50 transition-colors duration-200">
        <CardContent className="flex items-center justify-between">
          <span className="text-lg font-semibold">{title}</span>
          <Badge variant="primary">Go</Badge>
        </CardContent>
      </Card>
    </Link>
  );
}