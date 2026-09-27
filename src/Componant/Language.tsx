import React, { use, useState } from 'react';
import type { Ilanguage } from '../type/Language';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface languageProps {
    languagePromies: Promise<Ilanguage[]>
}

const Language = ({ languagePromies }: languageProps) => {
    console.log(languagePromies)
    const language = use(languagePromies)

    const [card, setcard] = useState<Ilanguage[]>([])

    const handleClick = (langu: Ilanguage) => {

        if (card.some((item) => item.id === langu.id)) {
            toast.warning(`${langu.name} is already added!`)
            return
        }

        setcard([...card, langu])
        toast.success(`${langu.name} added to stack!`)
    }

    const handleRemove = (id: string) => {
        const removedItem = card.find((item) => item.id === id)

        setcard(card.filter((item) => item.id !== id))

        if (removedItem) {
            toast.info(`${removedItem.name} removed from stack!`)
        }
    }

    const handleRemoveAll = () => {
        setcard([])
        toast.info("All technologies removed!")
    }

    return (
        <div>
            <div className=''>
                <h3 className='text-black font-bold text-3xl'>
                    Explore the <span className='text-fuchsia-600'>Tecnologies</span>
                </h3>

                <h3>
                    Pick one technology per category to build your idel stack
                </h3>
            </div>

            <div className='flex justify-between gap-4'>

                <div className="grid grid-cols-3 gap-6 justify-between">

                    {
                        language.map((langu) => {

                            return (
                                <div
                                    key={langu.id}
                                    className="card bg-base-100 shadow-sm"
                                >

                                    <div className="card-body">

                                        <div className='flex justify-between'>

                                            <div className='w-10 h-10'>
                                                <img
                                                    src={langu.icon}
                                                    alt=""
                                                />
                                            </div>

                                            <div>
                                                <div className="badge badge-neutral badge-outline">
                                                    {langu.badge}
                                                </div>
                                            </div>

                                        </div>

                                        <div className="flex justify-between">

                                            <h2 className="text-3xl font-bold">
                                                {langu.name}
                                            </h2>

                                        </div>

                                        <h4>
                                            {langu.description}
                                        </h4>

                                        <div className='pt-8'>

                                            <button
                                                type="submit"
                                                className="btn"
                                            >
                                                {langu.category}
                                            </button>

                                            <button
                                                type="submit"
                                                className="btn"
                                            >
                                                {langu.difficulty}
                                            </button>

                                            <span className="text-yellow-400 pl-6">
                                                ★
                                            </span>

                                            <span>
                                                {langu.rating}
                                            </span>

                                        </div>

                                        <ul className="mt-6 flex flex-col gap-2 text-xs"></ul>

                                        <div className="mt-6">

                                            <button
                                                onClick={() => handleClick(langu)}
                                                disabled={card.some(
                                                    (item) => item.id === langu.id
                                                )}
                                                className={`btn btn-block ${
                                                    card.some(
                                                        (item) => item.id === langu.id
                                                    )
                                                        ? "bg-gray-300 text-black"
                                                        : "bg-black text-white"
                                                }`}
                                            >
                                                {
                                                    card.some(
                                                        (item) => item.id === langu.id
                                                    )
                                                        ? "✓ Added to Stack"
                                                        : "Add to Stack"
                                                }
                                            </button>

                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }

                </div>


                <div>

                    <div className="card w-96 bg-base-100 shadow-sm">

                        <div className="card-body">

                            <div className="flex justify-between">

                                <h2 className="text-3xl font-bold">
                                    Your Stack
                                </h2>

                            </div>

                            <div className="w-64">

                                {
                                    card.length === 0 ? (

                                        <h2>
                                            No technologies selected yet
                                        </h2>

                                    ) : (

                                        <>

                                            <h2>
                                                {card.length} selected yet
                                            </h2>


                                            {
                                                card.map((langu) => (

                                                    <div
                                                        key={langu.id}
                                                        className="card bg-base-100 shadow-sm mb-3 p-3"
                                                    >

                                                        <div className="flex items-center justify-between">

                                                            <div className="flex items-center gap-3">

                                                                <img
                                                                    src={langu.icon}
                                                                    alt={langu.name}
                                                                    className="w-10 h-10"
                                                                />

                                                                <div>

                                                                    <h2 className="font-bold">
                                                                        {langu.name}
                                                                    </h2>

                                                                    <p className="text-sm">
                                                                        {langu.category}
                                                                    </p>

                                                                </div>

                                                            </div>


                                                            <button
                                                                onClick={() =>
                                                                    handleRemove(langu.id)
                                                                }
                                                                className="btn btn-sm btn-circle"
                                                            >
                                                                ✕
                                                            </button>

                                                        </div>

                                                    </div>

                                                ))
                                            }


                                            <button
                                                onClick={handleRemoveAll}
                                                className="btn btn-error mt-4 mx-auto block"
                                            >
                                                Remove All
                                            </button>

                                        </>

                                    )
                                }

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <ToastContainer />

        </div>
    );
};

export default Language;