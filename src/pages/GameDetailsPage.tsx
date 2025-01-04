import useGame from '@/hooks/useGame';
import useGameQueryStore from '@/store';
import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function GameDetailsPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw Error;
  return (
    <Box>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </Box>
  );
}

export default GameDetailsPage;
