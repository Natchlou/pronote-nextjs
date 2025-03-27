import { Button, DateInput, Checkbox, Form, Modal, ModalBody, ModalContent,  Select, ModalHeader, useDisclosure, ModalFooter, SelectItem, NumberInput } from '@heroui/react';
import React from 'react'
import { MdAdd } from 'react-icons/md';
import motifs from '@/public/motifs.json';

type Student = {
  id: number;
  fullname: string;
  firstname: string;
  lastname: string;
  birthday: string;
  level: string;
  data: {
    parent: {
      father: string;
      mother: string;
      phone: string;
    };
    medical_info: {
      allergies: string[];
      asthma: boolean;
      medication?: string;
    };
  };
}

export default function AddRetardModal({ student }: {student: Student}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} startContent={<MdAdd />}>Retard</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Ajouter un retard à {student.fullname}</ModalHeader>
              <ModalBody>
                <Form className='space-y-2'>
                  <DateInput label='Date de début' />
                  <NumberInput label='Durée (en min)' />
                  <Select label="Choissisez un motif de l'absence">
                    {motifs.map((motif) => (
                      <SelectItem key={motif.key} startContent={<div style={{ width: '20px', height: '20px', borderRadius: '4px', backgroundColor: motif.color, marginRight: '8px' }}></div>}>
                        {motif.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Checkbox>Justifier</Checkbox>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
