import CorrespondanceNotebook from "@/components/CorrespondanceNotebook";
import DailyCall from "@/components/DailyCall/DailyCall";
import Note from "@/components/Note";
import Timetable from "@/components/Timetable";

export default function TeacherPage() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Timetable />
      <DailyCall />
    </div>
  );
}
