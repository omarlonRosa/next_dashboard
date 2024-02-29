import { Redis } from '@upstash/redis'

export const redis = new Redis({
    url: 'https://usw1-enjoyed-pony-34179.upstash.io',
    token: process.env.REDIS_KEY!,
})
