import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { db, auth } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

interface CreateFormData {
    title: string,
    description: string
}

function CreateForm() {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const postsRef = collection(db, 'posts')

    const schema = yup.object().shape({
        title: yup.string().required('You must add a title.'),
        description: yup.string().required('You must add a description.'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postsRef, {
            ...data,
            userId: user?.uid,
            username: user?.displayName
        })
        console.log(data);
        
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder='Title...' {...register('title')} />
            <p style={{ color: 'red' }}>{errors.title?.message}</p>
            <textarea placeholder='Description...' {...register('description')} />
            <p style={{ color: 'red' }}>{errors.description?.message}</p>
            <input type="submit" className="submitForm" />
        </form>
    )
}

export default CreateForm