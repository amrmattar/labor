import { Injectable } from '@angular/core';
import { FilterFieldTypes } from 'src/app/core/primeng-implementer/components/data-table/enums/filter-field-types';
import { FilterStatus } from 'src/app/core/primeng-implementer/components/data-table/enums/filter-status';
import { TypeOFFiltering } from '../enums/type-offiltering.enum';
import { IParamsListing } from "../interfaces/params-listing.interface";

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() {
  }

  setParamsForListing(params: IParamsListing) {

    const requestParams = { ...params };
    delete requestParams.Filter;
    delete requestParams.PageNumber;
    delete requestParams.PageSize;
    delete requestParams.sortFieldDirection;
    delete requestParams.sortFieldName;

    requestParams["Paging.PageNumber"] = params.PageNumber;
    requestParams["Paging.PageSize"] = params.PageSize;

    if (params.sortFieldName && params.sortFieldDirection) {
      requestParams['sortingfield.field'] = params['sortFieldName'];
      requestParams['sortingfield.direction'] = params['sortFieldDirection'];
    }

    if (params.Filter?.length) {

      const filterQuery = [];
      params.Filter.forEach((res) => {

        const validateHasvalueOrhasValueAndTypeStatus = res.value || (!res.value && res.typeOfFilterField === FilterFieldTypes.status);
        const checkIfTypeFilterIsContains = res.typeOfFiltering === TypeOFFiltering.contain;

        if (validateHasvalueOrhasValueAndTypeStatus) {

          if (checkIfTypeFilterIsContains)
            filterQuery.push(`${res.actualPropertyName || res.nameField}.${TypeOFFiltering.contain}("${res.value}")`);
          else if ((res.typeOfFilterField === FilterFieldTypes.status && res.value !== FilterStatus.all) || res.typeOfFilterField === FilterFieldTypes.date)
            filterQuery.push(`${res.actualPropertyName || res.nameField} ${res.typeOfFiltering} ${res.value}`);
          else if (res.typeOfFilterField === FilterFieldTypes.status && res.value === FilterStatus.all)
            return false;
          else
            filterQuery.push(`${res.actualPropertyName || res.nameField} ${res.typeOfFiltering} "${res.value}"`);

          filterQuery.push(res.relationWithNext || '');
        }
      });

      filterQuery.splice(filterQuery.length - 1, 1);
      requestParams['filter'] = filterQuery.join(' ');
    }

    return requestParams;
  }

}
