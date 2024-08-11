export function BaseSubmit({...rest}){
    return (
        <>
        <input
        className="mt-8 w-full rounded bg-sky-800 py-3 font-semibold text-white cursor-pointer disabled:opacity-40"
        type="submit"
        {...rest}
      />
        </>
    )
}