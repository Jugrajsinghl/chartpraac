import React from 'react'
import { useForm } from "react-hook-form"


  
export default function Forms() {

    const {
        register,
        handleSubmit,
        watch,
        
        formState: { errors ,isSubmitting},
      } = useForm()

      const onSubmit = (data) => console.log(data)

  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input defaultValue="test" {...register("example")} />
      <input defaultValue="test" {...register("example")} />
      <input defaultValue="test" {...register("example")} /> */}

      <input {...register("username", { required: true })} />
      <br/>
       {errors.username && <span>This field is required</span>}
      <br/>
      <input {...register("password", { required: true ,minLength:5})} />
      <br/>
       {errors.password && <span>{errors.password.message}</span>}
      <br/>
      <input {...register("number", { required: true })} />
      <br/>
       {errors.number && <span>This field is required</span>}
      <br/>
      <input disabled={isSubmitting} type="submit" />
      </form>
    </div>
  )
}
