import {FC, useState} from "react";
import {useLog} from "@/hook/useLog";
import {LogViewer as LogViewer_,LogViewerSearch} from "@patternfly/react-log-viewer";
import "@patternfly/react-core/dist/styles/base.css";
import Styles from "./LogViewer.module.scss";
import WrapTextIcon from '@mui/icons-material/WrapText';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

type Props = {
  organization: string;
  pod: string;
}

const LogViewer:FC<Props> = ({organization,pod}) => {
  const log = useLog(organization,pod);
  const [isTextWrapped, setIsTextWrapped] = useState(false);
  const [isScrollFollow, setIsScrollFollow] = useState(true);

  return (
    <LogViewer_
      data={log}
      isTextWrapped={isTextWrapped}
      scrollToRow={isScrollFollow?log.length - 1 : undefined}
      toolbar={<div className={Styles.toolbar}>
        <LogViewerSearch placeholder="Search value" minSearchChars={2}/>
        <button className={`${Styles.button} ${isTextWrapped&&Styles.enable}`} onClick={() => setIsTextWrapped(pv=>!pv)}>
          <WrapTextIcon/>
        </button>
        <button className={`${Styles.button} ${isScrollFollow&&Styles.enable}`} onClick={() => setIsScrollFollow(pv=>!pv)}>
          <KeyboardDoubleArrowDownIcon/>
        </button>
      </div>}
    />
  );
}

export {LogViewer}
