import type { NextApiRequest, NextApiResponse} from 'next'
import { groq } from 'next-sanity'
import { client } from '../../sanity.client'

const query = groq`*[_type == "perfilInfo"][0]`

type Data = {
    perfilInfo: PerfilInfo[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const perfilInfo: PerfilInfo[] = await client.fetch(query)
    res.status(200).json({ perfilInfo })
}