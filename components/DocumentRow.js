import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import {useRouter} from "next/dist/client/router"


function DocumentRow({ id, fileName, date}) {

  const router = useRouter();


  return (
    <div 
      onClick={()=> router.push(`/doc/${id}`)}
      className="flex items-center p-4 rounded-lg hover:bg-gray-100 cursor-pointer">
      <Icon name="article" size="3xl" color="orange"/>
      <p className="flex-grow pl-5 w-10 pr-10 truncate font-medium text-gray-700">{fileName}</p>
      <p className="pr-5 text-sm font-medium text-gray-700">{date?.toDate().toLocaleDateString()}</p>
      <Button
        color="gray"
        buttonType="outline"
        rounded
        iconOnly
        ripple="dark"
        className="border-0"
      >
        <Icon name="more_vert" size="3xl"/>
      </Button>
    </div>
  )
}

export default DocumentRow
