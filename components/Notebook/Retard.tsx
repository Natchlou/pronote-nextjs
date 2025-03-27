import clsx from "clsx";
import React from "react";
import { MdDirectionsRun, MdInfo } from "react-icons/md";

type RetardType = {
  justified: boolean;
  duration: number;
  motif?: string;
}

export default function Retard({
  justified,
  duration,
  motif,
}:
  RetardType
) {
  return (
    <div className={"flex flex-row items-center gap-3 py-2"}>
      {justified ? (
        <MdDirectionsRun className="w-8 h-8 text-green-500" />
      ) : (
        <MdDirectionsRun className="w-8 h-8 text-red-500" />
      )}
      <div className="flex flex-col flex-1">
        <span className="text-sm">
          {justified ? "Retard justifié" : "Retard non justifié"}
        </span>
        <span className={clsx("text-sm", { "text-red-500": !justified })}>
          de {duration} min
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
