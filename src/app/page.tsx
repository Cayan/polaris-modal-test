"use client";

import { Page, LegacyCard, Button, Icon, Modal } from '@shopify/polaris';
import { CircleInformationMajor } from "@shopify/polaris-icons";
import { useState } from 'react';

export const items = [
  {
    title: "First item",
    modalTitle: "First item details",
    modalDescription: "This is the first item",
  },
  {
    title: "Second item",
    modalTitle: "Second item details",
    modalDescription: "This is the second item",
  },
  {
    title: "Third item",
    modalTitle: "Third item details",
    modalDescription: "This is the third item",
  },
  {
    title: "Fourth item",
    modalTitle: "Fourth item details",
    modalDescription: "This is the fourth item",
  },
  {
    title: "Fifth item",
    modalTitle: "Fifth item details",
    modalDescription: "This is the fifth item",
  },
  {
    title: "Sixth item",
    modalTitle: "Sixth item details",
    modalDescription: "This is the sixth item",
  },
  {
    title: "Seventh item",
    modalTitle: "Seventh item details",
    modalDescription: "This is the seventh item",
  },
  {
    title: "Eighth item",
    modalTitle: "Eighth item details",
    modalDescription: "This is the eighth item",
  },
  {
    title: "Ninth item",
    modalTitle: "Ninth item details",
    modalDescription: "This is the ninth item",
  },
  {
    title: "Tenth item",
    modalTitle: "Tenth item details",
    modalDescription: "This is the tenth item",
  },
];

export const InfoModal = ({
  modalOpen,
  handleCloseModal,
  modalTitle,
  modalDescription,
}: {
  modalOpen: boolean;
  handleCloseModal: () => void;
  modalTitle: string;
  modalDescription: string;
}) => {
  return (
    <Modal
      open={modalOpen}
      onClose={handleCloseModal}
      title={modalTitle}
      primaryAction={{
        content: "OK",
        onAction: handleCloseModal,
      }}
    >
      <Modal.Section>
        <p>{modalDescription}</p>
      </Modal.Section>
    </Modal>
  );
};

export default function Home() {
  const InfoIcon = () => (
    <Icon color="subdued" source={CircleInformationMajor} />
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({
    title: "",
    description: "",
  });

  const handleOpenModal = (
    title: string,
    description: string,
  ) => {
    setModalProps({
      title,
      description,
    });

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Page title="Example app">
      {items.map((item, index) => (
        <LegacyCard key={index} title={item.title} sectioned>
          <p>{item.modalDescription}</p>
          <Button
            plain
            icon=<InfoIcon />
            onClick={() =>
              handleOpenModal(
                item.modalTitle,
                item.modalDescription,
              )
            }
          ></Button>
        </LegacyCard>
      ))}
      <InfoModal
        modalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        modalTitle={modalProps.title}
        modalDescription={modalProps.description}
      />
    </Page>
  )
}
