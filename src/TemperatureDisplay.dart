import 'ObserverInterface.dart';
import 'WetherSubject.dart';

class TemperatureDisplay implements ObserverInterface {
  late double _temperature;

  TemperatureDisplay(WetherSubject wetherSubject) {
    _temperature = 0.0;
    wetherSubject.registerObserver(this);
  }

  void update(double temperature) {
    _temperature = temperature;
    display();
  }

  void display() {
    print("Current temperature: $_temperature");
  }
}
