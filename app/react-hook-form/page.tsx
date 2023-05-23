'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

type FormType = {
  firstName: string
  lastName: string
  email: string
  password: string
}
export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormType>()

  const onSubmit: SubmitHandler<FormType> = (data) => {
    window.alert(`handleSubmit: ${JSON.stringify(data)}`)
  }

  console.log(watch('email'))

  return (
    <>
      <span>{watch('email')}</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('email', { required: true })} />
        </div>
        {errors.email && <div>This field is Required</div>}
        <div>
          <input {...register('firstName')} />
        </div>
        <div>
          <input {...register('lastName')} />
        </div>
        <div>
          <input type="password" {...register('password')} />
        </div>
        <input type="submit" />
      </form>
    </>
  )
}
