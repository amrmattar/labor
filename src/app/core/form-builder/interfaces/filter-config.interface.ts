import { RelationInFilter } from "src/app/shared/enums/relation-in-filter";
import { TypeOFFiltering } from "../../../shared/enums/type-offiltering.enum";
import { FilterFieldTypes } from "../../primeng-implementer/components/data-table/enums/filter-field-types";

export interface FilterConfig {
  filterType: TypeOFFiltering;
  actualPropertyname?: string | null;
  relationWithNext?: RelationInFilter;
  typeOfFilterField?: FilterFieldTypes;
}
