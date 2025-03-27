"use client";
import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";

import Evaluation from "./Note/Evaluation";

export default function Note() {
  return (
    <div>
      <Card>
        <CardHeader>Dernières notes</CardHeader>
        <CardBody>
          <div className="flex flex-col gap-2 divide-y-2">
            <Evaluation date="20 sept." note={20} subject="Anglais LV1" />
            <Evaluation date="20 sept." note={20} subject="Mathématiques" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
