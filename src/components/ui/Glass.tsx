
import { cn } from "@/lib/utils";
import React from "react";

interface GlassProps {
  children: React.ReactNode;
  className?: string;
  blur?: "sm" | "md" | "lg";
  opacity?: "light" | "medium" | "heavy";
  border?: boolean;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassProps> = ({
  children,
  className,
  blur = "md",
  opacity = "medium",
  border = true,
  hoverEffect = false,
}) => {
  const blurMap = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  };

  const opacityMap = {
    light: "bg-white/30",
    medium: "bg-white/50",
    heavy: "bg-white/70",
  };

  return (
    <div
      className={cn(
        opacityMap[opacity],
        blurMap[blur],
        border && "border border-white/20",
        "rounded-xl shadow-lg",
        hoverEffect && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export const GlassButton: React.FC<
  GlassProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  className,
  blur = "sm",
  opacity = "medium",
  border = true,
  hoverEffect = true,
  ...props
}) => {
  const blurMap = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  };

  const opacityMap = {
    light: "bg-primary/70",
    medium: "bg-primary/80",
    heavy: "bg-primary/90",
  };

  return (
    <button
      className={cn(
        opacityMap[opacity],
        blurMap[blur],
        border && "border border-primary/30",
        "text-white font-medium py-3 px-6 rounded-lg shadow-md",
        hoverEffect &&
          "transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-primary/100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const GlassPanel: React.FC<GlassProps> = ({
  children,
  className,
  blur = "lg",
  opacity = "light",
  border = true,
  hoverEffect = false,
}) => {
  const blurMap = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  };

  const opacityMap = {
    light: "bg-white/20",
    medium: "bg-white/40",
    heavy: "bg-white/60",
  };

  return (
    <div
      className={cn(
        opacityMap[opacity],
        blurMap[blur],
        border && "border border-white/10",
        "rounded-2xl shadow-lg",
        hoverEffect && "transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};
