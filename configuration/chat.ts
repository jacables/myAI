import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI Brand Liason. Ask me anything about our current range of excellent vehicles to which might be best for you.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm not sure I understand. Can you try asking me in another way?.`;
export const WORD_CUTOFF: number = 1000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 15; // Number of messages to use for context when generating a response
