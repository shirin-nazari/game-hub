import platforms from '@/data/platforms';
import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
const apiClient = new APIClient<Platform>('/platforms/lists/parents');
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAllData,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platforms,
  });
export default usePlatforms;