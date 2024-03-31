import { Card, Group, List, Text } from "@mantine/core"

function Info() {
    return (
        <Group justify="center" gap={0} p={"md"} mb={'10rem'} mt={'10rem'} style={{
            flexDirection: 'column'
        }}>
           
            <Group   gap={0} w={'100%'} justify="center" p={"sm"} style={{ boxShadow: 'rgb(110, 85, 148) 0px 0px 13px 3px', borderRadius: '8px', background: '#3f3f3f', flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'serif', fontStyle: 'italic' }} ta={'center'}>For 1% better</Text>
                <Text ta={'center'}>Lorem ipsum dolor  consectetur adipisicing elit.</Text>
            </Group>


            <Card shadow="sm" mt={'xl'} padding="xs" radius="md" style={{ border: '1px solid #6e5594' }}>
                <Card.Section style={{ background: 'black', borderBottom: '1px solid #6e5594' }} py={'xs'} px={'md'}>
                    <Text fw={500}>learnings</Text>
                </Card.Section>


                <List size="sm" c="#ffffff" mt={'sm'} ml={'sm'}>
                    <List.Item>Clone or download repository from GitHub</List.Item>
                    <List.Item>Install dependencies with yarn</List.Item>
                    <List.Item>To start development server run npm start command</List.Item>
                    <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                    <List.Item>Submit a pull request once you are done</List.Item>
                </List>

            </Card>

            <Card shadow="sm" mt={'md'} padding="xs" radius="md" style={{ border: '1px solid #6e5594' }}>
                <Card.Section style={{ background: 'black', borderBottom: '1px solid #6e5594' }} py={'xs'} px={'md'}>
                    <Text fw={500}>Negatives</Text>
                </Card.Section>


                <List size="sm" c="#ffffff" mt={'sm'} ml={'sm'}>
                    <List.Item>Clone or download repository from GitHub</List.Item>
                    <List.Item>Install dependencies with yarn</List.Item>
                    <List.Item>To start development server run npm start command</List.Item>
                    <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                    <List.Item>Submit a pull request once you are done</List.Item>
                </List>

            </Card>
        </Group>
    )
}

export default Info
