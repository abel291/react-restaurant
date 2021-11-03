import Badge from "../../components/Badge"

const MenuItem = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between">
            <div className="md:mr-4 text-center md:text-left">
                <div className="flex  md:text-left justify-center md:justify-start ">
                    <h5 className=" font-primary text-3xl md:text-2xl md:mr-1 leading-none">STICKY GRILLED CHICKEN</h5>
                    <div className="hidden md:inline-block border-b-2 border-gray-400 border-dotted flex-grow"></div>
                </div>

                <p className="text-base font-light mt-4 md:mt-3 ">
                    Integer ultrice an aligula lectus luctus neque a purus ipsum and neque dolor purus magna tempor
                </p>
            </div>
            <div className="flex md:flex-col flex-row justify-center md:justify-start items-center md:items-end mt-4 md:mt-0 ">
                <h5 className="mr-4 md:mr-1 font-primary text-2xl  leading-none md:leading-normal">$30,58</h5>
                <div className="md:mt-3 text-right">
                    <Badge title="435g" />
                </div>
            </div>
        </div>
    )
}

export default MenuItem
