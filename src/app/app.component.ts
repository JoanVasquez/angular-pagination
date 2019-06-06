import { Component } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private todoList: object[] = [];
  private maxSizePagination: number = 5;
  private autoHidePagination: boolean = true;

  private paginationConfig: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 6,
    currentPage: 1
  };

  private labels: object = {
    previousLabel: 'Back',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  private onPageChange(number: number) {
    this.paginationConfig.currentPage = number;
  }

  ngOnInit() {
    for (let i = 0; i <= 30; i++) {
      this.todoList.push({
        id: i,
        title: `Home Work ${i}`,
        completed: false
      });
    }
  }
}
