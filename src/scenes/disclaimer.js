import k from "../kaplayCtx";

export default function disclaimer() {
  k.add([
    k.text(
      `
        Sonic is owned by SEGA.
        This is a fangame made by Me by Learning from 
        JSLegendDev 
        in 
        FreeCodeCamp 
        Youtube Channel using assets from Sonic Mania
      `,
      { font: "danfo", size: 32 }
    ),
  ]);

  k.add([
    k.text("Press Space/Click/Touch to Start The Game and enjoy to play it", {
      font: "danfo",
      size: 64,
    }),
    k.anchor("center"),
    k.pos(k.center()),
  ]);

  k.onButtonPress("jump", () => k.go("main-menu"));
}
