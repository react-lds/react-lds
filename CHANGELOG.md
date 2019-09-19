# Changelog

## 8.8.0

* Added: `FileSelector` component
* Fixed: Relaxed strict `CardHeader.title` prop validation

## 8.7.0

* Added: Allow to disable `Listbox` items
* Changed: Replace `aria-hidden` with HTML5's `hidden` attribute in `Accordions`
* Fixed: Upgrade `@storybook/addon-info` to fix breaking markdown code blocks in stories

## 8.6.0

* Added: `ScopedNotification` component
* Added: `VisualPicker` component
* Improved: More flexible `Card` implementation
* Fixed: Addressed various CVEs by upgrading depedencies

## 8.5.0

* Added: Added `GroupedCombobox` and `GroupedComboboxContainer` components

## 8.4.1

* Fixed: Fixed infinite loop in `GroupedComboboxListbox` when more than 100 items are present
* Added: Added `onToggle` callback to `Menu`

## 8.4.0

* Changed: Enable custom styles and add refs to `Row` component

## 8.3.0

* Added: Add `ComboboxGroupedListbox` to support expanding combobox result boxes
* Added: Add `openOnKeyboardFocus` prop to all Comboboxes to control whether receiving keyboard focus should open the selection dropdown
* Added: Add `preventCloseFocus` prop to `Pill` to prevent the close button from receiving keyboard focus
* Fixed: `isReplace` is handled correctly when adding selections via keyboard

## 8.2.0

* Allow passing rest props to `DropdownItem` in `Combobox` (useful in custom renderers)

## 8.1.0

* Upgrade Storybook to 5.0
* Added: Add `SetupAssistant` & `SummaryDetail`
* Added: Add `ProgressIndicator`
* Fixed: Allow callback on `Combobox` labels

## 8.0.0

* Added: **Breaking Change** Comboboxes have been reworked completely into `BaseCombobox/Picklist`, `AutoCompleteCombobox` and `EntityCombobox`. `Combobox` and `ControlledCombobox` have been removed. See the Storybook documentation for details
* Added: **Breaking Change** `Picklist` API has changed and is not compatible with the previous version
* Changed: `Lookup` is now deprecated and will be removed with the next major version
* Changed: `react` and `react-dom` and `moment-*` are now peerDependencies
* Changed: `children` prop in `SpinnerContainer` is now optional

## 7.4.0

* Fixed: Handle `Fragment` as `children` in `ButtonGroup`
* Fixed: Replace scroll wrapper in `DataTable` `stickyHeader` implementation with a CSS based approach

## 7.3.2

* Fixed: Clarify Context in README
* Fixed: Update `react-popper` to resolve issues with misplaced Tooltips on subsequent hovers

## 7.3.1

* Changed: `DataTables`: Revise sticky header
* Added: `Pills`: Support custom rendering
* Added: Consistently allow proptype `node` as label

## 7.3.0

* Upgrade Storybook to 4.0
* Fix: Update `react-popper` to resolve issue with Tooltips not showing on subsequent hovers
* Added: `Button` now supports new flavors `text-destructive` & `outline-brand`
* Added: `ButtonGroup` now supports rendering as a `row`
* Added: `DescriptiveProgressBar` allows adding more information to a `ProgressBar`
* Added: `File` now supports rendering a loading `Spinner`
* Added: `Grid` now allows to only apply `gutters` to direct children when `guttersDirect` is set
* Added: `Input` now supports a `static` variant
* Added: `ProgressBar` now supports rendering a `vertical` variant
* Added: `ProgressRing` now supports the new `active-step` status which renders a blue ring
* Added: `ProgressRing` now supports rendering a version that fills rather than drains
* Added: `Spinner` now supports rendering `inline`
* Added: `Spinner` can now wrap a `SpinnerContainer` when `container` is set to `true`
* Added: `Tabs` now supports setting `size`
* Added: `UserAvatar` and `EntityAvatar` supersede `Avatar` (which is now deprecated)
* Added: `DataTable` now allows hiding the table header
* Changed: Updated various components to accomodate changed LDS specs
* Changed: `ProgressRing` renders as `fill` variant per default. Previous default was `drain`
* Changed: `PageHeaders` have significantly changed in their internal structure

## 7.2.6

* Fixed: `DataTable`: Added horizontal scrolling for table with fixed header
* Changed: `ModalContent`: Added option to collapse padding
* Changed: `MenuSubHeader`: Allow passing elements as children
* Changed: Allow grid components to have arbitrary DOM elements as containers
* Changed: `MediaObject`: Allow passing figureRenderers
* Changed: `ComboboxDropdown`: Added `onInputLabelClick` handler
* Changed: `ComboboxDropdown`: Allow to be empty
* Changed: `ComboboxDropdownItems`: Added back `alwaysDisplay` option to icons
* Changed: `ComboboxDropdownItems`: Allow React elements as children
* Changed: Return early if `ComboboxDropdownList` does not have children
* Changed: Added forwarding refs to Input, Button and Listbox children
* Changed: Upgraded enzyme, jest & moment

## 7.2.5

* Changed: `DataTable`: Added support for fixed header row

## 7.2.4

* Add support for `ComboboxDropdown` email modifier
* Fixed: Opening Menus now does not trigger an incorrect `::focus` state on parent
* Fixed: Loading state now works when two icons are shown or a margin is set on `Input`

## 7.2.3

* Fixed: SplitView: Proper icon for toggle button
* Fixed: SplitView: Removed incorrect shadow of toggle button

## 7.2.2

* New: `SplitView` & `ControlledSplitView` components
* Changed: `Tooltip`: Added support for custom offsets

## 7.2.1

* Changed: `Tooltip`: Added support for `overflow: hidden;` containers
* Fixed: `Input` now does not pass wrong `label` prop to underlying <input> tag
* Fixed: Removed orphan `ObjectHomeRaw` export

## 7.2.0

* Add `Tooltip` and `ControlledTooltip` component
* Export ES modules under `react-lds/es`

## 7.1.1

* Add support for hidden error message for picklists
* Enable custom labels for path stage

## 7.1.0

* Enable single selection for `allowCreate` mode for `Lookup`
* Add custom meta info renderer to `Lookup`

## 7.0.0

* _Menu_: **Breaking** `Menu` has beend reworked completely to comply with HTML5 standards and LDS specifications
* _Menu_: **Breaking** `MenuDropdownList` has been removed. Use `MenuSubHeader` to add titles to the menu
* _Menu_: **Breaking** `MenuDropdownListItem` has been renamed to `MenuItem`
* _Menu_: **Breaking** `Menu` now takes a `height` prop
* _Menu_: **Breaking** Menu has been split into `ControlledMenu` and `Menu`. Use `ControlledMenu` to specify exactly when Menu should be open
* _Menu_: **Breaking** Menu always has to be supplied with a `button` element. `onClick` has to be defined for `ControlledMenu`s
* _Menu_: `onSelect` prop has been added to `Menu` and allows to use a single event listener for all menu item click events
* _Menu_: `renderClosedDropdown` prop has been added to allow not rendering Menu children when closed
* Fix: `Modals` do not crash anymore when `null` is passed as child

## 6.1.0

* New: `Combobox` component
* Changed: `Picklist` now uses `Combobox` internally
* Changed: `File` now shows `title` prop when hovering icon
* Fixed: `Modals` now handle mouse events correctly
* Fixed: `Modals` now handle case when no focussable element is present

## 6.0.3

* Upgrade `moment`, fix `moment-range` errors

## 6.0.2

* Fix menu header markup for long titles
* Fix Modal child type check when using react-hot-loader

## 6.0.1

* Add ESC key support for outside click wrapper

## 6.0.0

* Upgrade to React 16
* Add custom outside click wrapper

## 5.2.0

* Enable usage of `Icon` with latest `<apex:slds />`
* Automatically label responsive table rows
* Fix lodash imports

## 5.1.0

* New: `ScoreIcon` component
* New: `Picklist` can now auto-close when selecting an item
* Changed: `Picklist` default size is now full-width, was `small`
* Fixed: `ObjectHome` doesn't show the menu style if no menu is provided


## 5.0.0

This version is compatible with SLDS 2.5.2 aka `Spring'18` 🌸

### Modal

[Storybook Docs](https://propertybase.github.io/react-lds/?selectedKind=Modal&selectedStory=Default)

Modals have been reimplemented to require less code and support keyboard interactions:

* Modals now trap focus when open and can be closed via `esc`-key
* `Backdrop` has been removed and is now implemented by `Modal`
* `ModalHeader` has been removed. Setting a `title` or `onClose` function in `Modal` will now render a header automatically
* `Modal` now requires an `id`. `ModalContent` will be automatically linked for screenreaders
* `ModalFooter` now will render a `cancel` button automatically when an `onClose` callback is present on `Modal`. You can set the button label via `closeButtonLabel` or hide the button via `hideCloseButton`
* The `Modal` is assumed to be uncloseable if no `onClose` callback is present. No close buttons will be rendered in this case
* Modals now support setting the `transitionStyle` that controls animations when opening and closing
* `Prompt` has been updated to reflect the changes to `Modal`

### Tabs

[Storybook Docs](https://propertybase.github.io/react-lds/?selectedKind=Tabs&selectedStory=Default)

Tabs have been reimplented and now support keyboard interactions:

* Added a `Tabs` component that renders an arbitrary number of `Tab` children. Each `Tab` should have an `id`, `title` and `children`
* Added a `ControlledTabs` component that does not handle events itself. `ControlledTabs` is the underlying implementation of `Tabs`
* Invisible tabs now render `null` instead of their `children`. You can change that behavior by setting `renderInvisibleTabs` to `true`
* The Tab title can be rendered via a `renderTitle` function, allowing icons and other content in the tab links
* Tabs now handle focus correctly and can be navigated via the `arrow` keys

### Buttons

[Storybook Docs: Button](https://propertybase.github.io/react-lds/?selectedKind=Button&selectedStory=Default) | [Storybook Docs: IconButton](https://propertybase.github.io/react-lds/?selectedKind=IconButton&selectedStory=Default)

Buttons have been reimplemented to have a more consistent and declarative API. New shortcut props and better defaults require less boilerplate code:

* The library now exports `Button` and `IconButton` components. `IconButton` handles buttons that only consist of icons while `Button` handles standard buttons and buttons that render a combination of text and icons. All icon-related flavors have been moved to `IconButton` and have been consolidated in the props `border`, `size`, `container` and `more`. Stories have been added to document correct handling of common use cases
* `Button` and `IconButton` now support rendering icons via shortcut props. You can render an icon by setting `icon` and `sprite` props on the `Button` or `IconButton`. `Button` also supports setting an `iconPosition` this way
* Setting `title` will automatically set `Button` text and a `title`-tooltip. If you want to render another piece of text, use `children` to set it
* `StatefulButton` now exports a `StatefulButtonState` to set `selected`, `not-selected` and `focus` states. Configuration objects have been removed
* `StatefulIconButton` has been added to handle `IconButton`s with a `selected` prop
* `CheckboxButton` has been added
* `ButtonGroup` can now be renders as a `list`

### MediaObject

[Storybook Docs](https://propertybase.github.io/react-lds/?selectedKind=MediaObject&selectedStory=Default)

* Removed `flavor` in favor of `center` and `responsive` props

### Slider

[Storybook Docs](https://propertybase.github.io/react-lds/?selectedKind=Form&selectedStory=Slider)

* `Slider` has been added to support range inputs

### Bugfixes

* _Carousel_: only update `children` if their content changes

## 4.2.1

* import lodash modules from main package
* add `Grid` + `Column` order prop
* add size property to `Picklist`
* add full-width support to `PicklistDropdown`

## 4.2.0

* _Carousel_: carousel image can be rendered as background image

## 4.1.0

* add _CheckboxToggle_
* _Accordion_: allow multiple sections to be open simultaneously
* _Carousel_: prevent indicator click event from leaking outside the carousel

## 4.0.0

This version is compatible with SLDS 2.5.0 aka `Winter'18` ⛄

### New Components

* add _BrandBand_
* add _Carousel_
* add _ProgressRing_

### Breaking Changes

* _Alert_: **Breaking** `Notification` is now correctly named as `Alert`
* _Badge_: **Breaking** `<Badge />` now uses `children` instead of `label`
* _Grid_: **Breaking** alignment flavors have been moved to `align` prop
* _Grid_: **Breaking** vertical alignment flavors have been moved to `verticalAlign`
* _Grid_: **Breaking** pullPadding flavors have been moved to `pullPadding` prop
* _Column_: **Breaking** `flavors` & `align` have been deprecated

### Improvements

* _Alert_: icon sizes are automatically applied to `Alert` icons
* _Alert_: `Toasts` no longer are forced to display a texture
* _Badge_: add support for icons in Badges
* _Card_: passing `icon` names, `sprite` and `body` has been deprecated
* _Card_: it is now possible to pass `<Icon />`s as `icon`
* _Card_: it is now possible to pass `children` instead of `body`
* _Card_: added `boundary` prop
* _Grid_: added `gutters` prop
* _Icon/IconSVG_: add `xx-small` size, add missing `medium` size
* _ProgressBar_: add `success` prop
* _ProgressBar_: add support for configuring `assistiveLabel`
* _ProgressBar_: add support for settin `min` & `max`
* _Spinner_: add `delayed` prop
* _Spinner_: add support for configuring `assistiveLabel`
* _Tabs_: it is now possible to render Tabs as Card by passing the `styled` prop

### Fixes

* _Container_: Fix fluid containers not filling the container
* _DatePicker_: Fix flavor usage in `Icons`
* _Prompt_: Add missing `onClickClose` prompt

## 3.3.0

* Feature: add Radio, RadioGroup and RadioRaw components
* Feature: Button can render as `a` DOM element if given a `href` prop
* Improvement: new story for horizontal and stacked forms
* Fix: Lookup did unnecessary re-renderings on click outside

## 3.2.0

* Improve storybook (new Story for Lookup)
* DataTable now supports a cell data getter
* Form element labels can include JSX now
* Fix: DataTable wasn't rendering some columns in certain situations

## 3.1.2

* Fix: bugs relating to removed `propTypes`:
  * `Accordion`
  * `DataTable`
  * `Lookup`
  * `Menu`
  * `PageHeader`
  * `Popover`
  * `Tab`

## 3.1.1

* Support sort indicator prop in `DataTable`
* Fix: missing export of `ObjectHomeRaw`
* Fix: usage of flavors and wrong default props in several places

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
    * `Box`
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
