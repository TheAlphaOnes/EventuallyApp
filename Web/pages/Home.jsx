import { useState, useEffect } from "react";
import { Button, Group, Image, Input, Modal, Paper, Stack, Text, Textarea, Title, rem } from "@mantine/core";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css'
import { useDisclosure, useToggle } from '@mantine/hooks';
import '@mantine/dropzone/styles.css';
import { IconBrain, IconPhoto, IconQuote, IconTextCaption, IconUpload, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";


function Home() {
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        const contentContainer = document.getElementById("content-container");
        if (contentContainer) {
            setContentHeight(contentContainer.offsetHeight);
        }
    }, []);
    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
    }

    const [opened, { open, close }] = useDisclosure(false);
    const [value, toggle] = useToggle([null, 'pictures', 'story', 'thought']);
    const [dropImages, setDropImage] = useState(null)



    return (<>
        <Modal styles={{ content: { background: '#3f3f3f', border: '1px solid #6e5594' }, header: { background: '#3f3f3f', display: 'none', }, body: { paddingTop: '16px' }, title: { color: 'white', textAlign: 'center', fontWeight: 600 } }} centered bg={'blue'} style={{ border: `${opened && '1px solid #6e5594'}` }} opened={opened} onClose={() => { close(); toggle(null); setDropImage(null) }}  >

            {!value &&
                <Group justify="flex-start">
                    <Title fz={"h4"} c={'white'}>What's your mood saying?</Title>
                    <Button onClick={() => toggle('pictures')} justify="center" leftSection={<IconPhoto />} variant="outline" color="violet">
                        Pictures</Button>
                    <Button onClick={() => toggle('story')} justify="center" leftSection={<IconTextCaption />} variant="outline" color="violet">
                        Story</Button>
                    <Button onClick={() => toggle('thought')} justify="center" leftSection={<IconQuote />} variant="outline" color="violet">
                        Thought</Button>
                </Group>}
            {value === 'pictures' && !dropImages &&
                <Dropzone
                    onDrop={(files) => { setDropImage(files); console.log(files) }}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={5 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    bg={'#3f3f3f'}
                >
                    <Group justify="center" gap="0" mih={100} style={{ pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                            <IconUpload
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                                stroke={1.5}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                                stroke={1.5}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                                stroke={1.5}
                            />
                        </Dropzone.Idle>

                        <Title ta={'center'} c={'dimmed'} fz={"h4"}>Save your observations!</Title>
                    </Group>
                </Dropzone>
            }
            {value === 'pictures' && dropImages &&
                <Stack>
                    <Group wrap="nowrap" style={{ overflowX: 'scroll' }}>
                        {
                            dropImages.map((img, index) =>
                                <Image key={index}
                                    radius="xs"
                                    h={'3rem'}
                                    src={URL.createObjectURL(img)}
                                />
                            )
                        }


                    </Group>
                    <Button variant="outline" fullWidth color="violet" radius="md">Upload</Button>
                </Stack>
            }
            {value === 'thought' &&
                <Stack gap={0}>
                    <IconQuote color="white" size={40} />
                    <Textarea
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Write you thought..."
                    />


                    <Group justify="flex-end">
                        <Button variant="filled" size="md" radius={"xl"} color="violet">
                            Submit</Button>
                    </Group>
                </Stack>

            }
            {value === 'story' &&

                <Stack gap={0}>
                    <IconBrain color="white" size={40} />
                    <Textarea  style={{color:'white'}}
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Write your story..."
                    />

                    <Group justify="flex-end">
                        <Button variant="filled" size="md" radius={"xl"} color="violet">
                            Submit</Button>
                    </Group>
                </Stack>


            }
        </Modal>

        <Group w={"100%"} px={"xs"} h={"100vh"}>
            <Group w={"100%"} h={"100%"} gap={0} wrap="nowrap" align="flex-start">
                <TimeLine height={contentHeight} open={open} />
                <Group
                    pos={"relative"}
                    align="flex-start"
                    style={{ flexDirection: "column" }}
                    left={"-50px"}
                >
                    <div id="content-container">
                        <Date />
                        <Paper w={'115%'} mt={'xl'} p={'xs'} shadow="xs" bg={'#3f3f3f'} style={{ border: '1px solid #6e5594' }} radius="md">
                            <Splide aria-label="My Favorite Images"
                                options={options}
                                aria-labelledby="autoplay-example-heading"
                                hasTrack={false}>
                                <SplideTrack>
                                    <SplideSlide>
                                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                                        />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Image 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                                        />
                                    </SplideSlide>
                                </SplideTrack>
                            </Splide>
                            <Group justify="space-between">
                                <Text size="md" mt={"2px"} c={"#9e9e9e"}>
                                    02:23 PM
                                </Text>
                                <Text size="md" mt={"2px"}>
                                    😘
                                </Text>
                            </Group>

                        </Paper>

                        <CardNormal />
                        <CardNormal />
                        <CardNormal />
                        <CardNormal />
                        <CardNormal />
                        <CardNormal />
                        <AbnormalPaper />
                    </div>
                </Group>
            </Group>
        </Group>
    </>

    );
}

function TimeLine({ height, open }) {
    const addedHeight = Number(height) + 400
    return (
        <div
            style={{
                position: "relative",
                zIndex: -1,
                marginLeft: "1.25rem",
                height: addedHeight + "px", // Dynamic height based on content
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <div style={{ width: "1px", background: "white", height: "100%" }}></div>
            <svg
                onClick={open}
                width="60"
                height="56"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12.3796 15.8527H0C0 14.4336 0.317426 13.3319 0.952279 12.5477C1.62448 11.7634 2.59543 11.3713 3.86513 11.3713H12.3796V4.0892C12.3796 2.63277 12.7904 1.58713 13.612 0.95228C14.4709 0.317427 15.7593 0 17.4771 0V11.3713H29.8007C29.8007 12.7904 29.4646 13.8921 28.7924 14.6763C28.1576 15.4605 27.1866 15.8527 25.8796 15.8527H17.4771V23.1908C17.4771 25.9169 15.778 27.28 12.3796 27.28V15.8527Z"
                    fill="#685089"
                />
            </svg>
            <div style={{ height: "10rem" }}></div>
        </div>
    );
}

function Date() {
    return (
        <Text
            mt={"xl"}
            style={{
                fontFamily: "serif",
                WebkitTextStroke: "1px #6e5594",
                color: "#303230",
                fontSize: "3rem",
                fontStyle: "italic",
                fontWeight: "bolder",
            }}
        >
            2023
        </Text>
    );
}

function CardNormal() {
    return (
        <Paper mt={'xl'}
            w={"115%"}
            shadow="xs"
            bg={"#3f3f3f"}
            style={{ border: "1px solid #6e5594" }}
            radius="md"
            p={"xs"}
        >
            <Text size="md" c={"#FFFFFF"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                doloremque officia at tempora delectus error possimus iusto ea unde aut.
            </Text>
            <Group justify="space-between">
                <Text size="md" mt={"2px"} c={"#9e9e9e"}>
                    02:23 PM
                </Text>
                <Text size="md" mt={"2px"}>
                    😘
                </Text>
            </Group>
        </Paper>
    );
}

function AbnormalPaper() {
    return (
        <Paper w={'115%'} mt={'xl'} shadow="xs" bg={'#3f3f3f'} style={{ border: '1px solid #6e5594' }} radius="md" p={'xs'}>
            <Text size="xl" mx={'xl'} c={'#FFFFFF'} style={{
                fontFamily: 'serif', fontStyle: 'italic'
            }} ta={'center'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi doloremque officia at tempora delectus error possimus iusto ea unde aut.</Text>
            <Group justify="space-between">

                <Text size="md" mt={'2px'} c={'#9e9e9e'}>02:23 PM</Text>
                <Text size="md" mt={'2px'}>😘</Text>
            </Group>
        </Paper>
    )
}




export default Home;

