import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onClose } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [imageUrl, setImageUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = (url: string): void => {
    setImageUrl(url);
  };

  return (
    <>
      <SimpleGrid column={4} spacing="40">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imageUrl} />
    </>
  );
}
