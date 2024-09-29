import {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.NEXT_PUBLIC_SECRET_TOKEN) {
    return res.status(401).json({message: 'Invalid token'})
  }

  try {
    await res.revalidate('/test')
    return res.json({revalidated: true})
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}