
import { getClassesWithFlavors, prefix } from '../';
import { cssPrefix } from '../../global';

describe('prefix()', () => {
  it('should prefix a single class', () => {
    const foo = prefix('foo');
    expect(foo).toBe(`${cssPrefix}foo`);
  });

  it('should prefix multiple classes', () => {
    const foo = prefix('foo bar');
    expect(foo).toBe(`${cssPrefix}foo ${cssPrefix}bar`);
  });
});

describe('getClassesWithFlavors()', () => {
  const base = 'base';

  it('should return base when flavor is undefined', () => {
    const flavor = getClassesWithFlavors(undefined, base);
    expect(flavor).toBe(`${base}`);
  });

  it('should transform a single flavor', () => {
    const flavor = getClassesWithFlavors('bar', base);
    expect(flavor).toBe(`${base} ${base}--bar`);
  });

  it('should transform multiple flavors', () => {
    const flavor = getClassesWithFlavors('foo-bar-baz', base);
    expect(flavor).toBe(`${base} ${base}--foo ${base}--bar ${base}--baz`);
  });
});
