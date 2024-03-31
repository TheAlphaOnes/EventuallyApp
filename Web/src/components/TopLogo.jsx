import { Group } from "@mantine/core"
import logo from '../assets/Eventually.svg';
import RoseBar from '../assets/Rose.svg';
import "../assets/1.css"

function TopLogo() {
    return (
        <Group pt={'md'} gap={'sm'} justify="center" align="center" style={{  background: '#252525', zIndex: 2309 }} pos={'fixed'} top={'0'} >

            <img src={logo} alt="logo" />
            <img src={RoseBar} alt="rosebara" id="rose-bar" />
        </Group>
    )
}

export default TopLogo