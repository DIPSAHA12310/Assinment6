import { use, useState } from 'react';
import type { Ilanguage } from '../type/Language';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface languageProps {
    languagePromies: Promise<Ilanguage[]>
}

const Language = ({ languagePromies }: languageProps) => {

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
        <div className="container mx-auto px-4 md:px-8 py-12">

            {/* Heading */}

            <div className="mb-8">

                <h3 className="text-black font-bold text-3xl">
                    Explore the{' '}
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h3>

                <p className="mt-2">
                    Pick one technology per category to build your ideal stack
                </p>

            </div>


            {/* Cards + Stack */}

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Technology Cards */}

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        language.map((langu) => {

                            const isAdded = card.some(
                                (item) => item.id === langu.id
                            )

                            return (

                                <div
                                    key={langu.id}
                                    className="card bg-base-100 shadow-sm"
                                >

                                    <div className="card-body">

                                        {/* Icon + Badge */}

                                        <div className="flex justify-between items-center">

                                            <div className="w-10 h-10">

                                                <img
                                                    src={langu.icon}
                                                    alt={langu.name}
                                                    className="w-full h-full object-contain"
                                                />

                                            </div>

                                            <div className="badge badge-neutral badge-outline">
                                                {langu.badge}
                                            </div>

                                        </div>


                                        {/* Name */}

                                        <h2 className="text-2xl font-bold mt-3">
                                            {langu.name}
                                        </h2>


                                        {/* Description */}

                                        <p className="text-sm mt-2">
                                            {langu.description}
                                        </p>


                                        {/* Category + Difficulty + Rating */}

                                        <div className="flex flex-wrap items-center gap-2 mt-6">

                                            <span className="badge badge-outline">
                                                {langu.category}
                                            </span>

                                            <span className="badge badge-outline">
                                                {langu.difficulty}
                                            </span>

                                            <span className="text-yellow-400">
                                                ★
                                            </span>

                                            <span>
                                                {langu.rating}
                                            </span>

                                        </div>


                                        {/* Add Button */}

                                        <div className="mt-6">

                                            <button
                                                onClick={() => handleClick(langu)}
                                                disabled={isAdded}
                                                className={`btn btn-block ${
                                                    isAdded
                                                        ? "bg-gray-300 text-black"
                                                        : "bg-black text-white"
                                                }`}
                                            >
                                                {
                                                    isAdded
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


                {/* Your Stack */}

                <div className="w-full lg:w-96">

                    <div className="card bg-base-100 shadow-sm">

                        <div className="card-body">

                            <h2 className="text-2xl font-bold">
                                Your Stack
                            </h2>

                            <p className="text-sm">
                                {card.length} Technology Selected
                            </p>


                            {
                                card.length === 0 ? (

                                    <p className="mt-4">
                                        No technologies selected yet
                                    </p>

                                ) : (

                                    <>

                                        <div className="mt-4 flex flex-col gap-3">

                                            {
                                                card.map((langu) => (

                                                    <div
                                                        key={langu.id}
                                                        className="card bg-base-100 shadow-sm p-3"
                                                    >

                                                        <div className="flex items-center justify-between">

                                                            <div className="flex items-center gap-3">

                                                                <img
                                                                    src={langu.icon}
                                                                    alt={langu.name}
                                                                    className="w-10 h-10 object-contain"
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

                                        </div>


                                        <button
                                            onClick={handleRemoveAll}
                                            className="btn btn-error mt-4 w-full"
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


            <ToastContainer />

        </div>
    )
}

export default Language