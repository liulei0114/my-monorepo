 import React from "react";
 import { Button } from "@my/button";
 
 export interface CardProps {
   title: string;
   children: React.ReactNode;
   footer?: React.ReactNode;
   onAction?: () => void;
   actionLabel?: string;
 }
 
 export const Card: React.FC<CardProps> = ({
   title,
   children,
   footer,
   onAction,
   actionLabel = "OK",
 }) => {
   const cardStyle: React.CSSProperties = {
     border: "1px solid #e2e8f0",
     borderRadius: 8,
     padding: 0,
     background: "#fff",
     boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
   };
 
   const headerStyle: React.CSSProperties = {
     padding: "12px 16px",
     borderBottom: "1px solid #e2e8f0",
     fontWeight: 600,
     fontSize: 16,
   };
 
   const bodyStyle: React.CSSProperties = {
     padding: "16px",
   };
 
   const footerStyle: React.CSSProperties = {
     padding: "12px 16px",
     borderTop: "1px solid #e2e8f0",
     display: "flex",
     justifyContent: "flex-end",
     gap: 8,
   };
 
   return (
     <div style={cardStyle}>
       <div style={headerStyle}>{title}</div>
       <div style={bodyStyle}>{children}</div>
       {(footer || onAction) && (
         <div style={footerStyle}>
           {footer}
           {onAction && <Button onClick={onAction}>{actionLabel}</Button>}
         </div>
       )}
     </div>
   );
 };
 
 export default Card;
