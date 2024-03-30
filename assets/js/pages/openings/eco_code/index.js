import openingsEcoCodeModal from './openingsEcoCodeModal.js';
import myChesslaBlabDropdown from '../../../my_chesslablab/myChesslaBlabDropdown.js';
import boardActionsDropdown from '../../../pages/boardActionsDropdown.js';
import gameStudyDropdown from '../../../pages/gameStudyDropdown.js';
import historyButtons from '../../../pages/historyButtons.js';
import ws from '../../../sanWs.js';

await ws.connect();

localStorage.clear();

openingsEcoCodeModal.modal.show();
