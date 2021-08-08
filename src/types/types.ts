export type CountryData = {
  name: string;
  topLevelDomain: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  population: number | string;
  latlng: number[];
  area: number;
  timezones: string[];
  flag: string;
  alpha3Code: string;
  cioc: string;
  alpha2Code: string;
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  borders: {}[];
  nativeName: string;
};
