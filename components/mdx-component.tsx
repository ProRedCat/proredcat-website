import { cache, type ComponentType } from "react";
import Image, { type ImageProps } from "next/image";
import * as runtime from "react/jsx-runtime";
import YouTube from "@/components/youtube";
import UpdateCallout from "@/components/update-callout";

const components = {
  Image: (props: ImageProps) => <Image {...props} alt={props.alt || ""} />,
  YouTube,
  UpdateCallout,
};

interface MdxProps {
  code: string;
}

const getMDXComponent = cache((code: string) => {
  // Velite emits trusted, build-time MDX as a function body accepting the JSX runtime.
  // oxlint-disable-next-line typescript/no-implied-eval
  const evaluate = new Function(code) as (jsxRuntime: typeof runtime) => {
    default: ComponentType<{ components: typeof components }>;
  };
  return evaluate(runtime).default;
});

export function MDXContent({ code }: MdxProps) {
  const Component = getMDXComponent(code);
  // This component comes from cached build-time MDX, not an inline component declaration.
  // oxlint-disable-next-line react/static-components
  return <Component components={components} />;
}
