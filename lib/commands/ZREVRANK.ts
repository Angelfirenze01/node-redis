export const FIRST_KEY_INDEX = 1;

export const IS_READ_ONLY = true;

export function transformArguments(key: string, member: string): Array<string> {
    return ['ZREVRANK', key, member];
}

export function transformReply(reply: number | null): number | null {
    return reply;
}
