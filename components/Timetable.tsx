/* eslint-disable prettier/prettier */
"use client";
import { Card, CardBody, CardHeader } from "@heroui/react";

import Subject from "./Subject";

export default function Timetable() {
  return (
    <div>
      <Card>
        <CardHeader>Emploi du temps</CardHeader>
        <CardBody>
          <div className="flex flex-col gap-2">
            <Subject
              color="red"
              data={{ color: 'danger', label: 'Prof. absent' }}
              end_at="10h00"
              start_at="9h00"
              subject="Mathématiques"
              teacher="JULLIEN N."
            />
            <Subject
              color="green"
              data={{ color: 'primary', label: 'Changement de salle' }}
              end_at="12h00"
              salle="Salon"
              start_at="10h00"
              subject="Anglais"
              teacher="JULLIEN N."
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
