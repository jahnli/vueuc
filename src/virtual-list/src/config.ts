let maybeTouch: boolean | undefined

export function ensureMaybeTouch (): boolean {
  if (maybeTouch === undefined) {
    if ('matchMedia' in window) {
      maybeTouch = window.matchMedia('(pointer:coarse)').matches
    } else {
      maybeTouch = false
    }
  }
  return maybeTouch
}

let wheelScale: number | undefined

export function ensureWheelScale (): number {
  if (wheelScale === undefined) {
    wheelScale = 'chrome' in window
      ? window.devicePixelRatio
      : 1
  }
  return wheelScale
}
