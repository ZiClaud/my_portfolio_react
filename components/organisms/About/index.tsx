import React, {FC} from "react";
import AboutProps from "./index.types"
import Typography from "@atoms/Typography";

const About: FC<AboutProps> = ({}) => {
    return <>
        <Typography variant="h4" color="neutral-1" bold={true}>A BIT ABOUT ME</Typography>

        <Typography variant="h3" color="neutral-2" bold={false}>
            As a software developer, I am driven to create digital experiences that are both
        </Typography>
        <Typography variant="h3" color="neutral-1" bold={true}>
            visually striking and intuitive to navigate.
        </Typography>
        <Typography variant="h3" color="neutral-2" bold={false}>
            Besides programming, I am also deeply interested in
        </Typography>
        <Typography variant="h3" color="neutral-1" bold={true}>
            design, music, and chess.
        </Typography>
    </>
}

export default About