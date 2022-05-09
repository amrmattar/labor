import {IsActiveMatchOptions} from "@angular/router";

export interface IItemsPanelMenu {
  label: string;
  icon?: string;
  command?: Function;
  styleClass?: string;
  badge?: string;
  badgeStyleClass?: string;
  disabled?: boolean;
  items?: IItemsPanelMenu[];
  routerLink?: any[];
  routerLinkActiveOptions?: IsActiveMatchOptions;
  routerLinkActive?: string;
}
