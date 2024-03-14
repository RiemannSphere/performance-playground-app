import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';

type Counters = { counter1: number; counter2: number };

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {
  counter1Subject = new BehaviorSubject(0);
  counter2Subject = new BehaviorSubject(0);
  counter1$ = this.counter1Subject.asObservable();
  counter2$ = this.counter2Subject.asObservable();
  data$: Observable<Counters> = combineLatest({
    counter1: this.counter1$,
    counter2: this.counter2$
  });

  counter3Subject = new BehaviorSubject(0);
  counter4Subject = new BehaviorSubject(0);

  counter3$ = this.counter3Subject.asObservable();
  counter4$ = this.counter4Subject.asObservable();

  counter1Signal = signal(0);
  counter2Signal = signal(0);

  incrementCounter1() {
    this.counter1Subject.next(this.counter1Subject.value + 1);
  }

  incrementCounter2() {
    this.counter2Subject.next(this.counter2Subject.value + 1);
  }

  incrementCounter3() {
    this.counter3Subject.next(this.counter3Subject.value + 1);
  }

  incrementCounter4() {
    this.counter4Subject.next(this.counter4Subject.value + 1);
  }

  incrementCounter1Signal() {
    this.counter1Signal.set(this.counter1Signal() + 1);
  }

  incrementCounter2Signal() {
    this.counter2Signal.set(this.counter2Signal() + 1);
  }

  test(text: string): void {
    console.log(text);
  }
}
