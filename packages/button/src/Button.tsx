 import React from "react";
 
 export interface ButtonProps {
   children: React.ReactNode;
   variant?: "primary" | "secondary" | "ghost";
   size?: "sm" | "md" | "lg";
   disabled?: boolean;
   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
 }
 
 export const Button: React.FC<ButtonProps> = ({
   children,
   variant = "primary",
   size = "md",
   disabled = false,
   onClick,
 }) => {
   const baseStyle: React.CSSProperties = {
     display: "inline-flex",
     alignItems: "center",
     justifyContent: "center",
     fontWeight: 600,
     borderRadius: 6,
     cursor: disabled ? "not-allowed" : "pointer",
     opacity: disabled ? 0.5 : 1,
     border: "none",
     transition: "background-color 0.2s",
   };
 
   const sizeStyles: Record<string, React.CSSProperties> = {
     sm: { padding: "4px 12px", fontSize: 12 },
     md: { padding: "8px 16px", fontSize: 14 },
     lg: { padding: "12px 24px", fontSize: 16 },
   };
 
   const variantStyles: Record<string, React.CSSProperties> = {
     primary: { backgroundColor: "#2563eb", color: "#fff" },
     secondary: { backgroundColor: "#e2e8f0", color: "#1e293b" },
     ghost: { backgroundColor: "transparent", color: "#2563eb" },
   };
 
   return (
     <button
       style={{ ...baseStyle, ...sizeStyles[size], ...variantStyles[variant] }}
       disabled={disabled}
       onClick={onClick}
     >
       {children}
       <h1>Button</h1>
     </button>
   );
 };
 
 export default Button;
