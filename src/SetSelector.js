import React from 'react';

const setList = [
    { name : "Unstable", code : "UST"},
    { name : "Dominaria", code : "DOM"},
    { name : "Theros", code : "THS"},
];

const SetSelector = (props) => <div class="SetSelector">
    <span className={"SetSelector-title"}>Set</span>
    <select autoFocus={true} required={true} className={"SetSelector-select"}>
        {setList.map(set => <option className={"SetSelector-option"} key={set.code} value={set.code}>{set.name}</option> )}
    </select>
</div>;

export default SetSelector;