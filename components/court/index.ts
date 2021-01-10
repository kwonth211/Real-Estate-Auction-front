import { Land } from "./../land";

export interface Court {
  caseNumber?: string;
  itemNumber?: string;
  useAge?: string;
  remark?: string;
  appraisalValue?: string;
  minimumSellingPrice?: string;
  saleDate?: string;
  progress?: string;
  locationList?: Array<location>;
  landList?: Array<Land>;
}

export interface location {
  location?: string;
  area?: string;
}

export { default as CourtSlice } from "./courtSlice";
export { default as CourtTable } from "./courtTable";
