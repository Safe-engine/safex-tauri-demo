interface HMR {
  accept: (cb?: () => void) => void
  dispose: (cb?: () => void) => void
}

declare namespace module {
  const hot: HMR
}
