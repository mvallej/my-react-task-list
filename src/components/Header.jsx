import { Text, Center } from "@chakra-ui/react"
export default function Header(){
    return (
        <Center >

    <Text
    bgGradient='linear(to-r, teal.500, green.500)'
    bgClip='text'
    fontSize='6x1'
    fontWeight='extrabold'
  >
    Todo App
  </Text>
 
</Center>
    )
}