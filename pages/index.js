import Head from 'next/head'
import Header from '../components/Header'
import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vexcode Docs</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header/>

      <section className="bg-[#f8f9fa] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between pt-4 pb-2">
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

    </div>
  )
}
