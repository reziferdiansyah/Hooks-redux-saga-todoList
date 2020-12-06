import React from 'react'
// import { useDispatch } from 'react-redux'
// import { addTodo } from '../actions'
import useForm from '../hooks/useForm'
import validate from "../utils/validate"


export default function AddForm({ onClose }) {

    // const dispatch = useDispatch()
    const submit = () => {
        // addJob(values, onClose)
        console.log("form submited")

    };
    const { handleChange, handleSubmit, values, errorValues } = useForm(validate, submit)


    return (
        <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="form__row">
                <label>Title</label>
                <input
                    name="title"
                    placeholder="Add todo title"
                    className={`form__input ${errorValues.title && "error"}`}
                    onChange={handleChange}
                    value={values.title}
                />
                {
                    errorValues.title && <p className="error-input">{errorValues.title}</p>

                }
            </div>

            <div className="form__row">
                <label>Content Todo</label>
                <textarea
                    name="content"
                    placeholder="Add todo content"
                    className={`form__input--textarea ${errorValues.content && "error"}`}
                    onChange={handleChange}
                    value={values.content}

                />
                {
                    errorValues.content && <p className="error-input">{errorValues.content}</p>

                }
            </div>
            <button className="btn btn-save" type="submit">
                <span className="btn-text"> Save </span>
            </button>
        </form>
    )
}