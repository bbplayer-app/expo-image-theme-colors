/**
 * Represents the result of extracting dominant colors from an image.
 */
export type ThemeColorResult = {
  /**
   * The dominant color hex string (e.g., "#RRGGBB").
   * May be null if no color was found.
   */
  dominant?: string | null;

  /**
   * The vibrant color hex string.
   */
  vibrant?: string | null;

  /**
   * The light vibrant color hex string.
   */
  lightVibrant?: string | null;

  /**
   * The dark vibrant color hex string.
   */
  darkVibrant?: string | null;

  /**
   * The muted color hex string.
   */
  muted?: string | null;

  /**
   * The light muted color hex string.
   */
  lightMuted?: string | null;

  /**
   * The dark muted color hex string.
   */
  darkMuted?: string | null;

  /**
   * Width of the source image.
   */
  width: number;

  /**
   * Height of the source image.
   */
  height: number;
};