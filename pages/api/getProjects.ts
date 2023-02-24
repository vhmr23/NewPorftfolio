import type { NextApiRequest, NextApiResponse} from 'next'
import { groq } from 'next-sanity'
import { client } from '../../sanity.client'

const query = groq`*[_type == "project"]{
    ...,
    tecnologies[]->,
}`

type Data = {
    projects: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const projects: Project[] = await client.fetch(query)
    res.status(200).json({ projects })
}