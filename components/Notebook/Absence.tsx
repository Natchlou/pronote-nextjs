import clsx from "clsx";
import React from "react";
import { MdCheck, MdClear, MdInfo } from "react-icons/md";

type AbsentType = {
  justified: boolean;
  date_start: string;
  date_end: string;
  motif?: string;
}

export default function Absence({
  justified,
  date_start,
  date_end,
  motif,
}: AbsentType) {
  return (
    <div className={"flex flex-row items-center gap-3 py-2"}>
      {justified ? (
        <MdCheck className="w-8 h-8 text-green-500" />
      ) : (
        <MdClear className="w-8 h-8 text-red-500" />
      )}
      <div className="flex flex-col flex-1">
        <span className="text-sm">
          {justified ? "Absence justifiée" : "Absence non justifiée"}
        </span>
        <span className={clsx("text-sm", { "text-red-500": !justified })}>
          du {date_start} au {date_end}
        </span>
      </div>
      {motif && (
        <MdInfo
          className="w-4 h-4"
          title={motif}
        />
      )}
    </div>
  );
}
