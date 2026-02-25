'use client'
import { usePathname } from "next/navigation"

function IssuePage() {

    const currentPath = usePathname();
    console.log(currentPath)

    return (
        <div>
            {currentPath}
        </div>
    )
}

export default IssuePage
