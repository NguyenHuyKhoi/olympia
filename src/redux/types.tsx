

export type Action = {
  type: String,
  payload?: any
}

export type Notification = {
  type: 'success' | 'error' | 'infor',
  text1: string,
  text2?: string
}
export type User = {
  username?: string,
  phone: string,
  password: string
}


export type DifficultyLevel = 'easy' | 'medium' | 'hard'

export type Quiz = {
  content: string,
  image?: string,
  video?: string,
  score: number,
  time?: number,
  answers: Array<string|number>,
  correct_answer: string,
  category: string,
  difficulty: DifficultyLevel,
  hint?: string
}

export type Keyword = {
  text?: string,
  image?: string,
  correct_answer: string,
  score: number,
  is_guessed: boolean, // undefine - true - false
}
export type Round = {
  index: number,
  max_score: number,
  name: string,
  time?: number,
  num_quiz: number,
  quizzes: Array<Quiz>,
  keyword?: Keyword,
  guide: string,
  status: Array<QuizStatus>,
  score: number
}

export type QUIZ_PACK = {
  index: number,
  scores: Array<number>
}
export type QuizStatus = 'correct'| 'wrong' | 'none'

export type AuthState = {
  user?: User
}

export type CommonState = {
  notification?: Notification,
  isShowKeyboard?: boolean
}

export type PlayState = {
  rounds: Array<Round>,
  total_score: number,
  round_idx: number,
  quiz_idx: number
}

export type QuizType = 'math' | 'physical' | 'chemist' | 'biology' | 'literature' | 'history' | 'geography' | 'sport' | 'art' | 'other' | 'common_knowledge' | 'english' | 'iq1' | 'iq2' | 'sort/filter' | 'data'

export type QuizBank = {
  category?: string,
  type?: QuizType,
  difficulty?: DifficultyLevel,
  quizzes: Array<Quiz>,
  keyword?: Keyword
}

export type GameBank = {
  round1: Array<QuizBank>,
  round2: Array<QuizBank>,
  round3: Array<QuizBank>,
  round4: Array<QuizBank>
}