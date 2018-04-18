import { withInfo } from "@storybook/addon-info";
const wInfoStyle = {
    header: {
        h1: {
            marginRight: "20px",
            fontSize: "15px",
            display: "inline"
        },
        body: {
            paddingTop: 0,
            paddingBottom: 0
        },
        h2: {
            display: "inline",
            color: "#999"
        }
    },
    infoBody: {
        backgroundColor: "#cccccc",
        padding: "25px",
        lineHeight: "2"
    }
};
export const wInfo = text => withInfo({ styles: wInfoStyle, header: false, inline: true});