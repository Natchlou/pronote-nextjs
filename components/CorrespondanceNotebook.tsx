"use client";
import { Card, CardBody, CardHeader } from "@heroui/react";

import Absence from "./Notebook/Absence";
import Retard from "./Notebook/Retard";

export default function CorrespondanceNotebook() {
  return (
    <div>
      <Card>
        <CardHeader>Carnet de correspondance</CardHeader>
        <CardBody>
          <div className="flex flex-col gap-1 divide-y-2">
            <Absence
              date_end="22 juin à 18h00"
              date_start="20 juin à 8h00"
              justified={false}
            />
            <Absence
              date_end="26 juin à 18h00"
              date_start="24 juin à 8h00"
              justified={true}
              motif="RDV médicale"
            />
            <Retard duration={10} justified={false} />
            <Retard
              duration={10}
              justified={true}
              motif="Transports scolaire"
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
