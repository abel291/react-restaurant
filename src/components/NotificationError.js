import { useState } from "react"
import { useEffect } from "react"

const NotificationError = ({ error }) => {
    let data = error.response.data

    return (
        <div className="text-white text-sm font-medium bg-red p-4 rounded-md">
            {data?.errors && (
                <ul className="list-disc list-inside">
                    {Object.values(data.errors).map((item, index) => (
                        <li key={index}>{item[0]}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NotificationError
