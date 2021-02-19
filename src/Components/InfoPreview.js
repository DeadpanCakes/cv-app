const InfoPreview = (props) => {
    const { firstName, lastName, phoneNumber, email} = props.info
    return (
        <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
            <button onClick={props.edit}>Edit</button>
        </div>
    )
}

export default InfoPreview