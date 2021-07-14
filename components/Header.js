import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded
        iconOnly
        ripple="dark"
        className="h-14 w-14 border-0 cursor-pointer"
      >
        <Icon name="menu" size="2xl"/>
      </Button>
      <Icon name="description" size="5xl" color="orange" className="cursor-pointer"/>
      <h1 className="text-gray-700 text-2xl pl-2 cursor-pointer">Docs</h1>

      <div className="flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg mx-5 focus-within:text-gray-800 focus-within:shadow-md">
        <Icon name="search" size="3xl" color="gray"/>
        <input type="text" placeholder="Search" className="flex flex-grow px-5 text-base bg-transparent outline-none "/>
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded
        iconOnly
        ripple="dark"
        className="ml-5 h-14 w-14 border-0">

          <Icon name="apps" size="3xl" color="gray"></Icon>
        
      </Button>

      <img
        loading="lazy"
        className="cursor-pointer h-10 w-10 rounded-full ml-2 mr-2 border-transparent hover:border-gray-200 border-4"
        src="https://lh3.googleusercontent.com/ogw/ADea4I5qv09uJUX-ji_HdEqYUsKPqYuo96407glkkK3Afg=s32-c-mo"
        alt="user profile"
      />
      
    </header>
  )
}

export default Header
