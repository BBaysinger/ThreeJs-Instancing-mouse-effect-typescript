declare module "three-glslify" {
  const glsl: (strings: TemplateStringsArray, ...values: any[]) => string;
  export default glsl;
}
