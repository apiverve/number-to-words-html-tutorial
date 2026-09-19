import { guard, callApi, respond, fail } from '../lib/apiverve.js';

// Up to 15 digits, an optional minus sign and up to 6 decimal places.
const NUMBER = /^-?\d{1,15}(\.\d{1,6})?$/;

/** GET /api/words?number=1234.5: the number written out in words, as an ordinal, and digit by digit. */
export async function GET(request) {
  const blocked = guard(request);
  if (blocked) return blocked;

  const number = (new URL(request.url).searchParams.get('number') || '').replace(/,/g, '').trim();
  if (!NUMBER.test(number)) return fail('Enter a number with up to 15 digits and 6 decimal places');

  return respond(() => callApi('numbertowords', { query: { number } }));
}
