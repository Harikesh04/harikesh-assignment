import React from "react";

export default function Input({ inputType,options, className, text, ...props }) {
    switch (inputType) {
        case "formInput": {
            return (
                <div
                    className={`flex  items-center bg-customGrey p-3 gap-3 flex-shrink-0 rounded-md  ${className}`}
                >
                    <input className="bg-customGrey outline-none w-full " {...props} />
                </div>
            );
        }
        case "select": {
            return (
                <div className="p-3 bg-customGrey rounded-md">
                     <select className=" bg-customGrey outline-none  w-full" {...props} >
                    {options.map((option) => (
                        <option key={option.value} className="w-full" value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>

                </div>
               
            );
        }
    }
}
