import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiStyledcomponents,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiPostgresql,
  SiReactrouter,
  SiPython,
  SiDjango,
  SiExpress,
} from "react-icons/si";
import { TecnologiasStyle } from "./TecnologiasStyle";
import { Title } from "../../Titles";

export const Tecnologias = ({ sizeIcon }: { sizeIcon: number }) => {
  return (
    <>
      <TecnologiasStyle id="stacks">
        <div className="effectScrollMonitoring">
          <Title text={"Tecnologias"} />

          <ul>
            <li>
              <SiJavascript fontSize={sizeIcon} />
              <h3>JavaScript</h3>
            </li>

            <li>
              <SiTypescript fontSize={sizeIcon} />
              <h3>Typescript</h3>
            </li>

            <li>
              <SiReact fontSize={sizeIcon} />
              <h3>React</h3>
            </li>

            <li>
              <SiHtml5 fontSize={sizeIcon} />
              <h3>HTML 5</h3>
            </li>

            <li>
              <SiCss3 fontSize={sizeIcon} />
              <h3>CSS 3</h3>
            </li>

            <li>
              <SiStyledcomponents fontSize={sizeIcon} />
              <h3>Styled-components</h3>
            </li>

            <li>
              <SiNodedotjs fontSize={sizeIcon} />
              <h3> Node.js</h3>
            </li>

            <li>
              <SiExpress fontSize={sizeIcon} />
              <h3>Express</h3>
            </li>

            <li>
              <SiPython fontSize={sizeIcon} />
              <h3>Python</h3>
            </li>

            <li>
              <SiDjango fontSize={sizeIcon} />
              <h3>Django</h3>
            </li>

            <li>
              <SiPostgresql fontSize={sizeIcon} />
              <h3>PostgreSQL</h3>
            </li>

            <li>
              <SiGithub fontSize={sizeIcon} />
              <h3>GitHub</h3>
            </li>
          </ul>
        </div>
      </TecnologiasStyle>
    </>
  );
};
