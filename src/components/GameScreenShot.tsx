import useScreenShot from '@/hooks/useScreenShot';
import { Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
interface Props {
  gameId: number;
}
const GameScreenShot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShot(gameId);
  if (error) throw error;
  if (isLoading) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((img) => (
        <Image key={img.id} src={img.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShot;
