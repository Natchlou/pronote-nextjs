import React from "react";

type EvaluationProps = {
	subject: string;
	date: string;
	note: number;
};

export default function Evaluation({ subject, date, note }: EvaluationProps) {
	return (
		<div className="flex justify-between items-center py-2">
			<div className="flex flex-col">
				<span className="text-sm font-semibold">{subject.toUpperCase()}</span>
				<span className="text-sm">le {date}</span>
			</div>
			<div className="bg-orange-200 px-2 py-1 rounded">
				{note.toFixed(2)}
			</div>
		</div>
	);
}
