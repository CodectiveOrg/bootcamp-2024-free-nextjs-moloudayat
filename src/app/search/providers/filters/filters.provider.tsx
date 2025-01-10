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
    value: Exclude<FiltersType[Tkey], undefined>,
  ) => void;
  removeFilter: <Tkey extends keyof FiltersType>(key: Tkey) => void;
  clearAll: () => void;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {},
  changeFilter: () => {},
  removeFilter: () => {},
  clearAll: () => {},
});

type Props = PropsWithChildren;

export default function FiltersPropvider({ children }: Props): ReactElement {
  const [filters, setFilters] = useState<FiltersType>({});

  const changeFilter = useCallback(
    <Tkey extends keyof FiltersType>(
      key: Tkey,
      value: Exclude<FiltersType[Tkey], undefined>,
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
    setFilters({});
  }, []);

  return (
    <FiltersContext.Provider
      value={{ filters, changeFilter, removeFilter, clearAll }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
