import React from "react";

export const ControlsTable = () => {
    return (
        <table className="controls-table">
            <thead>
                <tr className="table-header">
                    <th>Control</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mouse Left</td>
                    <td>Fire weapon</td>
                </tr>
                <tr>
                    <td>C key</td>
                    <td>Clear Screen</td>
                </tr>
                <tr>
                    <td>1 key</td>
                    <td>Hammer</td>
                </tr>
                <tr>
                    <td>2 key</td>
                    <td>Machine Gun</td>
                </tr>
                <tr>
                    <td>3 key</td>
                    <td>Stamp</td>
                </tr>
                <tr>
                    <td>- key</td>
                    <td>Prev. weapon</td>
                </tr>
                <tr>
                    <td>{"="} key</td>
                    <td>Next weapon</td>
                </tr>
                <tr>
                    <td>; key</td>
                    <td>Volume down</td>
                </tr>
                <tr>
                    <td>' key</td>
                    <td>Volume up</td>
                </tr>
            </tbody>
        </table>
    );
};

export default ControlsTable;
