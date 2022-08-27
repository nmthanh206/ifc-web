import type { NextApiRequest, NextApiResponse } from 'next';
import base from 'server/base';

type Data = {
  name: string;
};
const handler = base().get(
  (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ name: 'John Doe' });
  },
);

export default handler;
