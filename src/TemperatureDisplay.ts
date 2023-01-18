import { ObserverInterface } from "./ObserverInterface";
import { WetherSubject } from "./WetherSubject";

export class TemperatureDisplay implements ObserverInterface {
  private temperature: number;

  constructor(wetherSubject: WetherSubject) {
    this.temperature = 0;
    wetherSubject.registerObserver(this);
  }

  update(temperature: number): void {
    this.temperature = temperature;
    this.display();
  }

  display(): void {
    console.log(`Current temperature: ${this.temperature}`);
  }
}
