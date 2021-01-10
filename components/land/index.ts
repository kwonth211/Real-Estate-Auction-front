export interface Land {
  gubun?: string;
  buildingNumber?: string;
  Quote?: string;
  floors?: string;
  areaType?: string;
  area?: string;
}

export { default as landSlice } from "./landSlice";
export { default as LandTable } from "./landTable";
