# Changelog

## 3.1.0

* Fix empty npm release, use this instead of `3.0.0`

## 3.0.0

### Added

* `MediaObject` add large size
* `Prompt` add theming

### Changed / Fixed

* **Breaking:** Flavor usage
    * `Button`
    * DataTable/`Table`
    * Grid/`Column`, `Container`, `Grid`
    * Images/`Avatar`
    * `MediaObject`
    * Modal/`Backdrop`, `Modal`, `ModalFooter`
    * `Notification`
    * Pill/`Pill`, `PillContainer`
    * `ProgressBar`
    * `Spinner`
    * `StatefulButton`
    * `VerticalNavigation`

* **Breaking:** Size usage
    * `Button`
    * Grid/`Container`
    * `MediaObject`

* **Breaking:** Theme usage
    * `Badge`
    * `Box`
    * `Notification`
    * `Popover`

* **Breaking:** Variation usage
    * DataTable/`Row`, `Table`
    * Grid/`Column`, `Grid`
    
* ObjectHome Menu dropdown position is now default (left)
* Components that use `enhanceWithClickOutside` are now importable without that functionality by using `import *Component*Raw as *Component*`
* Bugfix: Picklist down-icon now opens Picklist
* **Breaking:** `Popover` renamed customLayout to customHeaderTheme
* **Breaking:** Disallow `IconSVG` to have a background

### Removed

* Removed Navigation Component
* Remove circle boolean, LDS sets it automatically for `action` icons
=======
## 2.1.1

* Enhance Lookups with optional labels, add required and error state

## 2.1.0

* Additional display props for Datepicker (`className` and `disabled`)
* Enable tooltips for menu
* Add custom renderer callback for `Lookup` pills
* Bugfix: rendering of mulitple columns in `Lookup` in table mode

## 2.0.3

* Add option for disabling error message display
* Add read only Inputs
* Bugfix: Pill without close Button
* Bugfix: Fix IconSVG background

## 2.0.2

* Bugfix: Fix PageHeader RecordHome
* Bugfix: Fix DropDownMenuItem children proptype

## 2.0.1

* Add `skip_cleanup: true` to `.travis.yml` to prevent directory reset
* Publish react-lds version 2.0.0 as 2.0.1

## 2.0.0

### Added

* Add support for LDS `2.3.1`, migrate to new `_flavors`
* Add `Accordion`
* Add `Expdandable Section`
* Add `File`
* Add `Path`
* Add `ProgressBar`
* Add `StatefulButton`
* Add `VerticalNavigation`

### Removed

* **Breaking:** Remove $css-prefix and update components
* **Breaking:** Remove `Navigation` (superseded by `VerticalNavigation`)
* Remove `PromptForTouch`

### Fixed

* Make header in `Card` optional
* Support new `Spinner` sizes
* Support `Spinner`-containers
* Support new ARIA-specs
* Use `Listbox` in PillContainers
* Use new `combobox` markup in `Lookup`
* Use new `combobox` markup in `Picklist`
* Add `padded` flavor for `Column`
* Fix `ExpandableSection`

## 1.1.12
* Use title attribute as tooltip for button component

## 1.1.11
* Add onClickClose handler for Notifications (thanks @frontendloader)
* Datepicker: Fix highlighted date
* Datepicker: Fix required prop
* Datepicker: Fix focus event

## 1.1.10
* Add locale and timezone support for `Datepicker`. Add optional `date` prop to use the `Datepicker` as a controlled component.

## 1.1.9
* Add opt-in support for controlled lookup selection. `Lookup` selection can now be set from outside via the `selection` prop (now for real)
* Allow bare `<Inputs />`
* Bugfix: reset internal selection if the load callback changes (now for real)
* Bugfix: Fix non-relative imports in src

## 1.1.8
* Bugfix: Revert Lookup component behavior to version `1.1.6`.

## 1.1.7
* Add opt-in support for controlled lookup selection. `Lookup` selection can now be set from outside via the `selection` prop
* Enable opt-out from `Cell` truncation via the `truncate` prop
* Make the datepicker a controlled component and add an input field
* Bugfix: reset internal selection if the load callback changes

## 1.1.6
* Add option to hide input labels for `Checkbox`, `CheckboxRaw`,
  `Select`, `Textarea`

## 1.1.5
* Compatibility with react 15.5

## 1.1.4
* Remove deprecated lodash method

## 1.1.3
* Add option to hide input labels

## 1.1.2
* Fix icon colors for selected picklist items
* Update Column layout

## 1.1.1
* Fix Popover font style

## 1.1.0
* Add Popover Component
* Bugfixes

## 1.0.11
* Improve Popover Component
* Bugfix: Make renderWeekHeader in Datepicker static

## 1.0.10
* Add Popover Component
* Bugfix: Adjust Datepicker day format test

## 1.0.9
* Update Lookup Component

## 1.0.8
* Update Datepicker

## 1.0.7
* Switch to yarn
* Add Datepicker Component

## 1.0.6
* Deprecate DockedComposer
* Add checkboxes
* LDS 2.1.3
* Navigation Component

## 1.0.5
* Prop to disable text alignment in Email Component
* Prop to disable send button in Email Component
* Jest16 / newest eslint

## 1.0.4
* Button Labels in Dropdown Menu

## 1.0.3

* Allow custom buttons in <Email>-Footer
* Add Advanced Lookup Table Layout for <Lookup>
* Lock crucial dependencies to patch-release-range

## 1.0.2

* Make Text Content of Email Component available.
* Update Quill to final 1.0.0

## 1.0.1

* 1.0.0 seems to have been already released.

## 1.0.0

* Make everything ready for public release
* Cleanup of Documentation
* Cleanup of Components
* Cleanup of Tests
* Removal of prefixable HOC

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
