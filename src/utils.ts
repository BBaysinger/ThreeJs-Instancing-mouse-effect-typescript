export function getMousePos(e: MouseEvent | TouchEvent) {
  const x =
    "changedTouches" in e
      ? e.changedTouches[0].clientX
      : (e as MouseEvent).clientX;
  const y =
    "changedTouches" in e
      ? e.changedTouches[0].clientY
      : (e as MouseEvent).clientY;
  const target = e.target as EventTarget | null;

  return {
    x,
    y,
    target,
  };
}

export const sinPaletteHead = `
  uniform vec3 c0;
  uniform vec3 c1;
  uniform vec3 c2;
  uniform vec3 c3;

  vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ){
    return a + b*cos( 6.28318*(c*t+d) );
  }
`;

// Demo Utils

export function getPaletteFromParams(defaultPalette: string = "black"): string {
  const search = new URLSearchParams(window.location.search);
  return search.get("palette") ?? defaultPalette;
}

const palettes: string[] = [
  "black",
  "pink",
  "aquamarine",
  "blue",
  "darkblue",
  "grey",
  "white",
  "orange",
];

export function setupControls(palette: string): void {
  window.addEventListener("keydown", (ev: KeyboardEvent) => {
    const currentI = palettes.indexOf(palette);

    switch (ev.key) {
      case "ArrowLeft":
        const prevPalette =
          currentI - 1 < 0 ? palettes.length - 1 : currentI - 1;
        window.location.search = "?palette=" + palettes[prevPalette];
        // window.location.reload()
        break;
      case "ArrowRight":
        const nextPalette = (currentI + 1) % palettes.length;
        window.location.search = "?palette=" + palettes[nextPalette];
        break;
    }
  });
}
