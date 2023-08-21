import React from 'react'

const FAQ_card = (props) => {
    const [opened, setOpen] = React.useState(false)
    return (
        <>
            <div className="faqCard h-max flex flex-col w-full px-5 pt-4 pb-2 ring-1 ring-slate-400 gap-2 shadow-md rounded-md">
                <input checked type="checkbox" id={'check' + props.id} className="checkBox hidden" />
                <div onClick={() => { setOpen(prev => !prev) }} className="flex w-full justify-between items-center">
                    <p className="question  font-bold max-w-[80%]">{props.quest}</p> 
                    <div  className="btn text-xl font-black text-gray-500 cursor-pointer"> {opened ? '-' : '+' }</div>
                </div>


                <div style={opened ? {maxHeight: '500px'} : {maxHeight: 0}} className="answer text-xs duration-300">
                    {props.ans}.
                </div>
            </div>
        </>
    )
};

export default FAQ_card;