import { ObserverInterface } from "./ObserverInterface";

export interface SubjectInterface {
  registerObserver(observer: ObserverInterface): void;
  removeObserver(observer: ObserverInterface): void;
  notifyObservers(): void;
}
