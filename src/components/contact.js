import React from 'react'

const Forminput = ({ text, name }) => {
    return (
        <>
            <div className=' items-center justify-center'>
                <h1>{name}</h1><input type={text} name value="" className=' items-center justify-center rounded-3xl border-dark' />
            </div>
        </>

    )
}
const contact = () => {
    return (
        <div className=' items-center justify-center pl-30'>
            <Forminput name={'Enter your name'} text={""} />
            <Forminput name={'Enter your mail'} />
            <Forminput name={'Enter your phone no'} />
        </div>
    )
}

export default contact
