import { registerWebModule, NativeModule } from 'expo';

import { ExpoImageThemeColorsModuleEvents } from './ExpoImageThemeColors.types';

class ExpoImageThemeColorsModule extends NativeModule<ExpoImageThemeColorsModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoImageThemeColorsModule, 'ExpoImageThemeColorsModule');
