"use client"
import CorrespondanceNotebook from "@/components/CorrespondanceNotebook";
import Note from "@/components/Note";
import Timetable from "@/components/Timetable";
import { useSession } from "next-auth/react";

export default function Home() {


  return (
    <div className="grid grid-cols-4 gap-4">
      <Timetable />
      <CorrespondanceNotebook />
      <Note />
    </div>
  );
}
