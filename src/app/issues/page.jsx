'use client'
import { usePathname } from "next/navigation"
import {Button} from '@radix-ui/themes';
import Link from 'next/link'

function IssuePage() {

    const currentPath = usePathname();
    console.log(currentPath)

    return (
        <div>
            <Button> <Link href='/issues/new' >New Issue</Link>  </Button>
        </div>
    )
}

export default IssuePage
