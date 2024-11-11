import React from 'react'

function Frontpage() {
  return (
    <div>
      <div className="items-center text-center">
        <h1 className="text-3xl font-semibold px-3 py-4">Build AI Cloud with Kubernetes & Open Source</h1>
        <p className="text-gray-400">We help build GPU Cloud, modernize applications and infrastructure with<br></br> our expertise in cloud native technologies.</p>
      </div>

      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-[90%] h-80 flex items-center justify-center">
            this is image
          </div>
          <div className="text-center font-bold">
            <span>Trusted by leading Companies</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Frontpage
