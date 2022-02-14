import {Image,UnorderedList, ListItem, Avatar, Box, Flex, Grid, GridItem,Text, Heading, HStack, Link, Button, VStack, Stack, Wrap, WrapItem, Center, SimpleGrid, Divider} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { HiOutlineMail } from "react-icons/hi";
import Script from 'next/script';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Box w={'100%'} h='100vh' bg="gray.900">
      <Flex h='100%' w='100%' justifyContent='center' alignItems={'center'}>
        <Stack spacing={'30px'}>
          <Center>
            <Heading className={styles.firstTitle} as='h1'  fontSize={{lg:'9xl', md: '8xl', sm : '6xl'}}>ÉTUDIANTE.</Heading>
          </Center>
          <Center>
            <Heading className={styles.secondTitle} as='h1' fontSize={{lg:'9xl', md: '8xl', sm : '6xl'}}>DÉVELOPPEUSE WEB.</Heading>
          </Center>
          <Center>
            <Heading className={styles.thirdTitle} as='h1'  fontSize={{lg:'9xl', md: '8xl', sm : '6xl'}}>DÉSIGNEUSE.</Heading>
          </Center>
        </Stack>
      </Flex>
    </Box>
    <Box h='auto' w='100%' bg='gray.900'>
          <Flex alignItems={'center'} justifyContent={'center'} mb='30px'>
            <Image w='15%' rounded={'full'} src={'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/105918033_314625059576947_7515588998069450974_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=LC9eoKxgmpkAX_Plhtb&_nc_ht=scontent-cdg2-1.xx&oh=00_AT8AqXbAcVmCbe8HNJS0btPQUDgehCjFPyL7JISKhsyDoA&oe=622EC263'} />
          </Flex>
          <Box>
          <Center>
            <Heading mb={'30px'} className={styles.firstTitle} as='h1' fontSize={'6xl'}>QUI SUIS-JE ?</Heading>
          </Center>

            <Flex w='100%' justifyContent={'center'}>
              <Text w='50%' fontSize='2xl' color="white" p='5px' mb='50px'>
                          Mon nom est Sarah Delobel, j&apos;ai 25 ans et je suis actuellement en IUT informatique en année spéciale à Amiens.
                          <br />  <br />
                          Avant de rejoindre le domaine de l&apos;informatique, j&apos;ai obtenue une licence d&apos;arts, cette licence m&apos;a permis 
                          d&apos;acquérir des compétences dans le design, de développer un esprit critique et de solide connaissance dans 
                          le domaine de l&apos;art. 
                          <br />  <br />

                          Ma passion pour l&apos;informatique à commencer en autodidacte, puis j&apos;ai décidée de me
                          réorienter pour en faire mon métier.
                          <br />  <br />
 
                          Actuellement je cherche un stage pour valider mon DUT en année spéciale 
                          à partir du 13 Juin jusqu&apos;au 19 Août.
                          <br />  <br />
                          Pour la rentrée prochaine, je recherche une alternance pour poursuivre mes études en licence professionnel RGI ( Réseau et Génie Informatique en option WEB ). 
              </Text>
            </Flex>
          </Box>
    </Box>
    <Box h='auto' w='100%' bg='gray.900' >
      <Center>
        <Heading mb={'30px'} className={styles.secondTitle} as='h1' fontSize={'6xl'}>MES SOFT-SKILLS </Heading>
      </Center>
      <SimpleGrid columns={[1,1,2]} spacing={10}>
      <Flex height='120px' justifyContent={'center'} alignItems='center'>
        <Heading className={styles.sixedTitle} as='h1' fontSize={{lg:'5xl', md: '4xl', sm : '3xl'}}>COMMUNICATION.</Heading>
      </Flex>
      <Flex height='120px' justifyContent={'center'} alignItems='center'>
        <Heading className={styles.firstTitle} as='h1' fontSize={{lg:'5xl', md: '4xl', sm : '3xl'}}>INTELLIGENCE ÉMOTIONNELLE.</Heading>
      </Flex>
      <Flex height='120px' justifyContent={'center'} alignItems='center'>
        <Heading className={styles.fourthTitle} as='h1' fontSize={{lg:'5xl', md: '4xl', sm : '3xl'}}>ADAPTABILITÉ.</Heading>
      </Flex>
      <Flex height='120px' justifyContent={'center'} alignItems='center'>
        <Heading className={styles.thirdTitle} as='h1' fontSize={{lg:'5xl', md: '4xl', sm : '3xl'}}>ÉSPRIT D&apos;ÉQUIPE.</Heading>
      </Flex>
      </SimpleGrid>
    </Box>
    <Box h='auto' w='100%' bg='gray.900' pt='50px' >
      <Center>
        <Heading mb={'30px'} className={styles.fifthTitle} as='h1' fontSize={'6xl'}>MES HARD-SKILLS </Heading>
      </Center>
      <SimpleGrid columns={[1,2,4]}>
        <Flex h='150px' justifyContent={'center'} mt='50px'>
          <Image src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"></Image>
        </Flex>
        <Flex h='150px' justifyContent={'center'} mt='50px'>
          <Image src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"></Image>
        </Flex>
        <Flex h='150px' justifyContent={'center'} mt='50px'>
          <Image src="https://icon-library.com/images/node-512_85847.png"></Image>
        </Flex>
        <Flex h='150px' justifyContent={'center'} mt='50px'>
          <Image src="https://qph.fs.quoracdn.net/main-qimg-744f96b18fb3ef81b05512d78b679e25"></Image>
        </Flex>
        <Flex h='150px' justifyContent={'center'} mt='50px'>
          <Image src="https://bradlc.gallerycdn.vsassets.io/extensions/bradlc/vscode-tailwindcss/0.7.6/1642429283725/Microsoft.VisualStudio.Services.Icons.Default"></Image>
        </Flex>
        <Flex h='150px' justifyContent={'center'} mt='50px'>
          <Image src="https://miro.medium.com/max/670/0*UTBrDcrJ6SbePBzR"></Image>
        </Flex>
        <Flex h='150px' justifyContent={'center'} mt='50px'>
          <Image rounded={'full'} src="https://logo-marque.com/wp-content/uploads/2020/11/Adobe-Photoshop-Logo.png"></Image>
        </Flex>
        <Flex h='150px' justifyContent={'center'} mt='50px'>
          <Image rounded={'full'} src="data:image/png;base64,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"></Image>
        </Flex>
      </SimpleGrid>
    </Box>
    <Box h='auto' w='100%' bg='gray.900' pt='50px' pb='50px' >
      <Center>
        <Heading mb={'30px'} className={styles.thirdTitle} as='h1' fontSize={'6xl'}>MES PROJETS </Heading>
      </Center>
      <Center>
        <Heading mb={'30px'} className={styles.firstTitle} as='h2' fontSize={'5xl'}>LE SHIBA</Heading>
      </Center>
      <Flex alignItems={'center'} justifyContent={'center'}>
        <Link color='white' href="https://www.figma.com/proto/Z2Rdr2BEykVHXopisbD5KT/Carte-Le-Shiba?node-id=11%3A341&scaling=contain&page-id=0%3A1&starting-point-node-id=11%3A346">Cliquez ici pour voir le site</Link>
      </Flex>
      <SimpleGrid columns={[1,1,1]}>
        <Flex justifyContent={'center'} mt='50px'>
          <Image src="https://cdn.discordapp.com/attachments/874612697482797107/942570841571463238/Capture_decran_2022-02-14_a_00.58.57.png"></Image>
        </Flex>
        </SimpleGrid>
        <Center>
          <Heading pt={'150px'} mb={'30px'} className={styles.firstTitle} as='h2' fontSize={'5xl'}>LE GOBLET</Heading>
        </Center>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Link color='white' href="https://sarahdelobel.github.io/le_goblet/">Cliquez ici pour voir le site</Link>
        </Flex>
        <SimpleGrid columns={[1,1,1]}>
          <Flex justifyContent={'center'} mt='50px'>
            <Image src="https://cdn.discordapp.com/attachments/874612697482797107/942573672093335592/Capture_decran_2022-02-14_a_01.10.54.png"></Image>
          </Flex>
        </SimpleGrid>
    </Box>
    </>
  )
}


export default Home
