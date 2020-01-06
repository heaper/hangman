import React from 'react';

function DataItem({
    label='',
    value=''
}) {
    return (
        <div className="data-item">
            <span className="data-item__label">{label}</span>
            <span className="data-item__value">{value}</span>
        </div>
    );
}

export default DataItem;