import { getConnectedPlayerUIContainer } from '../PlayerUIContainer/PlayerUIContainer';
import UnconnectedSkipButton from '../../controls/SkipButton/SkipButton';
import UnconnectedTimeDisplay from '../../controls/TimeDisplay/TimeDisplay';
import UnconnectedQualitySelector from '../../controls/QualitySelector/QualitySelector';
import UnconnectedBufferingIndicator from '../../controls/BufferingIndicator/BufferingIndicator';
import connectControl from './connectControl';
import UnconnectedAudioSelector from '../../controls/AudioSelector/AudioSelector';
import UnconnectedPlayPauseButton from '../../controls/PlayPauseButton/PlayPauseButton';
import UnconnectedSubtitlesSelector from '../../controls/SubtitlesSelector/SubtitlesSelector';
import UnconnectedVolume from '../../controls/Volume/Volume';
import UnconnectedGotoLiveButton from '../../controls/GotoLiveButton/GotoLiveButton';
import UnconnectedTimeline from '../../controls/Timeline/Timeline';

export const PlayerUIContainer = getConnectedPlayerUIContainer(connectControl);
export const PlayPauseButton = connectControl(UnconnectedPlayPauseButton);
export const SkipButton = connectControl(UnconnectedSkipButton);
export const Timeline = connectControl(UnconnectedTimeline);
export const TimeDisplay = connectControl(UnconnectedTimeDisplay);
export const GotoLiveButton = connectControl(UnconnectedGotoLiveButton);
export const Volume = connectControl(UnconnectedVolume);
export const AudioSelector = connectControl(UnconnectedAudioSelector);
export const SubtitlesSelector = connectControl(UnconnectedSubtitlesSelector);
export const QualitySelector = connectControl(UnconnectedQualitySelector);
export const BufferingIndicator = connectControl(UnconnectedBufferingIndicator);