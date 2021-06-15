import { transformReplyStringArray } from './generic-transformers';

export const FIRST_KEY_INDEX = 2;

export const IS_READ_ONLY = true;

interface ZUnionOptions {
    WEIGHTS?: Array<number>;
    AGGREGATE?: 'SUM' | 'MIN' | 'MAX';
    WITHSCORES?: true;
}

export function transformArguments(keys: Array<string> | string, options?: ZUnionOptions): Array<string> {
    const args = ['ZUNION'];

    if (typeof keys === 'string') {
        args.push('1', keys);
    } else {
        args.push(keys.length.toString(), ...keys);
    }

    if (options?.WEIGHTS) {
        args.push('WEIGHTS', ...options.WEIGHTS.map(weight => weight.toString()));
    }

    if (options?.AGGREGATE) {
        args.push('AGGREGATE', options.AGGREGATE);
    }

    if (options?.WITHSCORES) {
        args.push('WITHSCORES');
    }

    return args;
}

// TODO: convert to `Array<ZMember>` when "WITHSCORES"
export const transformReply = transformReplyStringArray;
