import { ObserverInterface } from "./ObserverInterface";
import { SubjectInterface } from "./SubjectInterface";

export class WetherSubject implements SubjectInterface {
  private observers: ObserverInterface[];

  private temperature?: number;

  constructor() {
    this.observers = [];
  }

  registerObserver(observer: ObserverInterface): void {
    this.observers.push(observer);
  }

  removeObserver(observer: ObserverInterface): void {
    const index = this.observers.indexOf(observer);
    if (index >= 0) this.observers.splice(index, 1);
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => {
      if (this.temperature != null) observer.update(this.temperature);
    });
  }

  setTemperature(temperature: number): void {
    this.temperature = temperature;
    this.notifyObservers();
  }
}
