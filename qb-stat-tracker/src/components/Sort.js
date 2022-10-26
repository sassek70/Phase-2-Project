import React from "react";
function Sort (props) {
    return (
        <div>
            Sort by:
                <select onChange={(e) => props.changeSortBy(e.target.value)}>
                    <option value ="None">None</option>
                    <option value ="Yards">Yards</option>
                    <option value ="Rushing Touchdowns">Rushing Touchdowns</option>
                    <option value ="Passing Touchdowns">Passing Touchdowns</option>
                    <option value ="Completions">Completions</option>
                </select>
        </div>
    )
}

export default Sort;