import React from 'react'

const Daily =() => {
  return (
    <div className="mt-10">
            <img
              className="md:w-96 h-50 "
              src={product9}
              alt=""
            />
            <div className="mt-8">
              <p className="font-semibold text-lg">More Features coming soon!</p>
              <p className="text-gray-400 ">By Ezekiel Ojo</p>
              <p className="mt-8 text-sm text-gray-400">
             More features like login, signup, and more will be coming soon.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
  )
}

export default Daily;