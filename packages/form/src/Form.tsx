 import React, { useState } from "react";
 import { Button } from "@liulei19960114/button";
 import { Card } from "@liulei19960114/card";
 
 export interface FormField {
   name: string;
   label: string;
   type?: "text" | "email" | "password";
   placeholder?: string;
   required?: boolean;
 }
 
 export interface FormProps {
   title: string;
   fields: FormField[];
   onSubmit: (values: Record<string, string>) => void;
   submitLabel?: string;
   cancelLabel?: string;
   onCancel?: () => void;
 }
 
 export const Form: React.FC<FormProps> = ({
   title,
   fields,
   onSubmit,
   submitLabel = "Submit",
   cancelLabel = "Cancel",
   onCancel,
 }) => {
   const [values, setValues] = useState<Record<string, string>>({});
   const [errors, setErrors] = useState<Record<string, string>>({});
 
   const handleChange = (name: string, value: string) => {
     setValues((prev) => ({ ...prev, [name]: value }));
     if (errors[name]) {
       setErrors((prev) => {
         const next = { ...prev };
         delete next[name];
         return next;
       });
     }
   };
 
   const handleSubmit = () => {
     const newErrors: Record<string, string> = {};
     fields.forEach((field) => {
       if (field.required && !values[field.name]?.trim()) {
         newErrors[field.name] = `${field.label} is required`;
       }
     });
 
     if (Object.keys(newErrors).length > 0) {
       setErrors(newErrors);
       return;
     }
 
     onSubmit(values);
   };
 
   const inputStyle: React.CSSProperties = {
     width: "100%",
     padding: "8px 12px",
     border: "1px solid #cbd5e1",
     borderRadius: 6,
     fontSize: 14,
     boxSizing: "border-box",
   };
 
   const labelStyle: React.CSSProperties = {
     display: "block",
     marginBottom: 5,
     fontWeight: 500,
     fontSize: 14,
     color: "#334155",
   };
 
   const errorStyle: React.CSSProperties = {
     color: "#dc2626",
     fontSize: 12,
     marginTop: 2,
   };
 
   const footer = (
     <>
       {onCancel && (
         <Button variant="secondary" onClick={onCancel}>
           {cancelLabel}
         </Button>
       )}
       <Button onClick={handleSubmit}>{submitLabel}</Button>
     </>
   );
 
   return (
     <Card title={title} footer={footer}>
       {fields.map((field) => (
         <div key={field.name} style={{ marginBottom: 12 }}>
           <label style={labelStyle} htmlFor={field.name}>
             {field.label}
             {field.required && <span style={{ color: "#dc2626" }}> *</span>}
           </label>
           <input
             id={field.name}
             type={field.type || "text"}
             placeholder={field.placeholder}
             style={inputStyle}
             value={values[field.name] || ""}
             onChange={(e) => handleChange(field.name, e.target.value)}
           />
           {errors[field.name] && (
             <div style={errorStyle}>{errors[field.name]}</div>
           )}
         </div>
       ))}
     </Card>
   );
 };
 
 export default Form;
