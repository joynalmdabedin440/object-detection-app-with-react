export const renderPredictions = (predictions, context) => {
    // Clear the previous drawings from the canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    // Set font options
    const font = "16px sans-serif"
    context.font = font
    context.textBaseline = "top"

    predictions.forEach((prediction) => {
        const [x, y, width, height] = prediction['bbox']
        
        const isPerson = prediction.class === "person"
        //bounding box
        context.strokeStyle = isPerson ? "red" : "blue"
        context.lineWidth = 4
        context.strokeRect(x, y, width, height)
        //fill the color
        context.fillStyle = `rgba(255, 0, 0,${isPerson ? 0.5 : 0.2} )`
        context.fillRect(x, y, width, height)

    })
}         