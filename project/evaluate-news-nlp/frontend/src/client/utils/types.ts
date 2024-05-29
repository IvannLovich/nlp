export type ScoreTag = 'P+' | 'P' | 'NEU' | 'N' | 'N+' | 'NONE';
export type Subjectivity = 'SUBJECTIVE' | 'OBJECTIVE';
export type Irony = 'IRONIC' | 'NONIRONIC';

export type Parameters = {
  score_tag: { [key in ScoreTag]: string };
  subjectivity: { [key in Subjectivity]: string };
  irony: { [key in Irony]: string };
};

export type ResponseData = {
  score_tag: ScoreTag;
  subjectivity: Subjectivity;
  irony: Irony;
  confidence: number;
};
