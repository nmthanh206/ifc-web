import { NextApiRequest, NextApiResponse } from 'next';

const errorHandler = (
  err: Error,
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { errorHandler };
