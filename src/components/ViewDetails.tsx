import { title } from "process";
import React from "react";



export const ViewDetails = ({books}:props)=>{
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>title</td>
                        <td>author</td>
                        <td>price</td>
                    </tr>
                <tbody>
                    {books.map(item:{ title:string,author:string,price:string})=>(
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    ))}
                </tbody>
                </thead>
            </table>
        </div>
    )
}
export default ViewDetails;