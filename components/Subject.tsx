import { Chip } from "@heroui/react";

export default function Subject({
  start_at,
  end_at,
  subject,
  teacher,
  salle,
  color,
  data,
}: {
  start_at: string;
  end_at: string;
  subject: string;
  teacher: string;
  salle?: string;
  color: string;
  data?: { color: "danger" | "primary"; label: string };
}) {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col items-start justify-between w-10">
        <div className="text-sm">{start_at}</div>
        <div className="text-sm">{end_at}</div>
      </div>
      <div className="border-2 rounded" style={{ borderColor: color }} />
      <ul className="flex flex-col flex-1">
        <li className="text-sm font-semibold">{subject}</li>
        <li className="text-sm">{teacher}</li>
        <li className="text-sm">{salle ?? 'Sans salle'}</li>
      </ul>
      <div className="flex justify-end items-end">
        {data && (
          <Chip color={data.color} size="sm">
            {data.label}
          </Chip>
        )}
      </div>
    </div>
  );
}
