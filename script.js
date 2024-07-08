document.addEventListener("DOMContentLoaded", () => {
const properties = [
    // Existing properties (shown in your code)
    {
        name: "background",
        description: "Sets the background properties of an element.",
        usage: "background: color image position/size repeat origin attachment clip;"
    },
    {
        name: "color",
        description: "Sets the color of the text.",
        usage: "color: color;"
    },
    {
        name: "margin",
        description: "Sets the margin area on all four sides of an element.",
        usage: "margin: length|percentage|auto;"
    },
    {
        name: "padding",
        description: "Sets the padding area on all four sides of an element.",
        usage: "padding: length|percentage;"
    },
    {
        name: "border",
        description: "Sets the border properties of an element.",
        usage: "border: width style color;"
    },
    // Add more properties below
    {
        name: "font-size",
        description: "Sets the size of the font.",
        usage: "font-size: length|percentage|larger|smaller|initial|inherit;"
    },
    {
        name: "width",
        description: "Sets the width of an element.",
        usage: "width: length|percentage|auto|initial|inherit;"
    },
    {
        name: "height",
        description: "Sets the height of an element.",
        usage: "height: length|percentage|auto|initial|inherit;"
    },
    {
        name: "display",
        description: "Specifies the display behavior of an element.",
        usage: "display: none|block|inline|inline-block|flex|grid|initial|inherit;"
    },
    {
        name: "position",
        description: "Specifies the type of positioning method used for an element.",
        usage: "position: static|relative|absolute|fixed|sticky|initial|inherit;"
    },
    {
        name: "top",
        description: "Specifies the top position of an element.",
        usage: "top: length|percentage|auto|initial|inherit;"
    },
    {
        name: "right",
        description: "Specifies the right position of an element.",
        usage: "right: length|percentage|auto|initial|inherit;"
    },
    {
        name: "bottom",
        description: "Specifies the bottom position of an element.",
        usage: "bottom: length|percentage|auto|initial|inherit;"
    },
    {
        name: "left",
        description: "Specifies the left position of an element.",
        usage: "left: length|percentage|auto|initial|inherit;"
    },
    {
        name: "float",
        description: "Specifies whether an element should float to the left, right, or not at all.",
        usage: "float: none|left|right|initial|inherit;"
    },
    {
        name: "clear",
        description: "Specifies on which sides of an element floating elements are not allowed to float.",
        usage: "clear: none|left|right|both|initial|inherit;"
    },
    {
        name: "overflow",
        description: "Specifies what happens if content overflows an element's box.",
        usage: "overflow: visible|hidden|scroll|auto|initial|inherit;"
    },
    {
        name: "z-index",
        description: "Specifies the stack order of an element.",
        usage: "z-index: auto|number|initial|inherit;"
    },
    {
        name: "opacity",
        description: "Sets the opacity level for an element.",
        usage: "opacity: number;"
    },
    {
        name: "visibility",
        description: "Specifies whether an element is visible or not.",
        usage: "visibility: visible|hidden|collapse|initial|inherit;"
    },
    {
        name: "background-color",
        description: "Sets the background color of an element.",
        usage: "background-color: color|transparent|initial|inherit;"
    },
    {
        name: "background-image",
        description: "Sets the background image of an element.",
        usage: "background-image: url|none|initial|inherit;"
    },
    {
        name: "background-size",
        description: "Specifies the size of the background images.",
        usage: "background-size: auto|length|percentage|cover|contain|initial|inherit;"
    },
    {
        name: "border-radius",
        description: "Sets the rounded corners of an element's border.",
        usage: "border-radius: length|percentage|initial|inherit;"
    },
    {
        name: "box-shadow",
        description: "Adds shadow effects around an element's frame.",
        usage: "box-shadow: h-offset v-offset blur spread color|none|initial|inherit;"
    },
    {
        name: "text-align",
        description: "Specifies the horizontal alignment of text.",
        usage: "text-align: left|right|center|justify|initial|inherit;"
    },
    {
        name: "text-decoration",
        description: "Specifies the decoration added to text.",
        usage: "text-decoration: none|underline|overline|line-through|initial|inherit;"
    },
    {
        name: "line-height",
        description: "Sets the line height of an element.",
        usage: "line-height: normal|number|length|percentage|initial|inherit;"
    },
    {
        name: "letter-spacing",
        description: "Sets the space between characters in a text.",
        usage: "letter-spacing: normal|length|initial|inherit;"
    },
    {
        name: "word-spacing",
        description: "Sets the space between words in a text.",
        usage: "word-spacing: normal|length|initial|inherit;"
    },
    {
        name: "text-transform",
        description: "Controls the capitalization of text.",
        usage: "text-transform: none|capitalize|uppercase|lowercase|initial|inherit;"
    },
    {
        name: "background-repeat",
        description: "Sets if/how a background image will be repeated.",
        usage: "background-repeat: repeat|repeat-x|repeat-y|no-repeat|initial|inherit;"
    },
    {
        name: "background-position",
        description: "Sets the starting position of a background image.",
        usage: "background-position: x% y%|xpos ypos|initial|inherit;"
    },
    {
        name: "font-family",
        description: "Specifies the font family for text.",
        usage: "font-family: family-name|generic-family|initial|inherit;"
    },
    {
        name: "font-weight",
        description: "Sets the weight (boldness) of the font.",
        usage: "font-weight: normal|bold|bolder|lighter|number|initial|inherit;"
    },
    {
        name: "font-style",
        description: "Specifies the font style for text.",
        usage: "font-style: normal|italic|oblique|initial|inherit;"
    },
    {
        name: "font-variant",
        description: "Specifies whether or not a text should be displayed in a small-caps font.",
        usage: "font-variant: normal|small-caps|initial|inherit;"
    },
    {
        name: "list-style",
        description: "Sets all the list properties in one declaration.",
        usage: "list-style: type position image|initial|inherit;"
    },
    {
        name: "list-style-type",
        description: "Specifies the type of list-item marker.",
        usage: "list-style-type: disc|circle|square|decimal|lower-roman|upper-roman|none|initial|inherit;"
    },
    {
        name: "list-style-position",
        description: "Specifies the position of the list-item markers.",
        usage: "list-style-position: inside|outside|initial|inherit;"
    },
    {
        name: "list-style-image",
        description: "Specifies an image as the list-item marker.",
        usage: "list-style-image: url|none|initial|inherit;"
    },
    // Add more properties below
    {
        name: "border-color",
        description: "Sets the color of the border.",
        usage: "border-color: color|transparent|initial|inherit;"
    },
    {
        name: "box-sizing",
        description: "Defines how the width and height of an element are calculated.",
        usage: "box-sizing: content-box|border-box|initial|inherit;"
    },
    {
        name: "text-shadow",
        description: "Adds shadow to text.",
        usage: "text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;"
    },
    {
        name: "outline",
        description: "Sets the width, style, and color for an outline.",
        usage: "outline: width style color|initial|inherit;"
    },
    {
        name: "transition",
        description: "Specifies the transition properties for an element.",
        usage: "transition: property duration timing-function delay|initial|inherit;"
    },
    {
        name: "transform",
        description: "Applies a 2D or 3D transformation to an element.",
        usage: "transform: transform-function|none|initial|inherit;"
    },
    {
        name: "cursor",
        description: "Specifies the type of cursor to be displayed.",
        usage: "cursor: value|initial|inherit;"
    },
    {
        name: "pointer-events",
        description: "Specifies whether or not an element should react to pointer events.",
        usage: "pointer-events: auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit;"
    },
    {
        name: "white-space",
        description: "Specifies how white-space inside an element is handled.",
        usage: "white-space: normal|nowrap|pre|pre-line|pre-wrap|initial|inherit;"
    },
    {
        name: "text-overflow",
        description: "Specifies how overflowed content that is not displayed should be signaled to the user.",
        usage: "text-overflow: clip|ellipsis|string|initial|inherit;"
    },
    {
        name: "border-collapse",
        description: "Specifies whether cells inside a table have shared or separate borders.",
        usage: "border-collapse: collapse|separate|initial|inherit;"
    },
    {
        name: "border-spacing",
        description: "Sets the distance between the borders of adjacent cells.",
        usage: "border-spacing: length|initial|inherit;"
    },
    {
        name: "caption-side",
        description: "Specifies the placement of a table caption.",
        usage: "caption-side: top|bottom|initial|inherit;"
    },
    {
        name: "empty-cells",
        description: "Specifies how empty cells in a table are rendered.",
        usage: "empty-cells: show|hide|initial|inherit;"
    },
    {
        name: "table-layout",
        description: "Sets the algorithm used to lay out table cells, rows, and columns.",
        usage: "table-layout: auto|fixed|initial|inherit;"
    },
    {
        name: "vertical-align",
        description: "Sets the vertical alignment of an element.",
        usage: "vertical-align: baseline|length|sub|super|top|text-top|middle|bottom|text-bottom|initial|inherit;"
    },
    {
        name: "text-align-last",
        description: "Specifies how the last line of a block or a line right before a forced line break is aligned when 'text-align' is 'justify'.",
        usage: "text-align-last: auto|left|right|center|justify|start|end|initial|inherit;"
    },
    {
        name: "text-justify",
        description: "Specifies the justification method used when 'text-align' is 'justify'.",
        usage: "text-justify: auto|inter-word|inter-character|none|initial|inherit;"
    },
    {
        name: "text-indent",
        description: "Specifies the indentation of the first line in a text block.",
        usage: "text-indent: length|initial|inherit;"
    },
    {
        name: "box-decoration-break",
        description: "Specifies how the background, padding, border, and border-image are applied if the box for the element is split into multiple boxes.",
        usage: "box-decoration-break: slice|clone|initial|inherit;"
    },
    {
        name: "word-break",
        description: "Specifies where to break lines within words.",
        usage: "word-break: normal|break-all|keep-all|initial|inherit;"
    },
    {
        name: "word-wrap",
        description: "Allows long words to be able to be broken and wrap onto the next line.",
        usage: "word-wrap: normal|break-word|initial|inherit;"
    },
    {
        name: "hyphens",
        description: "Controls whether hyphenation is allowed to create more readable words in long blocks of text.",
        usage: "hyphens: none|manual|auto|initial|inherit;"
    },
    {
        name: "text-align-all",
        description: "Specifies the alignment of text for all lines inside a block element.",
        usage: "text-align-all: start|end|left|right|center|justify|match-parent|initial|inherit;"
    },
    {
        name: "text-orientation",
        description: "Defines the orientation of the text in a line.",
        usage: "text-orientation: mixed|upright|sideways-right|sideways-left|use-glyph-orientation|initial|inherit;"
    },
    {
        name: "text-combine-upright",
        description: "Specifies the combination of multiple characters into the space of a single character.",
        usage: "text-combine-upright: none|all|digits|initial|inherit;"
    },
    {
        name: "writing-mode",
        description: "Specifies whether lines of text are laid out horizontally or vertically.",
        usage: "writing-mode: horizontal-tb|vertical-rl|vertical-lr|initial|inherit;"
    },
    {
        name: "text-underline-position",
        description: "Specifies the position of the underline which is set using the 'text-decoration' property.",
        usage: "text-underline-position: auto|under|left|right|under right|under left|initial|inherit;"
    },
    {
        name: "text-orientation",
        description: "Defines the orientation of the text in a line.",
        usage: "text-orientation: mixed|upright|sideways-right|sideways-left|use-glyph-orientation|initial|inherit;"
    },
    {
        name: "image-rendering",
        description: "Sets the image-rendering method for an element.",
        usage: "image-rendering: auto|crisp-edges|pixelated|initial|inherit;"
    },
    {
        name: "backdrop-filter",
        description: "Applies graphical effects such as blurring or color shifting to the area behind the element.",
        usage: "backdrop-filter: none|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia|url|initial|inherit;"
    },
    {
        name: "object-fit",
        description: "Specifies how the contents of a replaced element should be fitted to the box established by its used height and width.",
        usage: "object-fit: fill|contain|cover|none|scale-down|initial|inherit;"
    },
    {
        name: "object-position",
        description: "Sets the initial position of the replaced content relative to its box.",
        usage: "object-position: x% y%|left|center|right|top|bottom|initial|inherit;"
    },
    {
        name: "resize",
        description: "Specifies whether or not an element is resizable by the user.",
        usage: "resize: none|both|horizontal|vertical|initial|inherit;"
    },
    {
        name: "user-select",
        description: "Specifies whether the text of an element can be selected.",
        usage: "user-select: none|auto|text|all|contain|initial|inherit;"
    },
    {
        name: "scroll-behavior",
        description: "Specifies the smoothness of a scroll motion.",
        usage: "scroll-behavior: auto|smooth|initial|inherit;"
    },
    {
        name: "scroll-snap-type",
        description: "Defines how snap scrolling behaves, enforcing strict snap positions or allowing fluid scrolling.",
        usage: "scroll-snap-type: none|mandatory|proximity|initial|inherit;"
    },
    {
        name: "scroll-snap-align",
        description: "Defines the alignment of snap points on the snap container’s snapport.",
        usage: "scroll-snap-align: none|start|end|center|initial|inherit;"
    },
    {
        name: "scroll-snap-stop",
        description: "Determines whether the scroll container is allowed to snap to snap points.",
        usage: "scroll-snap-stop: normal|always|initial|inherit;"
    },
    {
        name: "scroll-padding",
        description: "Defines offsets for the scroll snap coordinates, effectively extending the snapping area.",
        usage: "scroll-padding: length|auto|initial|inherit;"
    },
    {
        name: "scroll-margin",
        description: "Sets the margin for the snapport’s block and inline axis.",
        usage: "scroll-margin: length|auto|initial|inherit;"
    },
    {
        name: "aspect-ratio",
        description: "Specifies the proportional relationship between an element's width and its height.",
        usage: "aspect-ratio: auto|width/height|initial|inherit;"
    },
    {
        name: "counter-increment",
        description: "Increases or decreases the value of one or more CSS counters.",
        usage: "counter-increment: none|identifier|initial|inherit;"
    },
    {
        name: "counter-reset",
        description: "Creates or resets one or more CSS counters.",
        usage: "counter-reset: none|identifier|initial|inherit;"
    },
    {
        name: "will-change",
        description: "Provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed.",
        usage: "will-change: auto|scroll-position|contents|transform|top|left|right|bottom|width|height|opacity|initial|inherit;"
    },
    {
        name: "overscroll-behavior",
        description: "Controls how the browser behaves when reaching the boundary of a scrolling area.",
        usage: "overscroll-behavior: auto|contain|none|initial|inherit;"
    },
    {
        name: "text-emphasis",
        description: "Sets text emphasis styling (like underline and dots) to Japanese text.",
        usage: "text-emphasis: string|dot|circle|double-circle|triangle|sesame|auto|initial|inherit;"
    },
    {
        name: "text-justify",
        description: "Specifies the justification method used when 'text-align' is 'justify'.",
        usage: "text-justify: auto|inter-word|inter-character|none|initial|inherit;"
    },
    {
        name: "text-orientation",
        description: "Defines the orientation of the text in a line.",
        usage: "text-orientation: mixed|upright|sideways-right|sideways-left|use-glyph-orientation|initial|inherit;"
    },
    {
        name: "text-combine-upright",
        description: "Specifies the combination of multiple characters into the space of a single character.",
        usage: "text-combine-upright: none|all|digits|initial|inherit;"
    },
    {
        name: "text-underline-position",
        description: "Specifies the position of the underline which is set using the 'text-decoration' property.",
        usage: "text-underline-position: auto|under|left|right|under right|under left|initial|inherit;"
    },
    {
        name: "image-rendering",
        description: "Sets the image-rendering method for an element.",
        usage: "image-rendering: auto|crisp-edges|pixelated|initial|inherit;"
    },
    {
        name: "backdrop-filter",
        description: "Applies graphical effects such as blurring or color shifting to the area behind the element.",
        usage: "backdrop-filter: none|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia|url|initial|inherit;"
    },
    {
        name: "object-fit",
        description: "Specifies how the contents of a replaced element should be fitted to the box established by its used height and width.",
        usage: "object-fit: fill|contain|cover|none|scale-down|initial|inherit;"
    },
    {
        name: "object-position",
        description: "Sets the initial position of the replaced content relative to its box.",
        usage: "object-position: x% y%|left|center|right|top|bottom|initial|inherit;"
    },
    {
        name: "resize",
        description: "Specifies whether or not an element is resizable by the user.",
        usage: "resize: none|both|horizontal|vertical|initial|inherit;"
    },
    {
        name: "user-select",
        description: "Specifies whether the text of an element can be selected.",
        usage: "user-select: none|auto|text|all|contain|initial|inherit;"
    },
    {
        name: "scroll-behavior",
        description: "Specifies the smoothness of a scroll motion.",
        usage: "scroll-behavior: auto|smooth|initial|inherit;"
    },
    {
        name: "scroll-snap-type",
        description: "Defines how snap scrolling behaves, enforcing strict snap positions or allowing fluid scrolling.",
        usage: "scroll-snap-type: none|mandatory|proximity|initial|inherit;"
    },
    {
        name: "scroll-snap-align",
        description: "Defines the alignment of snap points on the snap container’s snapport.",
        usage: "scroll-snap-align: none|start|end|center|initial|inherit;"
    },
    {
        name: "scroll-snap-stop",
        description: "Determines whether the scroll container is allowed to snap to snap points.",
        usage: "scroll-snap-stop: normal|always|initial|inherit;"
    },
    {
        name: "scroll-padding",
        description: "Defines offsets for the scroll snap coordinates, effectively extending the snapping area.",
        usage: "scroll-padding: length|auto|initial|inherit;"
    },
    {
        name: "scroll-margin",
        description: "Sets the margin for the snapport’s block and inline axis.",
        usage: "scroll-margin: length|auto|initial|inherit;"
    },
    {
        name: "aspect-ratio",
        description: "Specifies the proportional relationship between an element's width and its height.",
        usage: "aspect-ratio: auto|width/height|initial|inherit;"
    },
    {
        name: "counter-increment",
        description: "Increases or decreases the value of one or more CSS counters.",
        usage: "counter-increment: none|identifier|initial|inherit;"
    },
    {
        name: "counter-reset",
        description: "Creates or resets one or more CSS counters.",
        usage: "counter-reset: none|identifier|initial|inherit;"
    },
    {
        name: "will-change",
        description: "Provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed.",
        usage: "will-change: auto|scroll-position|contents|transform|top|left|right|bottom|width|height|opacity|initial|inherit;"
    },
    {
        name: "overscroll-behavior",
        description: "Controls how the browser behaves when reaching the boundary of a scrolling area.",
        usage: "overscroll-behavior: auto|contain|none|initial|inherit;"
    },
    {
        name: "text-emphasis",
        description: "Sets text emphasis styling (like underline and dots) to Japanese text.",
        usage: "text-emphasis: string|dot|circle|double-circle|triangle|sesame|auto|initial|inherit;"
    },
    {
        name: "text-justify",
        description: "Specifies the justification method used when 'text-align' is 'justify'.",
        usage: "text-justify: auto|inter-word|inter-character|none|initial|inherit;"
    },
    {
        name: "text-orientation",
        description: "Defines the orientation of the text in a line.",
        usage: "text-orientation: mixed|upright|sideways-right|sideways-left|use-glyph-orientation|initial|inherit;"
    },
    {
        name: "text-combine-upright",
        description: "Specifies the combination of multiple characters into the space of a single character.",
        usage: "text-combine-upright: none|all|digits|initial|inherit;"
    },
    {
        name: "text-underline-position",
        description: "Specifies the position of the underline which is set using the 'text-decoration' property.",
        usage: "text-underline-position: auto|under|left|right|under right|under left|initial|inherit;"
    },
    {
        name: "image-rendering",
        description: "Sets the image-rendering method for an element.",
        usage: "image-rendering: auto|crisp-edges|pixelated|initial|inherit;"
    },
    {
        name: "backdrop-filter",
        description: "Applies graphical effects such as blurring or color shifting to the area behind the element.",
        usage: "backdrop-filter: none|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia|url|initial|inherit;"
    },
    {
        name: "object-fit",
        description: "Specifies how the contents of a replaced element should be fitted to the box established by its used height and width.",
        usage: "object-fit: fill|contain|cover|none|scale-down|initial|inherit;"
    },
    {
        name: "object-position",
        description: "Sets the initial position of the replaced content relative to its box.",
        usage: "object-position: x% y%|left|center|right|top|bottom|initial|inherit;"
    },
    {
        name: "resize",
        description: "Specifies whether or not an element is resizable by the user.",
        usage: "resize: none|both|horizontal|vertical|initial|inherit;"
    },
    {
        name: "user-select",
        description: "Specifies whether the text of an element can be selected.",
        usage: "user-select: none|auto|text|all|contain|initial|inherit;"
    },
    {
        name: "scroll-behavior",
        description: "Specifies the smoothness of a scroll motion.",
        usage: "scroll-behavior: auto|smooth|initial|inherit;"
    },
    {
        name: "scroll-snap-type",
        description: "Defines how snap scrolling behaves, enforcing strict snap positions or allowing fluid scrolling.",
        usage: "scroll-snap-type: none|mandatory|proximity|initial|inherit;"
    },
    {
        name: "scroll-snap-align",
        description: "Defines the alignment of snap points on the snap container’s snapport.",
        usage: "scroll-snap-align: none|start|end|center|initial|inherit;"
    },
    {
        name: "scroll-snap-stop",
        description: "Determines whether the scroll container is allowed to snap to snap points.",
        usage: "scroll-snap-stop: normal|always|initial|inherit;"
    },
    {
        name: "scroll-padding",
        description: "Defines offsets for the scroll snap coordinates, effectively extending the snapping area.",
        usage: "scroll-padding: length|auto|initial|inherit;"
    },
    {
        name: "scroll-margin",
        description: "Sets the margin for the snapport’s block and inline axis.",
        usage: "scroll-margin: length|auto|initial|inherit;"
    },
    {
        name: "aspect-ratio",
        description: "Specifies the proportional relationship between an element's width and its height.",
        usage: "aspect-ratio: auto|width/height|initial|inherit;"
    },
    {
        name: "counter-increment",
        description: "Increases or decreases the value of one or more CSS counters.",
        usage: "counter-increment: none|identifier|initial|inherit;"
    },
    {
        name: "counter-reset",
        description: "Creates or resets one or more CSS counters.",
        usage: "counter-reset: none|identifier|initial|inherit;"
    },
    {
        name: "will-change",
        description: "Provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed.",
        usage: "will-change: auto|scroll-position|contents|transform|top|left|right|bottom|width|height|opacity|initial|inherit;"
    },
    {
        name: "overscroll-behavior",
        description: "Controls how the browser behaves when reaching the boundary of a scrolling area.",
        usage: "overscroll-behavior: auto|contain|none|initial|inherit;"
    },
    {
        name: "text-emphasis",
        description: "Sets text emphasis styling (like underline and dots) to Japanese text.",
        usage: "text-emphasis: string|dot|circle|double-circle|triangle|sesame|auto|initial|inherit;"
    },
    {
        name: "text-justify",
        description: "Specifies the justification method used when 'text-align' is 'justify'.",
        usage: "text-justify: auto|inter-word|inter-character|none|initial|inherit;"
    },
    {
        name: "text-orientation",
        description: "Defines the orientation of the text in a line.",
        usage: "text-orientation: mixed|upright|sideways-right|sideways-left|use-glyph-orientation|initial|inherit;"
    },
    {
        name: "text-combine-upright",
        description: "Specifies the combination of multiple characters into the space of a single character.",
        usage: "text-combine-upright: none|all|digits|initial|inherit;"
    },
    {
        name: "text-underline-position",
        description: "Specifies the position of the underline which is set using the 'text-decoration' property.",
        usage: "text-underline-position: auto|under|left|right|under right|under left|initial|inherit;"
    },
    {
        name: "image-rendering",
        description: "Sets the image-rendering method for an element.",
        usage: "image-rendering: auto|crisp-edges|pixelated|initial|inherit;"
    },
    {
        name: "backdrop-filter",
        description: "Applies graphical effects such as blurring or color shifting to the area behind the element.",
        usage: "backdrop-filter: none|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia|url|initial|inherit;"
    },
    {
        name: "object-fit",
        description: "Specifies how the contents of a replaced element should be fitted to the box established by its used height and width.",
        usage: "object-fit: fill|contain|cover|none|scale-down|initial|inherit;"
    },
    {
        name: "object-position",
        description: "Sets the initial position of the replaced content relative to its box.",
        usage: "object-position: x% y%|left|center|right|top|bottom|initial|inherit;"
    },
    {
        name: "resize",
        description: "Specifies whether or not an element is resizable by the user.",
        usage: "resize: none|both|horizontal|vertical|initial|inherit;"
    },
    {
        name: "user-select",
        description: "Specifies whether the text of an element can be selected.",
        usage: "user-select: none|auto|text|all|contain|initial|inherit;"
    },
    {
        name: "scroll-behavior",
        description: "Specifies the smoothness of a scroll motion.",
        usage: "scroll-behavior: auto|smooth|initial|inherit;"
    },
    {
        name: "scroll-snap-type",
        description: "Defines how snap scrolling behaves, enforcing strict snap positions or allowing fluid scrolling.",
        usage: "scroll-snap-type: none|mandatory|proximity|initial|inherit;"
    },
    {
        name: "scroll-snap-align",
        description: "Defines the alignment of snap points on the snap container’s snapport.",
        usage: "scroll-snap-align: none|start|end|center|initial|inherit;"
    },
    {
        name: "scroll-snap-stop",
        description: "Determines whether the scroll container is allowed to snap to snap points.",
        usage: "scroll-snap-stop: normal|always|initial|inherit;"
    },
    {
        name: "scroll-padding",
        description: "Defines offsets for the scroll snap coordinates, effectively extending the snapping area.",
        usage: "scroll-padding: length|auto|initial|inherit;"
    },
    {
        name: "scroll-margin",
        description: "Sets the margin for the snapport’s block and inline axis.",
        usage: "scroll-margin: length|auto|initial|inherit;"
    },
    {
        name: "aspect-ratio",
        description: "Specifies the proportional relationship between an element's width and its height.",
        usage: "aspect-ratio: auto|width/height|initial|inherit;"
    },
    {
        name: "counter-increment",
        description: "Increases or decreases the value of one or more CSS counters.",
        usage: "counter-increment: none|identifier|initial|inherit;"
    },
    {
        name: "counter-reset",
        description: "Creates or resets one or more CSS counters.",
        usage: "counter-reset: none|identifier|initial|inherit;"
    },
    {
        name: "will-change",
        description: "Provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed.",
        usage: "will-change: auto|scroll-position|contents|transform|top|left|right|bottom|width|height|opacity|initial|inherit;"
    },
    {
        name: "overscroll-behavior",
        description: "Controls how the browser behaves when reaching the boundary of a scrolling area.",
        usage: "overscroll-behavior: auto|contain|none|initial|inherit;"
    },
    {
        name: "text-emphasis",
        description: "Sets text emphasis styling (like underline and dots) to Japanese text.",
        usage: "text-emphasis: string|dot|circle|double-circle|triangle|sesame|auto|initial|inherit;"
    },
    {
        name: "text-justify",
        description: "Specifies the justification method used when 'text-align' is 'justify'.",
        usage: "text-justify: auto|inter-word|inter-character|none|initial|inherit;"
    },
    {
        name: "text-orientation",
        description: "Defines the orientation of the text in a line.",
        usage: "text-orientation: mixed|upright|sideways-right|sideways-left|use-glyph-orientation|initial|inherit;"
    },
    {
        name: "text-combine-upright",
        description: "Specifies the combination of multiple characters into the space of a single character.",
        usage: "text-combine-upright: none|all|digits|initial|inherit;"
    },
    {
        name: "text-underline-position",
        description: "Specifies the position of the underline which is set using the 'text-decoration' property.",
        usage: "text-underline-position: auto|under|left|right|under right|under left|initial|inherit;"
    },
    {
        name: "image-rendering",
        description: "Sets the image-rendering method for an element.",
        usage: "image-rendering: auto|crisp-edges|pixelated|initial|inherit;"
    },
    {
        name: "backdrop-filter",
        description: "Applies graphical effects such as blurring or color shifting to the area behind the element.",
        usage: "backdrop-filter: none|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia|url|initial|inherit;"
    },
    {
        name: "object-fit",
        description: "Specifies how the contents of a replaced element should be fitted to the box established by its used height and width.",
        usage: "object-fit: fill|contain|cover|none|scale-down|initial|inherit;"
    },
    {
        name: "object-position",
        description: "Sets the initial position of the replaced content relative to its box.",
        usage: "object-position: x% y%|left|center|right|top|bottom|initial|inherit;"
    },
    {
        name: "resize",
        description: "Specifies whether or not an element is resizable by the user.",
        usage: "resize: none|both|horizontal|vertical|initial|inherit;"
    },
    {
        name: "user-select",
        description: "Specifies whether the text of an element can be selected.",
        usage: "user-select: none|auto|text|all|contain|initial|inherit;"
    },
    {
        name: "scroll-behavior",
        description: "Specifies the smoothness of a scroll motion.",
        usage: "scroll-behavior: auto|smooth|initial|inherit;"
    },
    {
        name: "scroll-snap-type",
        description: "Defines how snap scrolling behaves, enforcing strict snap positions or allowing fluid scrolling.",
        usage: "scroll-snap-type: none|mandatory|proximity|initial|inherit;"
    },
    {
        name: "scroll-snap-align",
        description: "Defines the alignment of snap points on the snap container’s snapport.",
        usage: "scroll-snap-align: none|start|end|center|initial|inherit;"
    },
    {
        name: "scroll-snap-stop",
        description: "Determines whether the scroll container is allowed to snap to snap points.",
        usage: "scroll-snap-stop: normal|always|initial|inherit;"
    },
    {
        name: "scroll-padding",
        description: "Defines offsets for the scroll snap coordinates, effectively extending the snapping area.",
        usage: "scroll-padding: length|auto|initial|inherit;"
    },
    {
        name: "scroll-margin",
        description: "Sets the margin for the snapport’s block and inline axis.",
        usage: "scroll-margin: length|auto|initial|inherit;"
    },
    {
        name: "aspect-ratio",
        description: "Specifies the proportional relationship between an element's width and its height.",
        usage: "aspect-ratio: auto|width/height|initial|inherit;"
    },
    {
        name: "counter-increment",
        description: "Increases or decreases the value of one or more CSS counters.",
        usage: "counter-increment: none|identifier|initial|inherit;"
    },
    {
        name: "counter-reset",
        description: "Creates or resets one or more CSS counters.",
        usage: "counter-reset: none|identifier|initial|inherit;"
    },
    {
        name: "will-change",
        description: "Provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed.",
        usage: "will-change: auto|scroll-position|contents|transform|top|left|right|bottom|width|height|opacity|initial|inherit;"
    },
    {
        name: "overscroll-behavior",
        description: "Controls how the browser behaves when reaching the boundary of a scrolling area.",
        usage: "overscroll-behavior: auto|contain|none|initial|inherit;"
    },
    {
        name: "text-emphasis",
        description: "Sets text emphasis styling (like underline and dots) to Japanese text.",
        usage: "text-emphasis: string|dot|circle|double-circle|triangle|sesame|auto|initial|inherit;"
    },
    {
        name: "text-justify",
        description: "Specifies the justification method used when 'text-align' is 'justify'.",
        usage: "text-justify: auto|inter-word|inter-character|none|initial|inherit;"
    },
    {
        name: "text-orientation",
        description: "Defines the orientation of the text in a line.",
        usage: "text-orientation: mixed|upright|sideways-right|sideways-left|use-glyph-orientation|initial|inherit;"
    },
    {
        name: "text-combine-upright",
        description: "Specifies the combination of multiple characters into the space of a single character.",
        usage: "text-combine-upright: none|all|digits|initial|inherit;"
    },
    {
        name: "text-underline-position",
        description: "Specifies the position of the underline which is set using the 'text-decoration' property.",
        usage: "text-underline-position: auto|under|left|right|under right|under left|initial|inherit;"
    },
    {
        name: "image-rendering",
        description: "Sets the image-rendering method for an element.",
        usage: "image-rendering: auto|crisp-edges|pixelated|initial|inherit;"
    },
    {
        name: "backdrop-filter",
        description: "Applies graphical effects such as blurring or color shifting to the area behind the element.",
        usage: "backdrop-filter: none|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia|url|initial|inherit;"
    },
    {
        name: "object-fit",
        description: "Specifies how the contents of a replaced element should be fitted to the box established by its used height and width.",
        usage: "object-fit: fill|contain|cover|none|scale-down|initial|inherit;"
    },
    {
        name: "object-position",
        description: "Sets the initial position of the replaced content relative to its box.",
        usage: "object-position: x% y%|left|center|right|top|bottom|initial|inherit;"
    },
    {
        name: "resize",
        description: "Specifies whether or not an element is resizable by the user.",
        usage: "resize: none|both|horizontal|vertical|initial|inherit;"
    },
    {
        name: "user-select",
        description: "Specifies whether the text of an element can be selected.",
        usage: "user-select: none|auto|text|all|contain|initial|inherit;"
    },
    {
        name: "scroll-behavior",
        description: "Specifies the smoothness of a scroll motion.",
        usage: "scroll-behavior: auto|smooth|initial|inherit;"
    },
    {
        name: "scroll-snap-type",
        description: "Defines how snap scrolling behaves, enforcing strict snap positions or allowing fluid scrolling.",
        usage: "scroll-snap-type: none|mandatory|proximity|initial|inherit;"
    },
    {
        name: "scroll-snap-align",
        description: "Defines the alignment of snap points on the snap container’s snapport.",
        usage: "scroll-snap-align: none|start|end|center|initial|inherit;"
    },
    {
        name: "scroll-snap-stop",
        description: "Determines whether the scroll container is allowed to snap to snap points.",
        usage: "scroll-snap-stop: normal|always|initial|inherit;"
    },
    {
        name: "scroll-padding",
        description: "Defines offsets for the scroll snap coordinates, effectively extending the snapping area.",
        usage: "scroll-padding: length|auto|initial|inherit;"
    },
    {
        name: "scroll-margin",
        description: "Sets the margin for the snapport’s block and inline axis.",
        usage: "scroll-margin: length|auto|initial|inherit;"
    },
    {
        name: "aspect-ratio",
        description: "Specifies the proportional relationship between an element's width and its height.",
        usage: "aspect-ratio: auto|width/height|initial|inherit;"
    },
    {
        name: "counter-increment",
        description: "Increases or decreases the value of one or more CSS counters.",
        usage: "counter-increment: none|identifier|initial|inherit;"
    },
    {
        name: "counter-reset",
        description: "Creates or resets one or more CSS counters.",
        usage: "counter-reset: none|identifier|initial|inherit;"
    },
    {
        name: "will-change",
        description: "Provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed.",
        usage: "will-change: auto|scroll-position|contents|transform|top|left|right|bottom|width|height|opacity|initial|inherit;"
    },
    {
        name: "overscroll-behavior",
        description: "Controls how the browser behaves when reaching the boundary of a scrolling area.",
        usage: "overscroll-behavior: auto|contain|none|initial|inherit;"
    },
    {
        name: "text-emphasis",
        description: "Sets text emphasis styling (like underline and dots) to Japanese text.",
        usage: "text-emphasis: string|dot|circle|double-circle|triangle|sesame|auto|initial|inherit;"
    },
    {
        name: "text-justify",
        description: "Specifies the justification method used when 'text-align' is 'justify'.",
        usage: "text-justify: auto|inter-word|inter-character|none|initial|inherit;"
    },
    {
        name: "text-orientation",
        description: "Defines the orientation of the text in a line.",
        usage: "text-orientation: mixed|upright|sideways-right|sideways-left|use-glyph-orientation|initial|inherit;"
    },
    {
        name: "text-combine-upright",
        description: "Specifies the combination of multiple characters into the space of a single character.",
        usage: "text-combine-upright: none|all|digits|initial|inherit;"
    },
    {
        name: "text-underline-position",
        description: "Specifies the position of the underline which is set using the 'text-decoration' property.",
        usage: "text-underline-position: auto|under|left|right|under right|under left|initial|inherit;"
    },
    {
        name: "image-rendering",
        description: "Sets the image-rendering method for an element.",
        usage: "image-rendering: auto|crisp-edges|pixelated|initial|inherit;"
    },
    {
        name: "backdrop-filter",
        description: "Applies graphical effects such as blurring or color shifting to the area behind the element.",
        usage: "backdrop-filter: none|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia|url|initial|inherit;"
    },
    {
        name: "object-fit",
        description: "Specifies how the contents of a replaced element should be fitted to the box established by its used height and width.",
        usage: "object-fit: fill|contain|cover|none|scale-down|initial|inherit;"
    },
    {
        name: "object-position",
        description: "Sets the initial position of the replaced content relative to its box.",
        usage: "object-position: x% y%|left|center|right|top|bottom|initial|inherit;"
    },
    {
        name: "resize",
        description: "Specifies whether or not an element is resizable by the user.",
        usage: "resize: none|both|horizontal|vertical|initial|inherit;"
    },
    {
        name: "user-select",
        description: "Specifies whether the text of an element can be selected.",
        usage: "user-select: none|auto|text|all|contain|initial|inherit;"
    },
    {
        name: "scroll-behavior",
        description: "Specifies the smoothness of a scroll motion.",
        usage: "scroll-behavior: auto|smooth|initial|inherit;"
    },
    {
        name: "scroll-snap-type",
        description: "Defines how snap scrolling behaves, enforcing strict snap positions or allowing fluid scrolling.",
        usage: "scroll-snap-type: none|mandatory|proximity|initial|inherit;"
    },
    {
        name: "scroll-snap-align",
        description: "Defines the alignment of snap points on the snap container’s snapport.",
        usage: "scroll-snap-align: none|start|end|center|initial|inherit;"
    },
    {
        name: "scroll-snap-stop",
        description: "Determines whether the scroll container is allowed to snap to snap points.",
        usage: "scroll-snap-stop: normal|always|initial|inherit;"
    },
    {
        name: "scroll-padding",
        description: "Defines offsets for the scroll snap coordinates, effectively extending the snapping area.",
        usage: "scroll-padding: length|auto|initial|inherit;"
    },
    {
        name: "scroll-margin",
        description: "Sets the margin for the snapport’s block and inline axis.",
        usage: "scroll-margin: length|auto|initial|inherit;"
    },
    {
        name: "aspect-ratio",
        description: "Specifies the proportional relationship between an element's width and its height.",
        usage: "aspect-ratio: auto|width/height|initial|inherit;"
    },
    {
        name: "counter-increment",
        description: "Increases or decreases the value of one or more CSS counters.",
        usage: "counter-increment: none|identifier|initial|inherit;"
    },
    {
        name: "counter-reset",
        description: "Creates or resets one or more CSS counters.",
        usage: "counter-reset: none|identifier|initial|inherit;"
    },
    {
        name: "will-change",
        description: "Provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed.",
        usage: "will-change: auto|scroll-position|contents|transform|top|left|right|bottom|width|height|opacity|initial|inherit;"
    },
    {
        name: "overscroll-behavior",
        description: "Controls how the browser behaves when reaching the boundary of a scrolling area.",
        usage: "overscroll-behavior: auto|contain|none|initial|inherit;"
    },
    {
        name: "text-emphasis",
        description: "Sets text emphasis styling (like underline and dots) to Japanese text.",
        usage: "text-emphasis: string|dot|circle|double-circle|triangle|sesame|auto|initial|inherit;"
    },
    {
        name: "text-justify",
        description: "Specifies the justification method used when 'text-align' is 'justify'.",
        usage: "text-justify: auto|inter-word|inter-character|none|initial|inherit;"
    },
    {
        name: "text-orientation",
        description: "Defines the orientation of the text in a line.",
        usage: "text-orientation: mixed|upright|sideways-right|sideways-left|use-glyph-orientation|initial|inherit;"
    },
    {
        name: "text-combine-upright",
        description: "Specifies the combination of multiple characters into the space of a single character.",
        usage: "text-combine-upright: none|all|digits|initial|inherit;"
    }
    ];

    const propertyList = document.getElementById("property-list");

    properties.forEach(property => {
        const propertyDiv = document.createElement("div");
        propertyDiv.classList.add("property");

        const propertyTitle = document.createElement("h2");
        propertyTitle.textContent = property.name;

        const propertyDescription = document.createElement("p");
        propertyDescription.textContent = property.description;

        const propertyUsage = document.createElement("p");
        propertyUsage.innerHTML = `<strong>Usage:</strong> <code>${property.usage}</code>`;

        propertyDiv.appendChild(propertyTitle);
        propertyDiv.appendChild(propertyDescription);
        propertyDiv.appendChild(propertyUsage);

        propertyList.appendChild(propertyDiv);
    });
});
