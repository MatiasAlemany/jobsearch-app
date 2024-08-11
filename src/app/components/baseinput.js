export function BaseInput({label, name,required,...rest}) {
    return (
        <>
        <label className="mt-4 block" htmlFor={name}>
        {label}
        {required && <span className="pl-1 text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        className="mt-2 w-full rounded-md border-2 p-2"
        required={required}
        {...rest}
      />
      </>
    )
}