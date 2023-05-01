import {createContext, useContext, useState} from "react";
import {Item, ItemsDict} from "../models";

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
  const {items, setItems} = itemsContext;
  const setItemLevel = (item: Item, level: number) => {
    const itemClone = item.clone();
    itemClone.level = level;
    const newItems = {...items};
    newItems[item.id] = itemClone;
    setItems(newItems);
  }
  return {items, setItems, setItemLevel}
}

export {ItemsContextProvider, useItems};
