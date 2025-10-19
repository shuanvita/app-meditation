export interface IMeditationsResponse {
  data: {
    meditations: IMeditationCard[];
  };
}

export interface IMeditationCard {
  id: number;
  title: string;
  description: string;
  duration_min: number;
}
