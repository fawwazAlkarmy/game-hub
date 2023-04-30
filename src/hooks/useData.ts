import { useEffect, useState } from "react";
import { axiosInstance as apiClient } from "../services/api-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      const getData = async () => {
        try {
          const response = await apiClient.get<FetchResponse<T>>(endpoint, {
            signal: controller.signal,
            ...requestConfig,
          });
          setData(response.data.results);
          setLoading(false);
        } catch (err) {
          if (err instanceof CanceledError) return;
          setError((err as AxiosError).message);
          setLoading(false);
        }
      };
      getData();
      return () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, loading };
};

export default useData;
