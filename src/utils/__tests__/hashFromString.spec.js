import { hashFromString } from '../hashFromString';

describe('hashFromString()', () => {
  it('outputs the same hash for identical strings', () => {
    const hash1 = hashFromString('foo-bar-baz');
    const hash2 = hashFromString('foo-bar-baz');
    expect(hash1).toEqual(hash2);
  });

  it('returns undefined if anything but a non-empty string is passed', () => {
    expect(hashFromString()).toEqual(null);
    expect(hashFromString('')).toEqual(null);
    expect(hashFromString({})).toEqual(null);
    expect(hashFromString([])).toEqual(null);
  });
});
