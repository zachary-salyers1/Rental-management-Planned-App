'use client'

import { useState } from 'react';
import { Table, TableHeader, TableRow, TableHeaderCell, TableCell } from '../components/ui/Table';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Dialog } from '../components/ui/Dialog';
import { Textarea } from '../components/ui/Textarea';
import { Badge } from '../components/ui/Badge';

interface Guest {
  id: number;
  name: string;
  email: string;
  phone: string;
  notes: string;
  bookings: { id: number; propertyName: string; checkIn: string; checkOut: string }[];
}

export default function Guests() {
  const [guests, setGuests] = useState<Guest[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      notes: 'Prefers quiet rooms',
      bookings: [
        { id: 1, propertyName: 'Seaside Villa', checkIn: '2024-06-01', checkOut: '2024-06-07' },
      ],
    },
    // Add more mock guests here
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [currentGuest, setCurrentGuest] = useState<Guest | null>(null);
  const [newGuest, setNewGuest] = useState({ name: '', email: '', phone: '', notes: '' });

  const handleAddGuest = () => {
    setGuests([...guests, { ...newGuest, id: guests.length + 1, bookings: [] }]);
    setNewGuest({ name: '', email: '', phone: '', notes: '' });
    setIsAddDialogOpen(false);
  };

  const handleEditGuest = () => {
    if (currentGuest) {
      setGuests(guests.map(g => g.id === currentGuest.id ? currentGuest : g));
      setIsEditDialogOpen(false);
    }
  };

  const handleDeleteGuest = (id: number) => {
    setGuests(guests.filter(g => g.id !== id));
  };

  return (
    <div className="space-y-6 p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Guests</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>Add Guest</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Phone</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {guests.map(guest => (
            <TableRow key={guest.id}>
              <TableCell>{guest.name}</TableCell>
              <TableCell>{guest.email}</TableCell>
              <TableCell>{guest.phone}</TableCell>
              <TableCell>
                <Button variant="secondary" className="mr-2" onClick={() => {
                  setCurrentGuest(guest);
                  setIsDetailsDialogOpen(true);
                }}>
                  Details
                </Button>
                <Button variant="secondary" className="mr-2" onClick={() => {
                  setCurrentGuest(guest);
                  setIsEditDialogOpen(true);
                }}>
                  Edit
                </Button>
                <Button variant="outline" onClick={() => handleDeleteGuest(guest.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Dialog isOpen={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} title="Add Guest">
        <div className="space-y-4">
          <Input
            label="Name"
            value={newGuest.name}
            onChange={e => setNewGuest({ ...newGuest, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            value={newGuest.email}
            onChange={e => setNewGuest({ ...newGuest, email: e.target.value })}
          />
          <Input
            label="Phone"
            type="tel"
            value={newGuest.phone}
            onChange={e => setNewGuest({ ...newGuest, phone: e.target.value })}
          />
          <Textarea
            label="Notes"
            value={newGuest.notes}
            onChange={e => setNewGuest({ ...newGuest, notes: e.target.value })}
          />
          <Button onClick={handleAddGuest}>Add Guest</Button>
        </div>
      </Dialog>

      <Dialog isOpen={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)} title="Edit Guest">
        {currentGuest && (
          <div className="space-y-4">
            <Input
              label="Name"
              value={currentGuest.name}
              onChange={e => setCurrentGuest({ ...currentGuest, name: e.target.value })}
            />
            <Input
              label="Email"
              type="email"
              value={currentGuest.email}
              onChange={e => setCurrentGuest({ ...currentGuest, email: e.target.value })}
            />
            <Input
              label="Phone"
              type="tel"
              value={currentGuest.phone}
              onChange={e => setCurrentGuest({ ...currentGuest, phone: e.target.value })}
            />
            <Textarea
              label="Notes"
              value={currentGuest.notes}
              onChange={e => setCurrentGuest({ ...currentGuest, notes: e.target.value })}
            />
            <Button onClick={handleEditGuest}>Save Changes</Button>
          </div>
        )}
      </Dialog>

      <Dialog isOpen={isDetailsDialogOpen} onClose={() => setIsDetailsDialogOpen(false)} title="Guest Details">
        {currentGuest && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{currentGuest.name}</h2>
            <p><strong>Email:</strong> {currentGuest.email}</p>
            <p><strong>Phone:</strong> {currentGuest.phone}</p>
            <div>
              <strong>Notes:</strong>
              <p className="mt-1">{currentGuest.notes}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Booking History</h3>
              {currentGuest.bookings.length > 0 ? (
                currentGuest.bookings.map(booking => (
                  <div key={booking.id} className="mb-2 p-2 bg-gray-100 rounded">
                    <p><strong>{booking.propertyName}</strong></p>
                    <p>Check-in: {booking.checkIn}</p>
                    <p>Check-out: {booking.checkOut}</p>
                  </div>
                ))
              ) : (
                <p>No booking history available.</p>
              )}
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}