//optimised version of the basic images and link component
import Link from 'next/link'
import Image from 'next/image'
//chakra-ui is a component-library that allow building app
import { Flex, Box, Text, Button } from '@chakra-ui/react'

//purpose is coming throught props in the functional component
const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => (
  //react component used to creact flex box
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5" >
      <Text color="gray.500" fontSize="sm" fontweight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontweight="bold">{title1} <br/> {title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br /> {desc2}</Text>
      <Button fontFamily="x1" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

//exporting functional component with props purpose
export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Banner
        purpose= "RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartment, VIllas, Homes"
        desc2=" and more"
        buttonText="Explore"
        linkName="/search?purpose+=for-rent"
        imageUrl= ""
        />
      <Banner  purpose={' For Rent'}/>
    </div>
  )
}
