"use client";
import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useState,
  useCallback,
} from "react";

import { FiltersType } from "@/app/search/types/filters.type";

type ContextValue = {
  filters: FiltersType;
  changeFilter: <Tkey extends keyof FiltersType>(
    key: Tkey,
    value: FiltersType[Tkey],
  ) => void;
  removeFilter: <Tkey extends keyof FiltersType>(key: Tkey) => void;
  clearAll: () => void;
};

const defaultFilters: FiltersType = {
  even: true,
  odd: true,
  three: true,
  five: true,
  seven: true,
};
export const FiltersContext = createContext<ContextValue>({
  filters: { ...defaultFilters },
  changeFilter: () => {},
  removeFilter: () => {},
  clearAll: () => {},
});

type Props = PropsWithChildren;

export default function FiltersPropvider({ children }: Props): ReactElement {
  const [filters, setFilters] = useState<FiltersType>({ ...defaultFilters });

  const changeFilter = useCallback(
    <Tkey extends keyof FiltersType>(
      key: Tkey,
      value: FiltersType[Tkey],
    ): void => {
      setFilters((old) => ({ ...old, [key]: value }));
    },
    [],
  );

  const removeFilter = useCallback(
    <Tkey extends keyof FiltersType>(key: Tkey): void => {
      setFilters((old) => {
        const clone = { ...old };
        delete clone[key];
        return clone;
      });
    },
    [],
  );

  const clearAll = useCallback((): void => {
    setFilters({ ...defaultFilters });
  }, []);

  return (
    <FiltersContext.Provider
      value={{ filters, changeFilter, removeFilter, clearAll }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
