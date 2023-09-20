import Paragraph from "./src/paragraph.vue";
import Text from "./src/text.vue";
import Title from "./src/title.vue";
import { withInstall } from "../../utils";

export const FrontParagraph = withInstall(Paragraph);
export const FrontText = withInstall(Text);
export const FrontTitle = withInstall(Title);
export default FrontParagraph;
export * from "./src/typography";
