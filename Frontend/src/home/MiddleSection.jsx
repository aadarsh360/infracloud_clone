import React from 'react'

function MiddleSection() {
    return (
        <div className="flex items-center justify-center h-[400px] m-5 border border-green-600 space-x-20">

            <div className="h-[80%] w-[35%] border border-red-600 bg-blue-300 flex items-center justify-center" >Left</div>

            <div className="h-[90%] w-[35%] border border-blue-700 flex items-center justify-center">
                <div className="border border-red-600 h-[70%] w-[80%]">
                    <h1 className="text-2xl font-semibold mt-2 mb-2">Cloud Native Revolution</h1>
                    <p className="text-gray-400">We have modernized the way applications, data lakes & ML models are built & deployed by the world’s leading organizations. From retail organizations to real-time ad bidding platforms, our engineers combine knowledge, experience, and innovation to achieve measurable results with every project.</p>
                    <div className="flex h-12 border border-yellow-500">
                        <p className="justify-center mt-5 text-orange-600"><a >Read Customer Stories </a></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MiddleSection
