declare module 'nano-throttle' {
  function throttle<F extends Function>(callback: F, ms: number, trailing?: boolean): F
  export default throttle;
}
