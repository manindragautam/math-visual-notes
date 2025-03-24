document$.subscribe(({ body }) => {
    renderMathInElement(body, {
        delimiters: [
            { left: "\\[", right: "\\]", display: true },  // Block math
            { left: "\[", right: "\]", display: true },  // Block math
            { left: "\\(", right: "\\)", display: false }, // Inline math
            { left: "$$", right: "$$", display: true }     // Allow $$...$$ for block math
        ],
        throwOnError: false,
    });
});
