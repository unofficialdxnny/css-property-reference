document.addEventListener("DOMContentLoaded", () => {
    const properties = [
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
