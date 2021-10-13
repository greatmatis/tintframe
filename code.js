if (figma.currentPage.selection != 0) {
    for (const frame of figma.currentPage.selection) {
        const rect = figma.createRectangle();
        frame.appendChild(rect);
        rect.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 0.5 }];
        rect.resize(frame.width, frame.height);
        rect.constraints = { horizontal: 'SCALE', vertical: 'SCALE' };
        rect.name = "tint";
    }
}
else
    figma.notify("Select at least one frame that you want to fill");
figma.closePlugin();
