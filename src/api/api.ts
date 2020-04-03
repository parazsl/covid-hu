const BASE_URL = 'https://api.covid19api.com';

interface ISummary {
  Countries: {
    Country: string;
    CountrySlug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
  }[];
}

export async function getSummary(): Promise<ISummary> {
  const response = await fetch(`${BASE_URL}/summary`);
  const data = await response.json();
  return data;
}
