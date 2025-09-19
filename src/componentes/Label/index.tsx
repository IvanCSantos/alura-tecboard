import "./label.css";

export function Label({ children, htmlFor }: { children: any; htmlFor: any }) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
