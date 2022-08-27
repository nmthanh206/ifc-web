import morgan from 'morgan';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import { errorHandler } from '@/middleware/errorMiddleware';
// import dbConnect from "@/lib/dbConnect";
export default function base() {
  return (
    nc<NextApiRequest, NextApiResponse>({ onError: errorHandler })
      // .use(async (req, res, next) => {
      //    await dbConnect();
      //    next();
      // })
      .use(morgan('dev'))
  );
}
