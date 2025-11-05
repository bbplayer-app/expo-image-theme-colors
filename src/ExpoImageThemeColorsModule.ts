import { NativeModule, requireNativeModule, SharedRef } from 'expo';
import { ThemeColorResult } from './ExpoImageThemeColors.types';
import { ImageRef } from './ImageRef';

declare class ExpoImageThemeColorsModule extends NativeModule {
  extractThemeColorAsync(source: string | SharedRef<'image'> | ImageRef): Promise<ThemeColorResult>;
}

export default requireNativeModule<ExpoImageThemeColorsModule>('ExpoImageThemeColors');
