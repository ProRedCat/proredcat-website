import {useMemo} from "react";
import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import YouTube from "@/components/youtube";
import UpdateCallout from "@/components/update-callout";

const components = {
    Image: (props: any) => <Image {...props} alt={props.alt || ""} />,
    YouTube,
    UpdateCallout
}

interface MdxProps {
    code: string;
}

export function MDXContent({code}: MdxProps) {
    const Component = useMemo(() => {
        const fn = new Function(code);
        return fn({...runtime}).default
    }, [code])

    return <Component components={components}/>
}
