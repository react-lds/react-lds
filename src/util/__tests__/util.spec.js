import { getFlavorClasses, prefix } from '../';

describe('prefix()', () => {
  const context = { cssPrefix: 'slds-' };

  it('should prefix a single class', () => {
    const foo = prefix('foo', context.cssPrefix);
    expect(foo).toBe(`${context.cssPrefix}foo`);
  });

  it('should prefix multiple classes', () => {
    const foo = prefix('foo bar', context.cssPrefix);
    expect(foo).toBe(`${context.cssPrefix}foo ${context.cssPrefix}bar`);
  });

  it('supports additional non-prefixed classes', () => {
    const classes = prefix('foo bar', context.cssPrefix, 'wub-test');
    expect(classes).toEqual(
      `${context.cssPrefix}foo ${context.cssPrefix}bar wub-test`
    );
  });

  it('is robust against undefined additional classes', () => {
    const classes = prefix('foo', context.cssPrefix, undefined);
    expect(classes).toEqual(`${context.cssPrefix}foo`);
  });
});

describe('getFlavorClasses()', () => {
  const base = 'base';
  const validFlavors = [
    'foo',
    'bar',
  ];

  it('returns an array of flavor className', () => {
    expect(
      getFlavorClasses(base, { foo: true, bar: true }, validFlavors)
    ).toEqual([
      `${base}--foo`,
      `${base}--bar`,
    ]);
  });

  it('does not render other boolean props as flavors', () => {
    expect(
      getFlavorClasses(base, { foo: true, someProp: true }, validFlavors)
    ).toEqual([`${base}--foo`]);
  });

  it('omits falsy flavors', () => {
    expect(
      getFlavorClasses(base, { foo: true, bar: false }, validFlavors)
    ).toEqual([`${base}--foo`]);
  });
});
