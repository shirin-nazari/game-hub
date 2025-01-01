import genres from '@/data/genres';
import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
const apiClient = new APIClient<Genre>('/genres');
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAllData,
    // apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    // staleTime: 24 * 60 * 60 * 1000, //24h
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
