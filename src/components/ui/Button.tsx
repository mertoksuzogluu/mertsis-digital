"use client";

import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

interface ButtonAsButton extends BaseProps {
  href?: never;
  external?: never;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { height: "2.5rem", padding: "0 1rem", fontSize: "0.875rem" },
  md: { height: "3rem", padding: "0 1.5rem", fontSize: "1rem" },
  lg: { height: "3.5rem", padding: "0 2rem", fontSize: "1.125rem" },
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    boxShadow: "0 1px 3px rgba(37,99,235,0.3)",
  },
  secondary: {
    background: "#fff",
    color: "#0a0a0a",
    border: "1px solid rgba(0,0,0,0.12)",
  },
  ghost: {
    background: "transparent",
    color: "#0a0a0a",
    border: "none",
  },
};

const baseStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  borderRadius: "0.5rem",
  fontWeight: 500,
  textDecoration: "none",
  cursor: "pointer",
  transition: "background 0.15s, border-color 0.15s, opacity 0.15s",
};

export function Button({
  href,
  external,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const style: React.CSSProperties = {
    ...baseStyle,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...(disabled ? { opacity: 0.5, pointerEvents: "none" as const } : {}),
  };

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={style}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      style={style}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
