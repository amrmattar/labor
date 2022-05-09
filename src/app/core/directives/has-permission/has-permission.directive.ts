import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {StorageService} from "../../services";

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit {

  @Input() permission: string;

  constructor(
    private elementRef: ElementRef,
    private storageService: StorageService
  ) {
  }

  ngOnInit(): void {

    if (!this.permission)
      return;

    const UserPermissions = this.storageService.getStringItem('user-permission');
    const hasAPermission = UserPermissions.includes(this.permission);
    if (!hasAPermission)
      this.elementRef.nativeElement.style.display = 'none';
  }

}
