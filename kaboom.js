import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs"

// initialize kaboom context
export const k = kaboom({
    width: 320,
    height: 240,
    font: "sinko",
    background: [ 0, 0, 255, ],
    global: true
});