import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TicketsFacade} from './store/tickets/facades/tickets.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  tickets$ = this.ticketsFacade.allOrFilteredTickets$;
  isLoading$ = this.ticketsFacade.isLoading$;

  ticketsTrackFn = (i, t) => t.id;

  constructor(private ticketsFacade: TicketsFacade) {}

  ngOnInit(): void {
    this.ticketsFacade.loadAll();
  }
  onFilterChange(q: string) {
    this.ticketsFacade.setFilter(q);
  }
}
