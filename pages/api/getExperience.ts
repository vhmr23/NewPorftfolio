import type { NextApiRequest, NextApiResponse} from 'next'
import { groq } from 'next-sanity'
import { client } from '../../sanity.client'

const query = groq`*[_type == "experience"]{
    ...,
    tecnologies[]->,
}`

type Data = {
    experience: Experience[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const experience: Experience[] = await client.fetch(query)
    res.status(200).json({ experience })
}