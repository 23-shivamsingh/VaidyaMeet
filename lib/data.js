import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

// JSON data for features
export const features = [
  {
    icon: <User className="h-6 w-6 text-indigo-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized healthcare recommendations and services.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-indigo-400" />,
    title: "Book Appointments",
    description:
      "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
  },
  {
    icon: <Video className="h-6 w-6 text-indigo-400" />,
    title: "Video Consultation",
    description:
      "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-indigo-400" />,
    title: "Consultation Credits",
    description:
      "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-indigo-400" />,
    title: "Verified Doctors",
    description:
      "All healthcare providers are carefully vetted and verified to ensure quality care.",
  },
  {
    icon: <FileText className="h-6 w-6 text-indigo-400" />,
    title: "Medical Documentation",
    description:
      "Access and manage your appointment history, doctor's notes, and medical recommendations.",
  },
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "MK",
    name: "Marcus K.",
    role: "Patient",
    quote:
      "The video consultation function saved me a considerable amount of time. I could receive medical guidance without having to leave work or travel to a doctor's office.",
  },
  {
    initials: "DR",
    name: "Dr. Evelyn S.",
    role: "Cardiologist",
    quote:
      "This platform has transformed my practice. I can now connect with more patients and deliver timely care without the limitations of a physical office.",
  },
  {
    initials: "RJ",
    name: "Ricardo J.",
    role: "Patient",
    quote:
      "The credit system is incredibly handy. I bought a plan for my family, and we've had the opportunity to speak with specialists whenever necessary.",
  },
];

// JSON data for credit system benefits
export const creditBenefits = [
  "Each consultation requires <strong class='text-indigo-400'>2 credits</strong> regardless of duration",
  "Credits <strong class='text-indigo-400'>never expire</strong> - use them whenever you need",
  "Monthly subscriptions give you <strong class='text-indigo-400'>fresh credits every month</strong>",
  "Cancel or change your subscription <strong class='text-indigo-400'>anytime</strong> without penalties",
];
