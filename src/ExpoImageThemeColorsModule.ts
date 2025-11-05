import { NativeModule, requireNativeModule } from 'expo';

import { ExpoImageThemeColorsModuleEvents } from './ExpoImageThemeColors.types';

declare class ExpoImageThemeColorsModule extends NativeModule<ExpoImageThemeColorsModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoImageThemeColorsModule>('ExpoImageThemeColors');
