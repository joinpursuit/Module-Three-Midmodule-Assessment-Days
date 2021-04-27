import React from 'react'
import SalesItemDetails from "./SalesItemDetails";

export default function SalesItems ({items, itemUp}) {
    return (
        <ul className = "BigBucks">
            {items.map((item) => {
                return (
                    <SalesItemDetails key={item.id}
                    item={item}
                    itemUp={itemUp}
                    />
                )
            })}
        </ul>
    )
};
