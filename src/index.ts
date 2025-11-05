// Reexport the native module. On web, it will be resolved to ExpoImageThemeColorsModule.web.ts
// and on native platforms to ExpoImageThemeColorsModule.ts
export { default } from './ExpoImageThemeColorsModule';
export { default as ExpoImageThemeColorsView } from './ExpoImageThemeColorsView';
export * from  './ExpoImageThemeColors.types';
