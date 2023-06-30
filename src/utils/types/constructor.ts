export type Constructor<ClassType = any, Arguments extends Array<any> = Array<any>> = {
  new (...args: Arguments): ClassType
}