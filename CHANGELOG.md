# Changelog

## 0.3.0

* Deprecate `prefixable` and `sldsClasses`
* All components accept `{...rest}`-props and custom `className`
* `Button` now uses flavors instead of `variation`
* `Button`: renamed `is-selected` to `selected`
* `Card`: `header` renamed to `title`
* `Avatar`: Does take a full URL instead of appending to `context.assetBasePath`
* `IconSVG`: assetBasePath is no longer appended `/`. This has to be set in `context.assetBasePath`
* `Menu` / `Picklist` items: `isSelected` renamed to `selected`
* `DataTable/Cell`: `is-resizable` renamed to `resizable`
* `DataTable/Cell`: `dataLabel` renamed to `data-label`
* `Grid/Column`: `*size-of` renamed to `*sizeOf`
* Export `prefixClasses`, `decorators` and `InputRaw`
* Consistent code-style
* Improved test-coverage
* Improved documentation

## 0.2.0

* The detailRow is now optional on <RecordHome>
* Icons now support custom backgrounds

## 0.1.0

* Initial release
