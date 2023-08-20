const SkillCard = (props) => {
    return (
        <>
            <div className="skillCard relative text-center flex flex-col items-center w-full border border-gray-300 rounded-md">

                <div className="border-2  bg-[#191919] text-white p-2 rounded-md text-xs px-4 absolute -top-3 -left-3 font-bold"> <span className="Naira">N</span>{props.cost}</div>

                <div className="skillBg  w-full p-3 py-5 rounded-t-md flex items-center justify-center "><img draggable="false" src={props.img} className="w-16 rounded-md bg-teal-600 p-3 " /></div>
                <p className="font-bold text-lg mb-3 px-3">{props.title}</p>
                <p className="text-xs text-gray-500 px-3 pb-6">{props.body}</p>
            </div>
        </>
    )
}

export default SkillCard;