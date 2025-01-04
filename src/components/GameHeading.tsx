import useGenre from '@/hooks/useGenre';
import usePlatform from '@/hooks/usePlatform';
import useGameQueryStore from '@/store';
import { Heading } from '@chakra-ui/react';

const GameHeading = () => {
  const genreId = useGameQueryStore((p) => p.gameQuery.genreId);
  const genre = useGenre(genreId);
  const platformId = useGameQueryStore((p) => p.gameQuery.platformId);
  const platform = usePlatform(platformId);
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
