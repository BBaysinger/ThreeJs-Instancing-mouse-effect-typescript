declare module "n8ao" {
  import { Pass } from "postprocessing";
  import { Scene, Camera, Color } from "three";

  export class N8AOPostPass extends Pass {
    constructor(scene: Scene, camera: Camera, width: number, height: number);

    configuration: {
      aoRadius: number;
      distanceFalloff: number;
      intensity: number;
      color: Color;
      aoSamples: number;
      denoiseSamples: number;
      denoiseRadius: number;
      halfRes: boolean;
    };

    setQualityMode(mode: "Low" | "Medium" | "High" | "Ultra"): void;

    screenSpaceRadius: boolean;
  }
}
