import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoImageThemeColorsViewProps } from './ExpoImageThemeColors.types';

const NativeView: React.ComponentType<ExpoImageThemeColorsViewProps> =
  requireNativeView('ExpoImageThemeColors');

export default function ExpoImageThemeColorsView(props: ExpoImageThemeColorsViewProps) {
  return <NativeView {...props} />;
}
