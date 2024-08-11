export function BaseTextArea({ label, name,required, ...rest}) {
  return (
    <>
      <label htmlFor={name} className="mt-4 block">
        {label}
        {required && <span className="pl-1 text-red-500">*</span>}
      </label>
      <textarea
        className="mt-2 w-full rounded border-2"
        rows={5}
        name={name}
        id={name}
        {...rest}
      ></textarea>
    </>
  );
}
