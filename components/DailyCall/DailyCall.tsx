"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    getKeyValue
} from "@heroui/react";
import { useEffect, useState } from "react";
import AddAbsenceModal from "../Modal/AddAbsenceModal";
import AddRetardModal from "../Modal/AddRetardModal";

type Student = {
    id: number;
    fullname: string;
    firstname: string;
    lastname: string;
    birthday: string;
    level: string;
    data?: any; // Ajout de la propriété 'data' pour résoudre l'erreur
};

export default function DailyCall() {
    const [rows, setRows] = useState<Student[]>([]);

    useEffect(() => {
        fetch("/students.json")
            .then((r) => r.json())
            .then((data) => setRows(data));
    }, []);

    const columns = [
        { key: "fullname", label: "NOM COMPLET" },
        { key: "birthday", label: "DATE DE NAISSANCE" },
        { key: "level", label: "NIVEAU" },
        { key: "action", label: 'ACTIONS' }
    ];

    return (
        <Table aria-label="Liste des étudiants">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => (
                            <TableCell>
                                {columnKey === "action" ? (
                                    <div>
                                        <AddAbsenceModal student={item}/>
                                        <AddRetardModal student={item}/>
                                    </div>
                                ) : (
                                    getKeyValue(item, columnKey)
                                )}
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
