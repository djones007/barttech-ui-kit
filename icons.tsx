import * as React from "react";

// The handful of chrome icons the components need, as inline SVGs (24×24, stroke-based, the same
// geometry as the common open-source icon sets). Inline on purpose: an icon-library dependency
// would be forced on every consumer, including ones that already use a different set. Consumers
// pass their own icons into slots; these are only the built-in chevrons, ticks and close crosses.

type IconProps = React.SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return <Svg {...props}><path d="M20 6 9 17l-5-5" /></Svg>;
}
export function ChevronDownIcon(props: IconProps) {
  return <Svg {...props}><path d="m6 9 6 6 6-6" /></Svg>;
}
export function ChevronUpIcon(props: IconProps) {
  return <Svg {...props}><path d="m18 15-6-6-6 6" /></Svg>;
}
export function ChevronRightIcon(props: IconProps) {
  return <Svg {...props}><path d="m9 18 6-6-6-6" /></Svg>;
}
export function CircleIcon(props: IconProps) {
  return <Svg {...props}><circle cx="12" cy="12" r="10" /></Svg>;
}
export function XIcon(props: IconProps) {
  return <Svg {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></Svg>;
}
