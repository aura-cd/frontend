import "@patternfly/react-core/dist/styles/base.css";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineWrapText } from "react-icons/md";
import {
  LogViewer as LogViewerOriginal,
  LogViewerSearch,
} from "@patternfly/react-log-viewer";
import { FC, useState } from "react";

import { useLog } from "@/hook/useLog";

import Styles from "./LogViewer.module.scss";

type Props = {
  organization: string;
  pod: string;
};

const LogViewer: FC<Props> = ({ organization, pod }) => {
  const log = useLog(organization, pod);
  const [isTextWrapped, setIsTextWrapped] = useState(false);
  const [isScrollFollow, setIsScrollFollow] = useState(true);

  return (
    <LogViewerOriginal
      data={log}
      isTextWrapped={isTextWrapped}
      scrollToRow={isScrollFollow ? log.length - 1 : undefined}
      toolbar={
        <div className={Styles.toolbar}>
          <LogViewerSearch placeholder="Search value" minSearchChars={2} />
          <button
            className={`${Styles.button} ${isTextWrapped && Styles.enable}`}
            onClick={() => setIsTextWrapped((pv) => !pv)}
          >
            <MdOutlineWrapText />
          </button>
          <button
            className={`${Styles.button} ${isScrollFollow && Styles.enable}`}
            onClick={() => setIsScrollFollow((pv) => !pv)}
          >
            <MdKeyboardDoubleArrowDown />
          </button>
        </div>
      }
    />
  );
};

export { LogViewer };
