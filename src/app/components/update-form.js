
export function UpdateForm({ title, children, ...rest }) {
  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="text-xl font-semibold">{title}</h2>
      <form className="mt-4 bg-white px-8 py-8" {...rest}>
        {children}
      </form>
    </div>
  );
}
