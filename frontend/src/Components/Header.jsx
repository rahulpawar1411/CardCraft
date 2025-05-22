import React from 'react'

const Header = () => {
  return (
   <>
<header className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-xs z-50 py-4 px-6 flex justify-center shadow-md">
  <div
    className="text-4xl font-extrabold select-none text-blue-500"
    style={{
      fontFamily: "'Luckiest Guy', cursive",
    }}
  >
    CardCraft
  </div>
</header>


   </>
  )
}

export default Header