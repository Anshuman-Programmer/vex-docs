
import Header from '../components/Header'
import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import Image from "next/image"
import {useSession, getSession} from "next-auth/client"
import Login from '../components/Login'
import Modal from "@material-tailwind/react/Modal"
import ModalBody from "@material-tailwind/react/ModalBody"
import ModalFooter from "@material-tailwind/react/ModalFooter"
import { useState } from 'react'

export default function Home() {

  const [session] = useSession();
  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState(false)

  if(!session) return <Login/>

  const modal = (
    <Modal
      size="sm"
      active={showModal}
      toggler={()=>setShowModal(false)}
    >

      <ModalBody>
        <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          type="text"
          className="outline-none w-full"
          placeholder="Enter name of document..."
          onKeyDown={(e)=> e.key === "Enter" && createDocument}
        />
      </ModalBody>

      <ModalFooter>
        <Button
          color="orange"
          buttonType="link"
          onClick={(e)=> setShowModal(false)}
          ripple="dark"
        >
          Cancel
        </Button>

        <Button color="orange" onClick={createDocument} ripple="light">
          Create
        </Button>
      </ModalFooter>

    </Modal>
  )

  return (
    <div>

      <Header/>

      <section className="bg-[#f8f9fa] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between pt-4 pb-1 pl-1">
            <h2 className="text-gray-700 font-medium">Start a new document</h2>

            <Button
              color="gray"
              buttonType="outline"
              rounded
              iconOnly
              ripple="dark"
              className="border-0 cursor-pointer"
            >
              <Icon name="more_vert" size="3xl"/>
            </Button>
          </div>

          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-300">
              <Image src="/plus.png" layout="fill"/>
            </div>
            
            <p className="ml-2 mt-1 font-medium text-sm text-gray-700">Blank</p>
          </div>

        </div>
      </section>

      <section className="bg-white px-10 md:px-0 py-5">
        <div className="max-w-3xl mx-auto ">
          <div className="flex items-center justify-between pb-5 font-medium text-gray-700">
            <h2 className="flex-grow">My Document</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="gray"/>
          </div>
          
        </div>
      </section>



    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context)

  return{
    props:{
      session,
    }
  };
}
