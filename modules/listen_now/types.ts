export interface IBottomButton {
  icon: string;
  text: string;
}

export interface IEpisode {
  date: string;
  text: string;
}

export interface IPodcast {
  title: string;
  image: string;
  episodes: IEpisode[];
}

export interface IPodcastPlayerState {
  episodeLink: string;
  playerStatus: string;
  playerVisibility: string;
  currentPlayingIndex: null | number;
  episodeInfo: string;
  audioToPlay: string[];
  imageUrl: string;
}

export interface IPodcastPlayerProps {
  token: string;
}
