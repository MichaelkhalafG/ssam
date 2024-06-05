import React, { useEffect, useState } from 'react';
import Sam from "../img/sam.png";
import SamList from "./SamList";
import dot from "../img/dot.png";
import text from "../img/text.png";
import box from "../img/square.png";
import ImageDisplay from './ImageDisplay';
import Loader from './Loader';

function SAM({ isDarkMode, toggleMode, FontSize, setFontSize }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [receivedImage, setReceivedImage] = useState(null);
    const [Submitted, setSubmitted] = useState(false);
    const [isfourdots, setIsfourdots] = useState(false);
    const [imageType, setImageType] = useState(1);
    const [dotescout, setDotescout] = useState(1);
    const [dotesIncCout, setDotesIncCout] = useState(1);
    const [dotesUnIncCout, setDotesUnIncCout] = useState(1);
    const [incOrNot, setIncOrNot] = useState(true);
    const [arrayofdotes, setArrayofdotes] = useState([]);
    const [inputLabels, setInputLabels] = useState([]);
    const [rec, setRec] = useState([]);
    const img_id = document.getElementById('img');
    // Function to handle file input change
    // Function to handle file change
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) {
            alert('Please select an image');
            return;
        }
        if (receivedImage !== null) {
            setReceivedImage(null);
            setSubmitted(false);
            img_id.innerHTML = '';
        }
        if (selectedImage === URL.createObjectURL(file)) {
            alert('Please select a different image');
        } else {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const dotsHandle = async (event) => {
        if (receivedImage !== null) {
            setReceivedImage(null);

            img_id.innerHTML = '';
        }
        const img = new Image();
        img.src = selectedImage;

        img.onload = async function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = this.width;
            canvas.height = this.height;
            ctx.drawImage(img, 0, 0, this.width, this.height);

            // Convert canvas content to base64-encoded data URL
            const dataURL = canvas.toDataURL('image/jpeg');

            // Convert base64 data URL to raw image data
            const rawData = atob(dataURL.split(',')[1]);

            // Convert raw image data to Uint8Array
            const uint8Array = new Uint8Array(rawData.length);
            for (let i = 0; i < rawData.length; i++) {
                uint8Array[i] = rawData.charCodeAt(i);
            }

            // Create a FormData object to send the image data
            const formData = new FormData();

            // Append necessary data to the FormData object
            formData.append('img_file', new Blob([uint8Array]));
            formData.append('dotes', arrayofdotes);
            formData.append('inputLabels', inputLabels);
            const endpointUrl = 'http://localhost:8000/';
            // Send the FormData to the server using fetch
            try {
                const response = await fetch(endpointUrl, {
                    method: 'POST',
                    body: formData,
                    mode: 'cors',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Convert response to Blob
                const blob = await response.json();

                // Convert Blob to data URL
                const data = blob;
                console.log(data);


                // Set the received image as the received image state
                setReceivedImage(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error.message);
            }
        };
    }
    const handleSamFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) {
            alert('Please select an image');
            return;
        }
        if (receivedImage !== null) {
            setReceivedImage(null);

            img_id.innerHTML = '';
        }

        // Set the selected image
        if (selectedImage === URL.createObjectURL(file)) {
            alert('Please select a different image');
        } else {
            setSelectedImage(URL.createObjectURL(file));
        }

        const img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = async function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = this.width;
            canvas.height = this.height;
            ctx.drawImage(img, 0, 0, this.width, this.height);

            // Convert canvas content to base64-encoded data URL
            const dataURL = canvas.toDataURL('image/jpeg');

            // Convert base64 data URL to raw image data
            const rawData = atob(dataURL.split(',')[1]);

            // Convert raw image data to Uint8Array
            const uint8Array = new Uint8Array(rawData.length);
            for (let i = 0; i < rawData.length; i++) {
                uint8Array[i] = rawData.charCodeAt(i);
            }

            // Create a FormData object to send the image data
            const formData = new FormData();

            // Append necessary data to the FormData object
            formData.append('img_file', new Blob([uint8Array]));

            const endpointUrl = 'http://localhost:8000/';
            // Send the FormData to the server using fetch
            try {
                const response = await fetch(endpointUrl, {
                    method: 'POST',
                    body: formData,
                    mode: 'cors',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Convert response to Blob
                const blob = await response.json();

                // Convert Blob to data URL
                const data = blob;
                console.log(data);


                // Set the received image as the received image state
                setReceivedImage(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error.message);
            }
        };
    };

    // Function to handle image type change
    const handleImageTypeChange = async (type) => {
        if (receivedImage !== null) {
            setReceivedImage(null);
        }

        setImageType(type);

        setSubmitted(false);
        setDotesIncCout(1);
        setDotesUnIncCout(1);
        setArrayofdotes([]);
        setInputLabels([]);
        console.log(type);
        if (type === 1) {
            window.location.reload();
        }
    };

    // const handleIncOrNot = () => {
    //     setIncOrNot(!incOrNot);
    // }

    function handleClickdotes(event) {
        const divElement = event.currentTarget;
        const rect = divElement.getBoundingClientRect();

        const divx = rect.left;
        const divy = rect.bottom;

        const x = event.clientX;
        const y = event.clientY;

        const x_rel = parseInt(x - divx);
        const y_rel = parseInt(-(y - divy));
        let dotId;
        let dote1;
        if (incOrNot) {
            dotId = `dotea${dotesIncCout}`;
            dote1 = document.getElementById(dotId);
            setDotesIncCout(dotesIncCout === 30 ? 1 : dotesIncCout + 1);
        } else {
            dotId = `doteb${dotesUnIncCout}`;
            dote1 = document.getElementById(dotId);
            setDotesUnIncCout(dotesUnIncCout === 30 ? 1 : dotesUnIncCout + 1);
        }
        dote1.style.left = `${x_rel}px`;
        dote1.style.bottom = `${y_rel}px`;
        dote1.style.opacity = 1;

        // Check if the element already exists in arrayofdotes
        const existingDotIndex = arrayofdotes.findIndex(element => element.Id === dotId);
        if (existingDotIndex !== -1) {
            // Remove the existing dot from arrayofdotes
            arrayofdotes.splice(existingDotIndex, 1);
        }

        // Check if the element already exists in inputLabels
        const existingLabelIndex = inputLabels.findIndex(element => element.Id === dotId);
        if (existingLabelIndex !== -1) {
            // Remove the existing label from inputLabels
            inputLabels.splice(existingLabelIndex, 1);
        }

        // Add the new dot to arrayofdotes
        arrayofdotes.push({
            "Id": dotId,
            "X": x_rel,
            "Y": y_rel,
        });

        // Add the new label to inputLabels
        inputLabels.push({
            "Id": dotId,
            "label": incOrNot
        });

        console.log(arrayofdotes);
        console.log(inputLabels);
    };

    function removeAllDots() {
        for (let i = 1; i <= 30; i++) {
            const dotId = `dotea${i}`;
            const dote1 = document.getElementById(dotId);
            dote1.style.opacity = 0;
            dote1.style.left = `0px`;
            dote1.style.bottom = `0px`;
        }
        for (let i = 1; i <= 30; i++) {
            const dotId = `doteb${i}`;
            const dote1 = document.getElementById(dotId);
            dote1.style.opacity = 0;
            dote1.style.left = `0px`;
            dote1.style.bottom = `0px`;
        }
        setDotesIncCout(1);
        setDotesUnIncCout(1);
        setArrayofdotes([]);
        setInputLabels([]);
    }
    function removeAllDotsInc() {
        const updatedArrayofdotes = arrayofdotes.filter(element => !element.Id.startsWith('dotea'));
        const updatedInputLabels = inputLabels.filter(element => !element.Id.startsWith('dotea'));

        for (let i = 1; i <= 30; i++) {
            const dotId = `dotea${i}`;
            const dote1 = document.getElementById(dotId);
            dote1.style.opacity = 0;
            dote1.style.left = `0px`;
            dote1.style.bottom = `0px`;
        }

        setDotesIncCout(1);
        setArrayofdotes(updatedArrayofdotes);
        setInputLabels(updatedInputLabels);
    }

    function removeAllDotsUnInc() {
        const updatedArrayofdotes = arrayofdotes.filter(element => !element.Id.startsWith('doteb'));
        const updatedInputLabels = inputLabels.filter(element => !element.Id.startsWith('doteb'));

        for (let i = 1; i <= 30; i++) {
            const dotId = `doteb${i}`;
            const dote1 = document.getElementById(dotId);
            dote1.style.opacity = 0;
            dote1.style.left = `0px`;
            dote1.style.bottom = `0px`;
        }

        setDotesUnIncCout(1);
        setArrayofdotes(updatedArrayofdotes);
        setInputLabels(updatedInputLabels);
    }

    function handleClickr(event) {
        const divElement = event.currentTarget;
        const rect = divElement.getBoundingClientRect();

        const divx = rect.left;
        const divy = rect.bottom;

        const x = event.clientX;
        const y = event.clientY;

        const x_rel = parseInt(x - divx);
        const y_rel = parseInt(-(y - divy));

        const dotId = `doter${dotescout}`;
        const dotElement = document.getElementById(dotId);

        dotElement.style.left = `${x_rel}px`;
        dotElement.style.bottom = `${y_rel}px`;
        dotElement.style.opacity = 1;

        console.log(`Clicked at (${x_rel}, ${y_rel})`);

        // Update dotescout
        setDotescout(dotescout === 4 ? 1 : dotescout + 1);

        // Draw square if all dots are placed
        if (dotescout === 4) {
            const dot1 = document.getElementById('doter1');
            const dot2 = document.getElementById('doter2');
            const dot3 = document.getElementById('doter3');
            const dot4 = document.getElementById('doter4');
            setIsfourdots(true);

            const square = document.getElementById('square');
            square.classList.add('square');

            const left = Math.min(parseInt(dot1.style.left), parseInt(dot2.style.left), parseInt(dot3.style.left), parseInt(dot4.style.left));
            const top = Math.max(parseInt(dot1.style.bottom), parseInt(dot2.style.bottom), parseInt(dot3.style.bottom), parseInt(dot4.style.bottom));
            const bottom = Math.min(parseInt(dot1.style.bottom), parseInt(dot2.style.bottom), parseInt(dot3.style.bottom), parseInt(dot4.style.bottom));
            const right = Math.max(parseInt(dot1.style.left), parseInt(dot2.style.left), parseInt(dot3.style.left), parseInt(dot4.style.left));
            const width = right - left;
            const height = top - bottom;
            rec.push(left, top, bottom, right, width, height);
            console.log(rec);

            square.style.position = 'absolute';
            square.style.left = `${left}px`;
            square.style.bottom = `${bottom}px`;
            square.style.width = `${width}px`;
            square.style.height = `${height}px`;
            square.style.border = '5px solid #A162F7';

            divElement.appendChild(square);

            const img = new Image();
            img.src = selectedImage;

            img.onload = async function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = this.width;
                canvas.height = this.height;
                ctx.drawImage(img, 0, 0, this.width, this.height);

                // Convert canvas content to base64-encoded data URL
                const dataURL = canvas.toDataURL('image/jpeg');

                // Convert base64 data URL to raw image data
                const rawData = atob(dataURL.split(',')[1]);

                // Convert raw image data to Uint8Array
                const uint8Array = new Uint8Array(rawData.length);
                for (let i = 0; i < rawData.length; i++) {
                    uint8Array[i] = rawData.charCodeAt(i);
                }

                // Create a FormData object to send the image data
                const formData = new FormData();

                // Append necessary data to the FormData object
                formData.append('img_file', new Blob([uint8Array]));
                formData.append('rec', rec);
                const endpointUrl = 'http://localhost:8000/';
                // Send the FormData to the server using fetch
                try {
                    const response = await fetch(endpointUrl, {
                        method: 'POST',
                        body: formData,
                        mode: 'cors',
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    // Convert response to Blob
                    const blob = await response.json();

                    // Convert Blob to data URL
                    const data = blob;
                    console.log(data);


                    // Set the received image as the received image state
                    setReceivedImage(data);
                } catch (error) {
                    console.error('There was a problem with the fetch operation:', error.message);
                }
            };
        } else {
            setIsfourdots(false);
            if (receivedImage !== null) {
                setReceivedImage(null);

                img_id.innerHTML = '';
            }
        }
    }

    let item_list3 = [
        {
            imgsrc: Sam,
            imgalt: 'Segment anything',
            text: 'Segment anything',
            key: 1,
            type: 1,
        },
        {
            imgsrc: dot,
            imgalt: 'Using dot annotation',
            text: 'Using dot annotation',
            key: 2,
            type: 2,
        },
        {
            imgsrc: box,
            imgalt: 'Using bounding box annotation',
            text: 'Using bounding box annotation',
            key: 3,
            type: 3,
        },
        {
            imgsrc: text,
            imgalt: 'Using text annotation',
            text: 'Using text annotation',
            key: 4,
            type: 4,
        },
    ];

    return (
        <>
            <div className={`row d-flex justify-content-center m-0 px-2 pt-lg-0 pt-lg-4 pt-5 pb-4`} data-aos="zoom-in" data-aos-duration="1000">
                <h2 className={`text-light col-lg-6 col-10 ${(window.innerWidth > 1100) ? FontSize : "fs-6"} text-center ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} rounded-4 p-2`} >Segment Anything</h2>
            </div>
            <div className={`${(window.innerWidth > 1100) ? 'row' : 'd-flex flex-column-reverse'} m-0 p-0 justify-content-between`}>
                <div className={`row col-md-7 col-12 rounded-3 justify-content-center bg-opacity-50 m-0 p-3`} data-aos="zoom-in" data-aos-duration="1000">
                    {imageType === 1 ?
                        <div className={`${isDarkMode ? "bg-dark" : "bg-light"} d-flex rectangle-container col-12 justify-content-center bg-opacity-50 rounded-4 img-body p-0 m-0`} style={{ overflow: 'hidden', position: "relative", zIndex: 2, opacity: (selectedImage === null) ? 0.5 : 1 }} id='crroping-body' onClick={() => { }}>
                            {selectedImage && <img src={selectedImage} alt="selected" className='m-0 p-0 col-12 rounded-4' style={{ width: '100%', height: '100%', zIndex: 1 }} id='img' />}
                            {receivedImage !== null && <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 2 }} id='seg-img'><ImageDisplay data={receivedImage} /></div>}
                            {(selectedImage !== null && receivedImage === null) ? <Loader /> : null}
                            <div className='rounded-3' style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }}></div>
                        </div>
                        : null
                    }
                    {imageType === 2 ?
                        <div className={`${isDarkMode ? "bg-dark" : "bg-light"} d-flex rectangle-container col-12 justify-content-center bg-opacity-50 rounded-4 img-body p-0 m-0`} style={{ overflow: 'hidden', zIndex: 2, opacity: (selectedImage === null) ? 0.5 : 1 }} id='crroping-body' onClick={handleClickdotes}>
                            {selectedImage && <img src={selectedImage} alt="selected" className='m-0 p-0 col-12 rounded-4' style={{ width: '100%', height: '100%', zIndex: 1 }} id='img' />}
                            {receivedImage !== null && <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 2 }} id='seg-img'><ImageDisplay data={receivedImage} /></div>}
                            {(selectedImage !== null && receivedImage === null && Submitted) ? <Loader /> : null}
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb1'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb2'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb3'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb4'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb5'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb6'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb7'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb8'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb9'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb10'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb11'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb12'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb13'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb14'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb15'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb16'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb17'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb18'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb19'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb20'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb21'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb22'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb23'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb24'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb25'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb26'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb27'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb28'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb29'></div>
                            <div className='dote rounded-circle border border-3 border-danger' style={{ opacity: 0 }} id='doteb30'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea1'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea2'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea3'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea4'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea5'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea6'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea7'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea8'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea9'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea10'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea11'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea12'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea13'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea14'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea15'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea16'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea17'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea18'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea19'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea20'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea21'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea22'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea23'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea24'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea25'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea26'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea27'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea28'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea29'></div>
                            <div className='dote rounded-circle border border-3 border-primary' style={{ opacity: 0 }} id='dotea30'></div>
                            <div className='rounded-3' style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }}></div>
                        </div>
                        : null
                    }
                    {imageType === 3 ?
                        <div className={`${isDarkMode ? "bg-dark" : "bg-light"} d-flex rectangle-container col-12 justify-content-center bg-opacity-50 rounded-4 img-body p-0 m-0`} style={{ overflow: 'hidden', zIndex: 2, opacity: (selectedImage === null) ? 0.5 : 1 }} id='crroping-body' onClick={handleClickr}>
                            {selectedImage && <img src={selectedImage} alt="selected" className='m-0 p-0 col-12 rounded-4' style={{ width: '100%', height: '100%', zIndex: 1 }} id='img' />}
                            {receivedImage !== null && <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 2 }} id='seg-img'><ImageDisplay data={receivedImage} /></div>}
                            {(selectedImage !== null && receivedImage === null && isfourdots) ? <Loader /> : null}
                            {[...Array(4)].map((_, index) => (
                                <div className='dote rounded-circle' style={{ opacity: 0, border: "2px solid #A162F7" }} id={`doter${index + 1}`} key={index}></div>
                            ))}
                            <div className='square' style={{ zIndex: 2 }} id='square'></div>
                            <div className='rounded-3' style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }}></div>
                        </div>
                        : null
                    }
                    {imageType === 4 ?
                        <>
                            <div className={`${isDarkMode ? "bg-dark" : "bg-light"} d-flex rectangle-container col-12 justify-content-center bg-opacity-50 rounded-4 img-body p-0 m-0`} style={{ overflow: 'hidden', zIndex: 2, opacity: (selectedImage === null) ? 0.5 : 1 }} id='crroping-body' onClick={() => { }}>
                                {selectedImage && <img src={selectedImage} alt="selected" className='m-0 p-0 col-12 rounded-4' style={{ width: '100%', height: '100%', zIndex: 1 }} id='img' />}
                                <div className='rounded-3' style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }}></div>
                            </div>
                        </>
                        : null
                    }
                </div>
                {imageType === 4 ?
                    <div className={`col-md-2 border-end border-dark border-1 col-12 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} bg-opacity-50 p-1 rounded-3 d-flex flex-column  box-1`} data-aos="fade-left">
                        <h6 className={`col-12 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} py-4 px-2 rounded-3`}>Choose from the list</h6>
                        <div className={`col-12 ${isDarkMode ? "bg-dark" : "bg-light"} justify-content-around p-0 py-4`} id="checklist">
                            {[...Array(6)].map((_, index) => (
                                <React.Fragment key={index}>
                                    <input className='col-12 my-3' value={index + 1} name="r" type="checkbox" id={`0${index + 1}`} />
                                    <label className='col-12 fs-6 my-3' htmlFor={`0${index + 1}`}>Water spaces</label>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    : null
                }
                {imageType === 2 ?
                    <div className={`col-md-2  border-dark col-12 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} border border-2 bg-opacity-50 p-1 rounded-3 d-flex flex-column box-1`} data-aos="fade-left">
                        <h6 className={`col-12 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}  py-4 px-2 rounded-3 `}>Choose type of dots</h6>
                        <div className={`col-12 ${isDarkMode ? "bg-dark" : "bg-light"} d-flex justify-content-around rounded-3 p-0 py-2 my-1`} >
                            <button onClick={() => { setIncOrNot(true) }} className={`col-10 d-flex my-1 py-2 text-center border-1 border-light  rounded-2 ${isDarkMode ? `${incOrNot ? 'bg-pirple' : 'bg-dark'} text-light` : `${incOrNot ? 'bg-pirple' : 'bg-light'} text-dark`} bg-opacity-50 navitem`}>
                                <h6 className='col-12 m-0 text-center p-0'>Include</h6>
                            </button>
                        </div>
                        <div className={`col-12 ${isDarkMode ? "bg-dark" : "bg-light"} d-flex justify-content-around rounded-3 p-0 py-2 my-1`} >
                            <button onClick={() => { setIncOrNot(false) }} className={`col-10 d-flex my-1 py-2 text-center border-1 border-light  rounded-2 ${isDarkMode ? `${incOrNot ? 'bg-dark' : 'bg-pirple'} text-light` : `${incOrNot ? 'bg-light' : 'bg-pirple'} text-dark`} bg-opacity-50 navitem`}>
                                <h6 className='col-12 m-0 text-center p-0'>Ignore</h6>
                            </button>
                        </div>
                        <div className={`col-12 ${isDarkMode ? "bg-dark" : "bg-light"} d-flex justify-content-around rounded-3 p-0 py-2 my-1`} >
                            <button onClick={() => { removeAllDotsInc(); }} className={`col-10 d-flex my-1 py-2 text-center border-1 border-light  rounded-2 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} bg-opacity-50 navitem`}>
                                <h6 className='col-12 m-0 text-center p-0'>Remove All Included</h6>
                            </button>
                        </div>
                        <div className={`col-12 ${isDarkMode ? "bg-dark" : "bg-light"} d-flex justify-content-around rounded-3 p-0 py-2 my-1`} >
                            <button onClick={() => { removeAllDotsUnInc(); }} className={`col-10 d-flex my-1 py-2 text-center border-1 border-light  rounded-2 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} bg-opacity-50 navitem`}>
                                <h6 className='col-12 m-0 text-center p-0'>Remove All Ignored</h6>
                            </button>
                        </div>
                        <div className={`col-12 ${isDarkMode ? "bg-dark" : "bg-light"} d-flex justify-content-around rounded-3 p-0 py-2 my-1`} >
                            <button onClick={() => { removeAllDots(); }} className={`col-10 d-flex my-1 py-2 text-center border-1 border-light  rounded-2 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} bg-opacity-50 navitem`}>
                                <h6 className='col-12 m-0 text-center p-0'>Remove All Dots</h6>
                            </button>
                        </div>
                        <div className={`col-12 bg-pirple border border-2 d-flex justify-content-around rounded-3 p-0 py-2 my-1`} >
                            <button onClick={() => { dotsHandle(); setSubmitted(true) }} className={`col-10 d-flex my-1 py-2 text-center border-1 border-light  rounded-2 ${isDarkMode ? "bg-black text-light" : "bg-dark text-light"} bg-opacity-50 navitem`}>
                                <h6 className='col-12 m-0 text-center p-0'>Submit</h6>
                            </button>
                        </div>

                    </div>
                    : null
                }

                <div className={`row col-md-3 col-12 rounded-3 justify-content-center ${isDarkMode ? "bg-dark" : "bg-light"} bg-opacity-50 m-0 p-lg-3 p-3`} data-aos="zoom-in" data-aos-duration="1000">
                    <div className={`${isDarkMode ? "bg-dark" : "bg-light"
                        } p-3 rounded-4 rounded-bottom-0 d-flex bg-opacity-50 align-items-center justify-content-center pt-5 pb-1`}>
                        <div className={`input-div ${isDarkMode ? "bg-dark" : "bg-light"
                            } bg-opacity-50`}>
                            {imageType === 1 ? (
                                <>
                                    <input
                                        className="input"
                                        name="file"
                                        type="file"
                                        onChange={handleSamFileChange}
                                        accept="image/*"
                                        style={{ zIndex: 2 }}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        fill="none"
                                        stroke="currentColor"
                                        className="icon"
                                        style={{ zIndex: 1 }}
                                    >
                                        <polyline points="16 16 12 12 8 16"></polyline>
                                        <line y2="21" x2="12" y1="12" x1="12"></line>
                                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                        <polyline points="16 16 12 12 8 16"></polyline>
                                    </svg>
                                </>
                            ) : (
                                <>
                                    <input
                                        className="input"
                                        name="file"
                                        type="file"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        style={{ zIndex: 2 }}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        fill="none"
                                        stroke="currentColor"
                                        className="icon"
                                        style={{ zIndex: 1 }}
                                    >
                                        <polyline points="16 16 12 12 8 16"></polyline>
                                        <line y2="21" x2="12" y1="12" x1="12"></line>
                                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                        <polyline points="16 16 12 12 8 16"></polyline>
                                    </svg>
                                </>
                            )}
                        </div>
                    </div>

                    <div className={`${isDarkMode ? "bg-dark" : "bg-light"} p-3 py-0 rounded-4 rounded-top-0 bg-opacity-50 d-flex align-item-center justify-content-center`}>
                        <SamList item_list={item_list3} type={imageType} setType={handleImageTypeChange} isDarkMode={isDarkMode} />
                    </div>
                </div>
            </div >
        </>
    );
}

export default SAM;
