import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IWeatherResponse } from '../../models/models';

const weatherApiKey = "b537b83d4b4221bfed14257227253d7a";

export const weatherApi = createApi({
  reducerPath: "weather/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (build) => ({
    weatherInCity: build.query<IWeatherResponse, string>({
      query: (search: string) => ({
        url: `weather`,
        params: {
          q: search,
          appid: weatherApiKey,
          units: 'metric',
        },
      }),
    }),
  }),
});

export const { useWeatherInCityQuery } = weatherApi;