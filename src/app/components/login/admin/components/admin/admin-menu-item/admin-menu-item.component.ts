import { Component, Input, OnInit } from '@angular/core';
import { NavigationUrls } from '../../../../../../util/constant/navigation-urls';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, map, takeUntil } from 'rxjs';
import { UnsubscribeService } from '../../../../../../service/util/unsubscribe.service';

@Component({
  selector: 'app-admin-menu-item',
  templateUrl: './admin-menu-item.component.html',
  styleUrls: ['./admin-menu-item.component.scss'],
})
export class AdminMenuItemComponent implements OnInit {
  @Input() title = '';
  @Input() matIcon = '';
  @Input() navigationUrl!: NavigationUrls;

  currentUrl = window.location.pathname;

  constructor(
    private router: Router,
    private unsubscribeService: UnsubscribeService
  ) {}

  navigate() {
    this.router.navigate([this.navigationUrl]);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((routerEvent) => routerEvent instanceof NavigationEnd),
        map((route: any) => route['url']),
        takeUntil(this.unsubscribeService.onDestroy$)
      )
      .subscribe((url) => {
        this.currentUrl = url;
      });
  }
}
