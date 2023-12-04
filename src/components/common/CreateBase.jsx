import style from "./CreateBase.module.css"
const CreateBase = ({ heading, children }) => {
    return (
        <>
            <div className="container-fluid mt-3 mb-3">
                <div className={`border-1 border rounded-3 bg-white p-3 ${style.create_Ads_Container}`} >
                   <span className="mb-4">{heading}</span> 
                    {children}
                </div>
            </div>
        </>
    )
}

export default CreateBase;