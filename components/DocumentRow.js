import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useSession } from "next-auth/client";
import {useRouter} from "next/dist/client/router"
import {db} from "./../firebase"


function DocumentRow({ id, fileName, date}) {

  const [session] = useSession();
  const router = useRouter();


  const docDelete = () => {

    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    window.location.reload(true)

  }


  return (
    <div className="flex justify-between items-center hover:bg-gray-100 rounded-lg" >
      <div 
        onClick={()=> router.push(`/doc/${id}`)}
        className="flex  flex-grow items-center p-4 cursor-pointer">
        <Icon name="article" size="3xl" color="orange"/>
        <p className="flex-grow pl-5 w-10 pr-10 truncate font-medium text-gray-700">{fileName}</p>
        <p className="pr-5 text-sm font-medium text-gray-700">{date?.toDate().toLocaleDateString()}</p>
      </div> 
      <Button
          color="gray"
          buttonType="outline"
          rounded
          iconOnly
          ripple="dark"
          className="border-0 pr-4"
        >
          <Icon name="more_vert" size="3xl" onClick={()=>docDelete()}/>
      </Button>
    </div>
    
  )
}

export default DocumentRow
