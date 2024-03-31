import { Group } from "@mantine/core"
import { Link, useLocation } from "react-router-dom"

function BottomBar() {
    const {pathname} = useLocation()
    return (
        <Group w={'100%'} p={'xs'} pos={'fixed'} bottom={'0'} style={{zIndex:2983}}>
            <Group py={'sm'} px={'sm'} justify="center" w={'100%'} style={{ borderRadius: '8px' }} bg={'#3f3f3f'} >

                <Link to={'/home'}>
                    <Group w={40} h={40} justify="center" style={{ border: `1px solid ${pathname === '/home'? 'red': 'white'}`, borderRadius: '8px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={'28px'} height={'28px'} fill="#6e5594" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
                    </Group>
                </Link>

                <Link to={'/info'}>
                    <Group w={40} h={40} justify="center" style={{border: `1px solid ${pathname === '/info'? 'red': 'white'}`, borderRadius: '8px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={'28px'} height={'28px'} fill="#6e5594" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM68,188a12,12,0,1,1,12-12A12,12,0,0,1,68,188Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,68,140Zm0-48A12,12,0,1,1,80,80,12,12,0,0,1,68,92Zm124,92H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Zm0-48H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Zm0-48H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Z"></path></svg>
                    </Group>
                </Link>

                <Link to={'/yearly'}>
                    <Group w={40} h={40} justify="center" style={{ border: `1px solid ${pathname === '/yearly'? 'red': 'white'}`,borderRadius: '8px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={'28px'} height={'28px'} fill="#6e5594" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM84,184a12,12,0,1,1,12-12A12,12,0,0,1,84,184Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,184Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,144Zm44,40a12,12,0,1,1,12-12A12,12,0,0,1,172,184Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,172,144Zm36-64H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"></path></svg>
                    </Group>
                </Link>

                <Link to={'/you'}>
                    <Group w={40} h={40} justify="center" style={{ border: `1px solid ${pathname === '/you'? 'red': 'white'}`, borderRadius: '8px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={'28px'} height={'28px'} fill="#6e5594" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z"></path></svg>
                    </Group>
                </Link>

            </Group>
        </Group>
    )
}

export default BottomBar
