import React, { useRef, useEffect } from 'react';

function ImageDisplay({ data }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current && data && data.prediction) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                const predictionArray = data.prediction;
                // Determine the dimensions of the data
                const width = predictionArray[0].length;
                const height = predictionArray.length;

                // Set canvas dimensions
                canvasRef.current.width = width;
                canvasRef.current.height = height;

                // Iterate through the data and set pixel values accordingly
                for (let y = 0; y < height; y++) {
                    for (let x = 0; x < width; x++) {
                        const pixelData = predictionArray[y][x];
                        ctx.fillStyle = `rgb(${pixelData.join(',')})`;
                        ctx.fillRect(x, y, 1, 1);
                    }
                }
            }
        }
    }, [data]);

    return (
        <div className='m-0 p-0 col-12 rounded-4' style={{ width: '100%', height: '100%', zIndex: 2 }} data-aos="zoom-in">
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', zIndex: 2 }} />
        </div>
    );
}

export default ImageDisplay;