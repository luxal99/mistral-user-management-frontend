import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { UnsubscribeService } from '../../../../../../service/util/unsubscribe.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent implements AfterViewInit {
  searchForm = new FormGroup({
    search: new FormControl(),
  });
  @Output() onSearch = new EventEmitter<string>();

  constructor(private unsubscribeService: UnsubscribeService) {}

  ngAfterViewInit(): void {
    this.searchForm.controls['search'].valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.unsubscribeService.onDestroy$)
      )
      .subscribe((value) => {
        this.onSearch.emit(value);
      });
  }
}
