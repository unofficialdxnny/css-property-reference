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
        // Add more CSS properties as needed
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
