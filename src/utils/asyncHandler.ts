export const asyncHandler = (fn: (...arg0: any[]) => any) =>
  async function asyncUtilWrap(...args: any[]) {
    //   await dbConnect();
    const fnReturn = fn(...args);
    const next = args[args.length - 1];
    return Promise.resolve(fnReturn).catch(next);
  };
