export function catchAsync(fn: (...arg0: any[]) => any) {
  // eslint-disable-next-line func-names
  return async function (...agrs: any[]) {
    let response;
    try {
      response = await fn(...agrs);
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      throw new Error(err);
    }
    return response;
  };
}
