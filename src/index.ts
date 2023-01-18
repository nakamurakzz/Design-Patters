import { TemperatureDisplay } from "./TemperatureDisplay";
import { WetherSubject } from "./WetherSubject";

// 1秒待機する関数
const sleep = async (msec: number): Promise<void> => new Promise((r) => { setTimeout(r, msec); });

const main = async () => {
  const wetherSubject = new WetherSubject();
  const temperatureDisplay = new TemperatureDisplay(wetherSubject);
  // 1秒毎にループ
  while (true) {
    // 1秒待機
    // eslint-disable-next-line no-await-in-loop
    await sleep(1000);
    // 温度を表示
    temperatureDisplay.display();
  }
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
