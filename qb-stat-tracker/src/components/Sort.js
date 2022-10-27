import React from "react";
function Sort (props) {
    return (
        <div className="sort">
            Sort by:
                <select onChange={(e) => props.changeSortBy(e.target.value)} defaultValue="None">
                    <option value ="None" hidden disabled>Select Sort Option</option>
                    <option value ="Yards">Yards</option>
                    <option value ="Rushing Touchdowns">Rushing Touchdowns</option>
                    <option value ="Passing Touchdowns">Passing Touchdowns</option>
                    <option value ="Completions">Completions</option>
                </select>
        </div>
    )
}

export default Sort;