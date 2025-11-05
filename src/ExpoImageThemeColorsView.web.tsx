import * as React from 'react';

import { ExpoImageThemeColorsViewProps } from './ExpoImageThemeColors.types';

export default function ExpoImageThemeColorsView(props: ExpoImageThemeColorsViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
