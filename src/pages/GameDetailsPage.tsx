import CriticScore from '@/components/CriticScore';
import DefinitionItem from '@/components/DefinitionItem';
import ExpandableText from '@/components/ExpandableText';
import GameAttribute from '@/components/GameAttribute';
import GameTrailer from '@/components/GameTrailer';
import useGame from '@/hooks/useGame';
import useGameQueryStore from '@/store';
import { Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function GameDetailsPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw Error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttribute game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
}

export default GameDetailsPage;
