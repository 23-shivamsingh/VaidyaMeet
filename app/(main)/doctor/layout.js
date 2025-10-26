import React from "react";
import PageHeader from "@/components/page-header";
import { Stethoscope } from "lucide-react";

export const metadata = {
  title: "Doctor Dashboard - VadiyaMeet",
  dscription: "manage your appointments and availability",
};
const DoctorDashboardLayout = ({ children }) => {
  return (
  <div className="container mx-auto px-4 py-20"> 
  <PageHeader icon={<Stethoscope/>} title={"Doctor Dashboard"}/> 
  {children} </div>
  );
};

export default DoctorDashboardLayout;
