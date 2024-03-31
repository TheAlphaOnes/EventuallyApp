import { Box, Card, Group, List, Text } from "@mantine/core";
import { Calendar } from "@mantine/dates"
import '@mantine/dates/styles.css';

function Yearly() {
    return (
        <Group w={'100%'} p={'md'} justify="center" mt={'10rem'} mb={'10rem'}>
            <Box py={'xs'} px={'md'} bg={'#363636'} style={{ borderRadius: '8px' }}>
                <Calendar styles={{day:{border:'2px solid #685089', margin:'3px', borderRadius:'6px' }, calendarHeaderLevel:{border: '2px solid #685089',borderRadius:'6px' }}}/>
            </Box>


            <Card shadow="sm" mt={'xl'} padding="xs" radius="md" style={{ border: '1px solid #6e5594' }}>
                <Card.Section style={{ background: 'black', borderBottom: '1px solid #6e5594' }} py={'xs'} px={'md'}>
                    <Text ta={'center'} fw={500}>learnings</Text>
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


export default Yearly
