

import "../assets/1.css"
import MonthTracker from "../components/MonthTracker";
import YearTracker from "../components/YearTracker";
import DataBox from "../components/DataBox";
import { Group } from "@mantine/core";

function About() {

    return (
        <Group p={'md'} mt={'10rem'} mb={'10rem'}>
            <Group  id="tracker-box">
                <MonthTracker />
                <YearTracker />
            </Group>
            <DataBox />
        </Group>
    )
}

export default About