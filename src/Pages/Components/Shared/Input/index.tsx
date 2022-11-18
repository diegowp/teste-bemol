interface InputProps {
  label: string
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
}

export function Input({ label, props }: InputProps) {
  return (
    <>
      <label className='form-label' htmlFor={props.id}>
        {label}
      </label>
      <input type='text' className='form-control' {...props} />
    </>
  )
}
