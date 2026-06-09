type LogoProps = {
  size?: number;
  className?: string;
};

export function Logo({ size = 40, className }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo.svg"
      alt=""
      width={size}
      height={size}
      className={className}
      decoding="async"
    />
  );
}
