import { eventStatsModal } from './EventStatsModal.js';
import boardActionsDropdown from '../../boardActionsDropdown.js';
import { eventAutocomplete } from '../../EventAutocomplete.js';
import { gameStudyDropdown } from '../../GameStudyDropdown.js';
import historyButtons from '../../historyButtons.js';
import { sanWebSocket } from '../../../SanWebSocket.js';

await sanWebSocket.connect();

sessionStorage.clear();

eventStatsModal.props.modal.show();
