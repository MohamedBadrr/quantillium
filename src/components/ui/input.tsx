import * as React from "react";
import EyeOff from "@/assets/eye_closed.svg";
import Eye from "@/assets/eye.svg";
import Shortcut from "@/assets/shortcut.svg?raw";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  withEye?: boolean;
  withShortcut?: boolean;
  prepend?: React.ReactNode;
  label?: string;
}

function Input({
  className,
  type,
  withEye,
  withShortcut,
  prepend,
  label,
  value,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password" && withEye;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [focus, toggleFocus] = React.useState(false);
  const inputId = React.useId(); // Generate a unique ID

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (withShortcut && event.ctrlKey && event.key.toLowerCase() === "f") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [withShortcut]);

  return (
    <div className="relative w-full flex items-center">
      {/* Left icon */}
      {prepend && (
        <div className="left-[20px] absolute top-1/2 -translate-y-1/2">
          {prepend}
        </div>
      )}

      {/* Label - Now associated with input */}
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            "absolute text-white/40 font-light duration-300 transition-all pointer-events-none",
            focus || value ? "top-[-18px] text-[12px]" : "top-[35%] translate-y-[-50%] text-[24px]"
          )}
        >
          {label}
        </label>
      )}

      <input
        ref={inputRef}
        id={inputId}
        type={isPassword && showPassword ? "text" : type}
        data-slot="input"
        value={value}
        onFocus={() => toggleFocus(true)}
        className={cn(
          "outline-none border-t-0 border-l-0 border-r-0 file:text-foreground placeholder:text-white placeholder:text-[24px] selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 bg-transparent pt-3 pb-8 text-base transition-[color,box-shadow,border] file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "border-b-[2px] border-b-[#FFFFFF33] focus-visible:border-primary",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          "text-[24px]",
          isPassword && "pr-10",
          prepend ? "!ps-[56px]" : "",
          withShortcut ? "!pr-[67px]" : "",
          className
        )}
        {...props}
        onBlur={() => toggleFocus(false)}
      />

      {/* Find Shortcut */}
      {withShortcut && (
        <div
          className="flex items-center justify-center bg-white/10 absolute right-[20px]"
          dangerouslySetInnerHTML={{ __html: Shortcut }}
        />
      )}

      {/* Password visibility toggle */}
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white focus:outline-none cursor-pointer"
        >
          <img
            src={showPassword ? EyeOff : Eye}
            width={20}
            height={20}
            alt="Show Password"
          />
        </button>
      )}
    </div>
  );
}


export { Input };
