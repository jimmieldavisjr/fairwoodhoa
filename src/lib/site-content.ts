import {
  Bell,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileText,
  Phone,
  type LucideIcon,
  Landmark,
  ScrollText,
  ClipboardCheck,
  PiggyBank,
  Ruler,
  Newspaper,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Organization / contact                                              */
/* ------------------------------------------------------------------ */

export const org = {
  name: "Fairwood Greens",
  fullName: "Fairwood Greens Homeowners' Association",
  shortName: "FGHA",
  tagline: "Rooted in community. Surrounded by nature.",
  location: "Renton, Washington",
  serviceArea: "Fairwood Greens · Renton, WA 98058",
  email: "info@fairwoodgreenshoa.org",
  officePhone: "(425) 555-0180",
  securityPhone: "(425) 555-0177",
  portalUrl: "#resident-portal",
} as const;

/* ------------------------------------------------------------------ */
/* Primary navigation                                                  */
/* ------------------------------------------------------------------ */

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "Community", href: "#community" },
  { label: "Meetings", href: "#meetings" },
  { label: "Documents", href: "#documents" },
  { label: "News & Events", href: "#news" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* Resident quick actions                                              */
/* ------------------------------------------------------------------ */

export type QuickAction = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const quickActions: QuickAction[] = [
  {
    label: "Pay HOA Dues",
    description: "Assessments & billing",
    href: "#resident-portal",
    icon: CreditCard,
  },
  {
    label: "Submit a Request",
    description: "Maintenance & ARC",
    href: "#requests",
    icon: ClipboardList,
  },
  {
    label: "View Documents",
    description: "Governing & financial",
    href: "#documents",
    icon: FileText,
  },
  {
    label: "Upcoming Meetings",
    description: "Board & committees",
    href: "#meetings",
    icon: CalendarDays,
  },
  {
    label: "Contact the HOA",
    description: "Office & management",
    href: "#contact",
    icon: Phone,
  },
  {
    label: "Community Calendar",
    description: "Events & deadlines",
    href: "#news",
    icon: Bell,
  },
];

/* ------------------------------------------------------------------ */
/* Community alert                                                     */
/* ------------------------------------------------------------------ */

export const communityAlert = {
  category: "Community Notice",
  date: "July 1, 2026",
  message: "Fireworks are prohibited within Fairwood Greens.",
  detail:
    "For the safety of residents, pets, and our wooded surroundings, all fireworks are banned on association property year-round.",
  href: "#news",
} as const;

/* ------------------------------------------------------------------ */
/* Upcoming meeting                                                    */
/* ------------------------------------------------------------------ */

export const upcomingMeeting = {
  title: "Monthly Board Meeting",
  type: "Board of Directors",
  date: "Tuesday, July 28, 2026",
  dateShort: "Jul 28",
  time: "7:00 PM – 8:30 PM",
  location: "Fairwood Golf & Country Club",
  address: "14000 156th Ave SE, Renton, WA",
  description:
    "Open to all members. The board will review the landscape contract renewal, the 2027 reserve study, and resident comments. A virtual attendance link is available in the Resident Portal.",
  agendaHref: "#agenda",
  detailsHref: "#meetings",
  calendarHref: "#add-to-calendar",
} as const;

/* ------------------------------------------------------------------ */
/* News & events                                                       */
/* ------------------------------------------------------------------ */

export type Announcement = {
  id: string;
  category: "Safety" | "Meeting" | "Community" | "Maintenance";
  date: string;
  title: string;
  summary: string;
  href: string;
  cta: string;
  theme: "gold" | "green" | "slate";
};

export const announcements: Announcement[] = [
  {
    id: "fireworks",
    category: "Safety",
    date: "July 1, 2026",
    title: "Fireworks Prohibited in Fairwood Greens",
    summary:
      "A reminder that fireworks are not permitted anywhere within the community. Please report unsafe activity to Community Security.",
    href: "#news",
    cta: "Read Notice",
    theme: "gold",
  },
  {
    id: "board-meeting",
    category: "Meeting",
    date: "July 28, 2026",
    title: "Upcoming FGHA Board Meeting",
    summary:
      "Join your neighbors and the Board of Directors on July 28. The agenda includes the landscape renewal and the 2027 reserve study.",
    href: "#meetings",
    cta: "View Agenda",
    theme: "slate",
  },
  {
    id: "summer-social",
    category: "Community",
    date: "August 15, 2026",
    title: "Summer Green & Garden Social",
    summary:
      "Celebrate the season at the clubhouse lawn — food trucks, live music, and a neighborhood plant swap. All residents welcome.",
    href: "#news",
    cta: "See Details",
    theme: "green",
  },
];

/* ------------------------------------------------------------------ */
/* Popular documents                                                   */
/* ------------------------------------------------------------------ */

export type DocLink = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const popularDocuments: DocLink[] = [
  {
    label: "Governing Documents",
    description: "CC&Rs, Bylaws & Rules",
    href: "#documents",
    icon: Landmark,
  },
  {
    label: "Meeting Minutes",
    description: "Approved board records",
    href: "#documents",
    icon: ScrollText,
  },
  {
    label: "Meeting Agendas",
    description: "Upcoming & past",
    href: "#documents",
    icon: ClipboardCheck,
  },
  {
    label: "Financial Information",
    description: "Budgets & reserves",
    href: "#documents",
    icon: PiggyBank,
  },
  {
    label: "Architectural Guidelines",
    description: "ARC standards & forms",
    href: "#documents",
    icon: Ruler,
  },
  {
    label: "Newsletters",
    description: "Community updates",
    href: "#documents",
    icon: Newspaper,
  },
];
