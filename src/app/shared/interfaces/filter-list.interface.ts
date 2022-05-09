import { FilterFieldTypes } from "src/app/core/primeng-implementer/components/data-table/enums/filter-field-types";
import { RelationInFilter } from "../enums/relation-in-filter";
import { TypeOFFiltering } from "../enums/type-offiltering.enum";

export interface IFilterList {
  nameField: string;
  actualPropertyName?: string;
  typeOfFiltering: TypeOFFiltering;
  relationWithNext?: RelationInFilter;
  typeOfFilterField?: FilterFieldTypes;
  value: any;
}
