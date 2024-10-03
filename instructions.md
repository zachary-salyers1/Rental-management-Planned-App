# **Product Requirements Document (PRD)**

## **Project: Rental Management Property Planner**

**Overview**

The Rental Management Property Planner is a web-based application designed to assist property owners in managing their rental properties, guests, and bookings efficiently. The application provides an integrated platform to track properties, manage guest information, handle bookings, view booking calendars, and update account settings. The goal is to streamline the rental management process, enhance organization, and improve the overall experience for both property owners and guests.

- --

**Objectives**

**Centralized Management:** Provide a unified dashboard for managing properties, guests, bookings, and calendars.

- **Centralized Management:** Provide a unified dashboard for managing properties, guests, bookings, and calendars.

**User-Friendly Interface:** Design an intuitive UI that allows easy navigation and management of rental-related tasks.

- **User-Friendly Interface:** Design an intuitive UI that allows easy navigation and management of rental-related tasks.

**Data Accessibility:** Enable quick access to essential information like property details, guest information, booking schedules, and financial summaries.

- **Data Accessibility:** Enable quick access to essential information like property details, guest information, booking schedules, and financial summaries.

**Scalability:** Structure the application to accommodate future enhancements and additional features.

- **Scalability:** Structure the application to accommodate future enhancements and additional features.

**Minimal File Structure:** Organize the project with as few files as possible without compromising functionality or maintainability.

- **Minimal File Structure:** Organize the project with as few files as possible without compromising functionality or maintainability.
- --

## **Core Functionality**

**1. Dashboard**

**Description:** A central hub that provides an overview of the rental business.

- **Description:** A central hub that provides an overview of the rental business.

**Features:**

- **Features:**

**Highlights:**

- **Highlights:**

Total properties.

- Total properties.

Total guests.

- Total guests.

Upcoming bookings.

- Upcoming bookings.

Monthly revenue.

- Monthly revenue.

**Quick Access Links:** Shortcuts to properties, guests, bookings, calendar, and settings pages.

- **Quick Access Links:** Shortcuts to properties, guests, bookings, calendar, and settings pages.

**Purpose:** Allow users to get a snapshot of their rental business at a glance.

- **Purpose:** Allow users to get a snapshot of their rental business at a glance.

**2. Properties Page**

**Description:** Page that displays and manages all properties.

- **Description:** Page that displays and manages all properties.

**Features:**

- **Features:**

**Property Listing:**

- **Property Listing:**

Display properties as cards or in a table.

- Display properties as cards or in a table.

Each property includes:

- Each property includes:

Name

- Name

Location

- Location

Number of rooms

- Number of rooms

Number of total guests

- Number of total guests

Price per night

- Price per night

Availability status

- Availability status

**Property Actions:**

- **Property Actions:**

Add new property.

- Add new property.

Edit property details.

- Edit property details.

Delete property.

- Delete property.

View assigned guests.

- View assigned guests.

**Notes Section:**

- **Notes Section:**

Ability to add and view notes specific to each property.

- Ability to add and view notes specific to each property.

**Purpose:** Manage property details and keep track of property-specific information.

- **Purpose:** Manage property details and keep track of property-specific information.

**3. Guests Page**

**Description:** Page that displays and manages guest information.

- **Description:** Page that displays and manages guest information.

**Features:**

- **Features:**

**Guest Listing:**

- **Guest Listing:**

Display guests as cards or in a table.

- Display guests as cards or in a table.

Each guest includes:

- Each guest includes:

Name

- Name

Email

- Email

Phone number

- Phone number

Number of bookings made

- Number of bookings made

**Guest Actions:**

- **Guest Actions:**

Add new guest.

- Add new guest.

Edit guest details.

- Edit guest details.

Assign guest to properties.

- Assign guest to properties.

View booking history.

- View booking history.

Download contract PDFs.

- Download contract PDFs.

**Notes Section:**

- **Notes Section:**

Ability to add and view notes specific to each guest.

- Ability to add and view notes specific to each guest.

**Purpose:** Manage guest profiles and keep track of guest interactions and preferences.

- **Purpose:** Manage guest profiles and keep track of guest interactions and preferences.

**4. Bookings Page**

**Description:** Page that displays and manages all bookings.

- **Description:** Page that displays and manages all bookings.

**Features:**

- **Features:**

**Booking Listing:**

- **Booking Listing:**

Display bookings as cards or in a table.

- Display bookings as cards or in a table.

Each booking includes:

- Each booking includes:

Property name

- Property name

Guest name

- Guest name

Check-in date

- Check-in date

Check-out date

- Check-out date

Total price

- Total price

**Booking Actions:**

- **Booking Actions:**

Add new booking.

- Add new booking.

Edit booking details.

- Edit booking details.

Delete booking.

- Delete booking.

Upload and manage signed contracts.

- Upload and manage signed contracts.

**Additional Info:**

- **Additional Info:**

Store additional information related to the booking (e.g., special requests).

- Store additional information related to the booking (e.g., special requests).

**Purpose:** Keep track of current and upcoming bookings and manage booking-related documentation.

- **Purpose:** Keep track of current and upcoming bookings and manage booking-related documentation.

**5. Calendar Page**

**Description:** Visual calendar displaying all bookings.

- **Description:** Visual calendar displaying all bookings.

**Features:**

- **Features:**

**Calendar View:**

- **Calendar View:**

Monthly, weekly, and daily views.

- Monthly, weekly, and daily views.

Bookings displayed as blocks with:

- Bookings displayed as blocks with:

Property name

- Property name

Guest name

- Guest name

Check-in/check-out dates

- Check-in/check-out dates

**Interaction:**

- **Interaction:**

Click on booking blocks to view booking details.

- Click on booking blocks to view booking details.

Ability to add bookings directly from the calendar.

- Ability to add bookings directly from the calendar.

**Purpose:** Provide a visual representation of bookings for easier scheduling and management.

- **Purpose:** Provide a visual representation of bookings for easier scheduling and management.

**6. Settings Page**

**Description:** User account settings and preferences.

- **Description:** User account settings and preferences.

**Features:**

- **Features:**

**Profile Management:**

- **Profile Management:**

Edit personal information.

- Edit personal information.

Change password.

- Change password.

**Payment Information:**

- **Payment Information:**

Update and manage payment methods.

- Update and manage payment methods.

**Preferences:**

- **Preferences:**

Set application preferences (e.g., notification settings).

- Set application preferences (e.g., notification settings).

**Purpose:** Allow users to personalize their account and keep their information up to date.

- **Purpose:** Allow users to personalize their account and keep their information up to date.
- --

## **File Structure**

The project is structured to optimize for minimal files while maintaining clarity and separation of concerns.

rental-management-property-planner/

```
.
├── .config
├── .next
│   ├── cache
├── lib
│   ├── utils.js
├── pages
│   ├── api
│   │   ├── hello.ts
│   ├── _app.tsx
│   ├── index.tsx
├── public
│   ├── favicon.ico
│   ├── replit.svg
├── src
│   ├── components
│   │   ├── ui
│   │   │   ├── button.jsx
├── styles
│   ├── globals.css
│   ├── Home.module.css
├── .eslintrc.json
├── .gitignore
├── components.json
├── instructions.md
├── next-env.d.ts
├── next.config.js
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json

```

**Explanation:**

**app/**: Contains global styles and layout components.

- **app/**: Contains global styles and layout components.

**globals.css**: Application-wide CSS styles.

- **globals.css**: Application-wide CSS styles.

**layout.tsx**: Main layout component wrapping around pages.

- **layout.tsx**: Main layout component wrapping around pages.

**page.tsx**: The main dashboard page.

- **page.tsx**: The main dashboard page.

**components/**: Reusable UI components.

- **components/**: Reusable UI components.

**button.tsx**, **calendar.tsx**, **card.tsx**: Core UI elements.

- **button.tsx**, **calendar.tsx**, **card.tsx**: Core UI elements.

**pages/**: Main pages of the application.

- **pages/**: Main pages of the application.

**properties.tsx**, **guests.tsx**, **bookings.tsx**, **calendar.tsx**, **settings.tsx**: Individual pages for each core functionality.

- **properties.tsx**, **guests.tsx**, **bookings.tsx**, **calendar.tsx**, **settings.tsx**: Individual pages for each core functionality.

**utils/**: Utility functions and helpers.

- **utils/**: Utility functions and helpers.

**utils.ts**: Common utility functions.

- **utils.ts**: Common utility functions.

**public/**: Public assets like images and icons.

- **public/**: Public assets like images and icons.

**Configuration Files**: Project configuration and setup files (e.g., **package.json**, **tsconfig.json**).

- **Configuration Files**: Project configuration and setup files (e.g., **package.json**, **tsconfig.json**).
- --

## **Detailed Component Documentation**

**Example Components and Code**

To provide context and assist developers in understanding the application's implementation, below are examples of key components with code snippets.

**1. Guests Component**

This component manages guest-related functionalities, including listing guests, adding new guests, viewing guest details, and managing guest notes.

```tsx
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Search, UserPlus, X, Edit, Save } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Guests() {
  const [guests, setGuests] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      lastStay: '2023-05-01',
      upcomingStay: '2023-07-15',
      totalStays: 3,
      favoriteProperty: 'Lake House',
      notes: 'Prefers quiet rooms away from the street.',
      assignedPropertyId: 1,
      bookingHistory: [
        { id: 1, property: 'Lake House', checkIn: '2023-05-01', checkOut: '2023-05-05' },
        // ... additional booking history ...
      ]
    },
    // ... additional guests ...
  ])

  const [properties, setProperties] = useState([])
  // ... rest of the component code ...

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Guest Management</h2>
      {/* Guest Management UI */}
      {/* ... existing code ... */}
    </div>
  )
}
```

**Key Features:**

**Guest Listing Table:** Displays guests with their basic information.

- **Guest Listing Table:** Displays guests with their basic information.

**Add Guest Dialog:** Form to add new guests, collecting name, email, phone, and assigned property.

- **Add Guest Dialog:** Form to add new guests, collecting name, email, phone, and assigned property.

**Guest Details Dialog:** Shows detailed information about a selected guest, including tabs for basic info, booking history, and notes.

- **Guest Details Dialog:** Shows detailed information about a selected guest, including tabs for basic info, booking history, and notes.

**Notes Management:** Allows editing and saving notes associated with each guest.

- **Notes Management:** Allows editing and saving notes associated with each guest.

**Property Assignment:** Assign guests to properties using a dropdown selection.

- **Property Assignment:** Assign guests to properties using a dropdown selection.
- --

**2. Properties Component**

Manages property-related functionalities, including listing properties, adding new properties, editing property details, and viewing assigned guests.

```tsx
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// ... imports ...

export default function PropertyManagement() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: 'Lakeside Retreat',
      type: 'House',
      location: 'Lake Tahoe, CA',
      bedrooms: 3,
      bathrooms: 2,
      maxGuests: 8,
      pricePerNight: 250,
    },
    // ... additional properties ...
  ])

  // ... rest of the component code ...

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Property Management</h2>
      {/* Property Management UI */}
      {/* ... existing code ... */}
    </div>
  )
}
```

**Key Features:**

**Property Listing Table:** Displays properties with details like name, type, location, bedrooms, etc.

- **Property Listing Table:** Displays properties with details like name, type, location, bedrooms, etc.

**Add Property Dialog:** Form to add new properties, collecting all relevant property information.

- **Add Property Dialog:** Form to add new properties, collecting all relevant property information.

**Edit Property Dialog:** Allows updating property details.

- **Edit Property Dialog:** Allows updating property details.

**Assigned Guests:** Shows the number of guests assigned to each property and allows viewing them.

- **Assigned Guests:** Shows the number of guests assigned to each property and allows viewing them.

**Property Actions:** Includes options to add, edit, and delete properties.

- **Property Actions:** Includes options to add, edit, and delete properties.
- --

**3. Bookings Component**

Handles booking-related functionalities, including listing bookings, adding new bookings, editing booking details, and managing booking contracts.

```tsx
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// ... imports ...

export default function Bookings() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      guest: 'John Doe',
      property: 'Lakeside Retreat',
      checkIn: '2023-07-15',
      checkOut: '2023-07-20',
      additionalInfo: 'Late check-in requested',
      contract: null,
    },
    // ... additional bookings ...
  ])

  // ... rest of the component code ...

  return (
    <div className="space-y-4">
      {/* Booking Management UI */}
      {/* ... existing code ... */}
    </div>
  )
}
```

**Key Features:**

**Booking Listing Table:** Displays bookings with guest name, property, dates, and additional info.

- **Booking Listing Table:** Displays bookings with guest name, property, dates, and additional info.

**Add Booking Dialog:** Form to add new bookings, with fields for guest, property, dates, and additional info.

- **Add Booking Dialog:** Form to add new bookings, with fields for guest, property, dates, and additional info.

**Edit Booking Dialog:** Allows updating booking details.

- **Edit Booking Dialog:** Allows updating booking details.

**Contract Management:** Functionality to upload, view, and download contracts associated with bookings.

- **Contract Management:** Functionality to upload, view, and download contracts associated with bookings.

**Booking Actions:** Options to add, edit, delete bookings, and manage contracts.

- **Booking Actions:** Options to add, edit, delete bookings, and manage contracts.
- --

**4. Calendar Component**

Displays bookings in a calendar view for easy visualization of booking schedules.

**Note:** The full code for the Calendar component is not provided but should follow a similar structure to the other components.

- --

## **Technical Details**

**Technologies Used**

**Framework:** Next.js with TypeScript for server-side rendering and routing.

- **Framework:** Next.js with TypeScript for server-side rendering and routing.

**UI Library:** Tailwind CSS for styling and layout.

- **UI Library:** Tailwind CSS for styling and layout.

**Components:** Custom UI components built and stored in the components/ui/ directory.

- **Components:** Custom UI components built and stored in the components/ui/ directory.

**Icons:** lucide-react for SVG icons used throughout the application.

- **Icons:** lucide-react for SVG icons used throughout the application.

**State Management**

**Local State:** Managed using React's useState and useEffect hooks within individual components.

- **Local State:** Managed using React's useState and useEffect hooks within individual components.

**Data Storage:** For this project, data is stored locally within components. In a real-world application, integration with a backend API or database is necessary.

- **Data Storage:** For this project, data is stored locally within components. In a real-world application, integration with a backend API or database is necessary.

**Routing**

**Page-Based Routing:** Utilizing Next.js's file-based routing system, where each file in the pages/ directory corresponds to a route.

- **Page-Based Routing:** Utilizing Next.js's file-based routing system, where each file in the pages/ directory corresponds to a route.
- --

## **Developer Guidelines**

**Coding Standards**

**TypeScript:** Use TypeScript for type safety and consistency.

- **TypeScript:** Use TypeScript for type safety and consistency.

**Component Reusability:** Create reusable UI components for common elements like buttons, inputs, dialogs, etc.

- **Component Reusability:** Create reusable UI components for common elements like buttons, inputs, dialogs, etc.

**Modular Code:** Keep code modular and organized for maintainability.

- **Modular Code:** Keep code modular and organized for maintainability.

**File Structure Best Practices**

**Minimal Files:** Combine related functionalities within the same file when appropriate to minimize the number of files.

- **Minimal Files:** Combine related functionalities within the same file when appropriate to minimize the number of files.

**Component Placement:** Place components within the components/ directory if they are reused across multiple pages.

- **Component Placement:** Place components within the components/ directory if they are reused across multiple pages.

**Avoid Deep Nesting:** Keep the directory structure as flat as possible to reduce complexity.

- **Avoid Deep Nesting:** Keep the directory structure as flat as possible to reduce complexity.

**Documentation**

**Comments:** Include comments in the code to explain complex logic or important sections.

- **Comments:** Include comments in the code to explain complex logic or important sections.

**Readme:** Update the README.md file with setup instructions, project overview, and any other relevant information.

- **Readme:** Update the README.md file with setup instructions, project overview, and any other relevant information.
- --

## **Context and Additional Information**

**Provided Documentation**

The following example components and code snippets have been provided to guide the implementation. Developers should refer to these examples for context and alignment with project expectations.

**Guests Component Example:** Demonstrates the functionality and UI for managing guests.

- **Guests Component Example:** Demonstrates the functionality and UI for managing guests.

**Properties Component Example:** Shows how properties are listed and managed.

- **Properties Component Example:** Shows how properties are listed and managed.

**Bookings Component Example:** Provides an example of booking management, including contract handling.

- **Bookings Component Example:** Provides an example of booking management, including contract handling.

**Current File Structure:** Offers a baseline for the project's organization, which has been optimized in the proposed structure.

- **Current File Structure:** Offers a baseline for the project's organization, which has been optimized in the proposed structure.

**Importance of Examples**

The example code and responses are crucial for understanding the desired functionality and user experience. Developers should:

**Use as Reference:** Leverage the examples to inform the development of similar components or pages.

- **Use as Reference:** Leverage the examples to inform the development of similar components or pages.

**Maintain Consistency:** Ensure that the implementation aligns with the provided examples in terms of UI design and functionality.

- **Maintain Consistency:** Ensure that the implementation aligns with the provided examples in terms of UI design and functionality.

**Expand Upon Examples:** While the examples provide a foundation, developers are encouraged to enhance and optimize the code where appropriate.

- **Expand Upon Examples:** While the examples provide a foundation, developers are encouraged to enhance and optimize the code where appropriate.
- --

## **Conclusion**

This PRD outlines the detailed requirements for the Rental Management Property Planner. It provides clear guidance on the core functionalities, file structure, technical considerations, and includes important context through example code and documentation. Developers should use this document as a roadmap to implement the project effectively, ensuring alignment with the project's goals and standards.

- --

**Note to Developers:** Always refer back to this PRD during development to ensure that all requirements are being met. If there are any questions or uncertainties, please seek clarification to maintain the project's integrity and alignment with its objectives.