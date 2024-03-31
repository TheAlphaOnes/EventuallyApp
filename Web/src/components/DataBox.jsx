import { Group, Text } from "@mantine/core";

import "../assets/1.css";
import DotBar from "../assets/datbar.svg";

function DataBox() {
    return (
        <Group id="box-data" justify="flex-start" align="center">
            <Group className="Edata" gap={"xs"} align="center">
                <img src={DotBar} alt="" /> <Text>Consistent Journaling : 5 day</Text>
            </Group>
            <Group className="Edata" gap={"xs"} align="center">
                <img src={DotBar} alt="" /> <Text>Total Events Registered : 23</Text>
            </Group>
            <Group className="Edata" gap={"xs"} align="center">
                <img src={DotBar} alt="" /> <Text>Total Days of Journaling : 23</Text>
            </Group>
            <Group className="Edata" gap={"xs"} align="center">
                <img src={DotBar} alt="" /> <Text>Total Photo Memories : 23</Text>
            </Group>
            <Group className="Edata" gap={"xs"} align="center">
                <img src={DotBar} alt="" /> <Text>Years of Journaling : 2023 2024</Text>
            </Group>
        </Group>
    );
}

export default DataBox;
