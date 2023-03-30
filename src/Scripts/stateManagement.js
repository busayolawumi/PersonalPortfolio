import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

//  const messageSchema = yup.object().shape({
//     name: yup.string().required('Username is required'),
//     email: yup.string().email().required('Email is required'),
//     phone: yup.number(),
//     subject: yup.string(),
//     message: yup.string().required("You can't send an empty message")
// })

//   export const { register, formState : { errors }, handleSubmit, watch, reset } = useForm({
//     mode: 'onSubmit',
//     reValidateMode: 'onChange', 
//     criteriaMode: 'all', 
//     defaultValues: {name: '', email: '', phone: '', subject: '', message: ''},
//     resolver: yupResolver(messageSchema) 
//   })

//    const submitForm = (data) => {
//     console.log(data);
//     reset();
// }