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

export interface Location {
  location?: string;
  area?: string;
}

export interface Land {
  gubun?: string;
  buildingNumber?: string;
  Quote?: string;
  floors?: string;
  areaType?: string;
  area?: string;
}
