import {createContext, useContext, useState} from "react";
import {ItemsDict} from "../models";

interface ItemsContextValues {
  items: ItemsDict;
  setItems: (items: ItemsDict) => void;
}

const ItemsContext = createContext<ItemsContextValues>({} as ItemsContextValues);

interface ItemsContextProviderProps {
  children?: string | JSX.Element | JSX.Element[];
  // items: ItemsDict;
}

const ItemsContextProvider = ({children}: ItemsContextProviderProps) => {
  const [items, setItems] = useState<ItemsDict>({});
  return <ItemsContext.Provider value={{items, setItems}}>
    {children}
  </ItemsContext.Provider>
}

const useItems = () => {
  const itemsContext = useContext(ItemsContext);
  return {items: itemsContext.items, setItems: itemsContext.setItems}
}

export {ItemsContextProvider, useItems};
