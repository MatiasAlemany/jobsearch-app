export function BaseSelect({label, name, required, children, ...rest}){
    return (
        <>
        <label htmlFor={name} className="mt-4 block">
        {label}
        {required && <span className="pl-1 text-red-500">*</span>}
      </label>
      <select
        name={name}
        id={name}
        className="mt-3 rounded border-2 p-2 py-3 text-black"
        {...rest}
      >
        {children}
      </select>
      </>
    )
}