import React from "react";
import { Card, CardContent } from "./ui/card";
import { Calendar, User } from "lucide-react";
import { Badge } from "lucide-react";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const DoctorCard = ({ doctor }) => {
  return (
    <Card className="border-indigo-900/20 hover:border-indigo-700/40 transition-all">
      <CardContent className="pt-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-indigo-900/20 flex items-center justify-center flex-shrink-0">
            {doctor.imageUrl ? (
              <img
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <User className="h-6 w-6 text-indigo-400" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="font-medium text-white text-lg">{doctor.name}</h3>
              <Badge
                variant="outline"
                className="bg-indigo-900/20 border-indigo-900/30 text-indigo-400 self-start"
              >
                <Star className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-1">
              {doctor.specialty} {doctor.experience} years experience
            </p>
            <div className="mt-4 line-clamp-2 text-sm text-muted-foreground mb-4">
              {doctor.description}
            </div>

            <Button
              asChild
              className="w-full bg-indigo-500 hover:bg-indigo-600 mt-2 text-white"
            >
              <Link href={`/doctors/${doctor.specialty}/${doctor.id}`}>
                <Calendar className="h-4 w-4 mr-2" />
                View Profile & Book
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
