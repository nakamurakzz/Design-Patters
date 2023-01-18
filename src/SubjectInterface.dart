import 'ObserverInterface.dart';

abstract class SubjectInterface {
  void registerObserver(ObserverInterface observer);
  void removeObserver(ObserverInterface observer);
  void notifyObservers();
}
