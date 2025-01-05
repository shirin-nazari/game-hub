import { useQuery } from '@tanstack/react-query';
import APIClient from '@/services/api-client';
import Screenshot from '@/entities/ScreenShot';
const useScreenShot = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAllData,
  });
};
export default useScreenShot;
