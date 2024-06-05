import React, { useState } from 'react';

function SamList(props) {
    const [type1, setType1] = useState(true);
    const [type2, setType2] = useState(false);
    const [type3, setType3] = useState(false);
    const [type4, setType4] = useState(false);

    function handleType() {
        setType1(props.type === 1);
        setType2(props.type === 2);
        setType3(props.type === 3);
        setType4(props.type === 4);
    }

    return (
        <div className="row col-12 p-3 pe-4 pt-5">
            <div className="col-12 d-flex flex-column justify-content-start">
                {props.item_list.map((item) => (
                    <React.Fragment key={item.key}>
                        <button
                            onClick={() => { props.setType(item.type); handleType(); }}
                            className={`row my-1 p-2 border-1 border-light rounded-2 ${props.isDarkMode ? (item.type === props.type ? "bg-pirple text-light" : "bg-dark text-light bg-opacity-50") : (item.type === props.type ? "bg-pirple text-light" : "bg-light text-dark bg-opacity-50")
                                } navitem`}
                        >
                            <img src={item.imgsrc} alt={item.imgalt} className="col-3" />
                            <h6 className="col-9 m-0 p-0">{item.text}</h6>
                        </button>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default SamList;
