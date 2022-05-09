import { IParamsListing } from "src/app/shared/interfaces/params-listing.interface";
import { XhrRequestType } from "../enums/xhr-request-type";

export interface IFetchTableData {
    notFetingOnInit?: boolean;
    requestType?: XhrRequestType;
    url?: string;
    params?: IParamsListing;
    returnFullResponse?: boolean;
    propertyContainList?: string;
    responseIsObject?: boolean;
}
