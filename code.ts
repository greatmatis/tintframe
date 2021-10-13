if (figma.currentPage.selection != 0) { //checking if any frme selected

  for (const frame of figma.currentPage.selection) {
    const rect = figma.createRectangle(); //draw a rectangle
    frame.appendChild(rect) //putting in into frame
    rect.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 0.5 }] //fill it with semi-transparent black
    rect.resize(frame.width, frame.height) //resize it to frame
    rect.constraints = { horizontal: 'SCALE', vertical: 'SCALE' } //setting constraints
    rect.name = "tint" //name for resulting layer
  }
  
} else figma.notify("Select at least one frame that you want to fill") //alerting if no frame selected

figma.closePlugin();