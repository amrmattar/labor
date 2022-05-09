import { IFilterList } from "./filter-list.interface";
import { SortingType } from "../enums/sorting-type.enum";

export interface IParamsListing {
  id?: string;
  corporateId?: string;
  CompanyId?:string,
  customerId?: string,
  PageNumber?: number;
  PageSize?: number;
  sortFieldName?: string;
  sortFieldDirection?: SortingType;
  Filter?: IFilterList[];

}
