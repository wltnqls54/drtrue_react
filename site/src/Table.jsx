import React from "react";
import './App.css'

function Table({ table_data, table_result }) {
    return (
        <table class="restapi-table">
            <thead>
                <tr>
                    <th>collection</th>
                    <th>datetime</th>
                    <th>sitename</th>
                    <th>url</th>
                    <th>height</th>
                    <th>image_url</th>
                    <th>thumbnail_url</th>
                    <th>width</th>
                </tr>
            </thead>
            <tbody>
                {table_result.map((table_data, index) => (
                    <tr key={index}>
                        <td>{table_data.collection}</td>
                        <td>{table_data.datetime}</td>
                        <td>{table_data.display_sitename}</td>
                        <td>{table_data.doc_url}</td>
                        <td>{table_data.height}</td>
                        <td>{table_data.image_url}</td>
                        <td>{table_data.thumbnail_url}</td>
                        <td>{table_data.width}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;