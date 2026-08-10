// Mock notification data for the Navbar notification dropdown.
// Each notification contains an id, title, message, and timestamp.
export interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'info' | 'alert' | 'success' | 'error';
  createdAt: Date;
  read?: boolean;
}

export const mockNotifications: Notification[] = [
  {
    id: 1,
    title: "New Property Listed",
    message: "A new property has been added in Colombo 07 with 3 bedrooms and a stunning ocean view.",
    type: 'info',
    createdAt: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    read: false,
  },
  {
    id: 2,
    title: "Price Drop Alert",
    message: "Your saved property 'Luxury Villa in Kandy' has dropped by 5%. Now is a great time to invest!",
    type: 'alert',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    read: false,
  },
  {
    id: 3,
    title: "Open House Reminder",
    message: "Open house this Saturday at 10 AM for the beachfront property in Galle. Don't miss out!",
    type: 'info',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    read: false,
  },
  {
    id: 4,
    title: "Mortgage Rate Update",
    message: "Current mortgage rates are now at 3.5% — the lowest they've been all year.",
    type: 'success',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    read: false,
  },
  {
    id: 5,
    title: "New Review Received",
    message: "Your listing received a 5-star review from a verified buyer. Great work!",
    type: 'success',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
    read: false,
  },
];