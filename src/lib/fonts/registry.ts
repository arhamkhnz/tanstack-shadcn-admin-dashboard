type FontDefinition = {
  label: string;
  family: string;
  fallback: "monospace" | "sans-serif" | "serif";
  stylesheet: string;
  variationSettings?: string;
};

function googleFont(family: string, axes = "wght@400..700"): string {
  return `https://fonts.googleapis.com/css2?family=${family.replaceAll(" ", "+")}:${axes}&display=swap`;
}

export const fontRegistry = {
  geist: {
    label: "Geist",
    family: "Geist",
    fallback: "sans-serif",
    stylesheet: googleFont("Geist"),
  },
  inter: {
    label: "Inter",
    family: "Inter",
    fallback: "sans-serif",
    stylesheet: googleFont("Inter"),
  },
  notoSans: {
    label: "Noto Sans",
    family: "Noto Sans",
    fallback: "sans-serif",
    stylesheet: googleFont("Noto Sans"),
  },
  nunitoSans: {
    label: "Nunito Sans",
    family: "Nunito Sans",
    fallback: "sans-serif",
    stylesheet: googleFont("Nunito Sans"),
  },
  figtree: {
    label: "Figtree",
    family: "Figtree",
    fallback: "sans-serif",
    stylesheet: googleFont("Figtree"),
  },
  roboto: {
    label: "Roboto",
    family: "Roboto",
    fallback: "sans-serif",
    stylesheet: googleFont("Roboto"),
  },
  raleway: {
    label: "Raleway",
    family: "Raleway",
    fallback: "sans-serif",
    stylesheet: googleFont("Raleway"),
  },
  dmSans: {
    label: "DM Sans",
    family: "DM Sans",
    fallback: "sans-serif",
    stylesheet: googleFont("DM Sans"),
  },
  publicSans: {
    label: "Public Sans",
    family: "Public Sans",
    fallback: "sans-serif",
    stylesheet: googleFont("Public Sans"),
  },
  outfit: {
    label: "Outfit",
    family: "Outfit",
    fallback: "sans-serif",
    stylesheet: googleFont("Outfit"),
  },
  geistMono: {
    label: "Geist Mono",
    family: "Geist Mono",
    fallback: "monospace",
    stylesheet: googleFont("Geist Mono"),
  },
  geistPixelSquare: {
    label: "Geist Pixel Square",
    family: "Geist Pixel",
    fallback: "sans-serif",
    stylesheet: googleFont("Geist Pixel", "ELSH@1"),
    variationSettings: '"ELSH" 1',
  },
  jetBrainsMono: {
    label: "JetBrains Mono",
    family: "JetBrains Mono",
    fallback: "monospace",
    stylesheet: googleFont("JetBrains Mono"),
  },
  notoSerif: {
    label: "Noto Serif",
    family: "Noto Serif",
    fallback: "serif",
    stylesheet: googleFont("Noto Serif"),
  },
  robotoSlab: {
    label: "Roboto Slab",
    family: "Roboto Slab",
    fallback: "serif",
    stylesheet: googleFont("Roboto Slab"),
  },
  merriweather: {
    label: "Merriweather",
    family: "Merriweather",
    fallback: "serif",
    stylesheet: googleFont("Merriweather"),
  },
  lora: {
    label: "Lora",
    family: "Lora",
    fallback: "serif",
    stylesheet: googleFont("Lora"),
  },
  playfairDisplay: {
    label: "Playfair Display",
    family: "Playfair Display",
    fallback: "serif",
    stylesheet: googleFont("Playfair Display"),
  },
} as const satisfies Record<string, FontDefinition>;

export type FontKey = keyof typeof fontRegistry;

export const fontKeys = Object.keys(fontRegistry) as FontKey[];

export const fontOptions = fontKeys.map((key) => ({
  key,
  label: fontRegistry[key].label,
}));

export const fontBootRegistry = Object.fromEntries(
  fontKeys.map((key) => {
    const font = fontRegistry[key];

    return [
      key,
      {
        family: font.family,
        fallback: font.fallback,
        stylesheet: font.stylesheet,
        variationSettings: "variationSettings" in font ? font.variationSettings : undefined,
      },
    ];
  }),
) as Record<FontKey, Pick<FontDefinition, "fallback" | "family" | "stylesheet" | "variationSettings">>;
