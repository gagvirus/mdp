import {createContext, useContext, useState} from "react";
import {Item} from "../models";

interface Equipment {
  [key: string]: Item | null
}

interface EquipmentContextValues {
  equipment: Equipment;
  setEquipment: (equipment: Equipment) => void;
}

const initialEquipment = {
  main: null,
  special: null,
  ultimate: null,
  launcher: null,
  armor: null,
  boots: null,
  gloves: null,
  helmet: null,
}

const EquipmentContext = createContext<EquipmentContextValues>({
  equipment: initialEquipment, setEquipment: () => {
  }
} as EquipmentContextValues);

interface EquipmentContextProviderProps {
  children?: string | JSX.Element | JSX.Element[];
}

const EquipmentContextProvider = ({children}: EquipmentContextProviderProps) => {
  const [equipment, setEquipment] = useState<Equipment>(initialEquipment);
  return <EquipmentContext.Provider value={{equipment, setEquipment}}>
    {children}
  </EquipmentContext.Provider>
}

const useEquipment = () => {
  const equipmentContext = useContext(EquipmentContext);
  const {equipment, setEquipment} = equipmentContext;
  const equipItem = (item: Item) => {
    const itemClone = item.clone();
    const newEquipment = {...equipment};
    newEquipment[item.type] = itemClone;
    setEquipment(newEquipment);
  }
  return {equipment, setEquipment, equipItem}
}

export {EquipmentContextProvider, useEquipment};
