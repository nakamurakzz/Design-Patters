import 'ObserverInterface.dart';
import 'SubjectInterface.dart';

class WetherSubject implements SubjectInterface {
  late List<ObserverInterface> _observers;
  late double _temperature;

  WetherSubject() {
    _observers = [];
  }

  void registerObserver(ObserverInterface observer) {
    _observers.add(observer);
  }

  void removeObserver(ObserverInterface observer) {
    _observers.removeWhere((element) => element == observer);
  }

  void notifyObservers() {
    _observers.forEach((observer) {
      if (_temperature != Null) observer.update(_temperature);
    });
  }

  void setTemperature(double temperature) {
    _temperature = temperature;
    this.notifyObservers();
  }
}
