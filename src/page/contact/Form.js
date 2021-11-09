const Form = () => {
    return (
        <>
        <div className="max-w-xl mx-auto text-center">
           <h5 className="title-section">PONERSE EN CONTACTO</h5> 
           <p className="mt-5 font-light text-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna</p>
        </div>

        <form className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input className="h-14 " type="text" name="name" placeholder="Tu nombre*" />

                <input className="h-14 " type="email" name="email" placeholder="Email *" />

                <input className="h-14  md:col-span-2" type="text" name="subject" placeholder="De qué trata esto?" />

                <textarea
                    className="md:col-span-2"
                    name="message"
                    rows="6"
                    placeholder="Tu mensaje ..."
                ></textarea>
                <div className="md:col-span-2 text-right ">
                    <button className="btn btn-sm btn-red" type="submit">
                        Enviar mensaje
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}

export default Form
