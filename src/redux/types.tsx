

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

export type PickStatus = {
  chars: Array<string>,
  status: Array<number> 
}
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
  hint?: string,
  status: QuizStatus,
  pickStatus?: PickStatus,
  answer?: string
}
export type Round = {
  index: number,
  max_score: number,
  name: string,
  time?: number,
  num_quiz: number,
  quizzes: Array<Quiz>,
  keyword?: Quiz,
  guide: string,
  score: number
}

export type QUIZ_PACK = {
  index: number,
  scores: Array<number>
}
export type QuizStatus = 'correct'| 'wrong' | 'none' | 'current'

export type AuthState = {
  user?: User
}

export type LibraryState = {
  results?: Array<GameResult>
}

export type CommonState = {
  notification?: Notification,
  isShowKeyboard?: boolean
}

export type PlayState = {
  rounds: Array<Round>,
  score: number,
  round_idx: number,
  quiz_idx: number
}

export type GameResult = {
  scores: Array<number>,
  user_id: string
}

export type QuizType = 'math' | 'physical' | 'chemist' | 'biology' | 'literature' | 'history' | 'geography' | 'sport' | 'art' | 'other' | 'common_knowledge' | 'english' | 'iq1' | 'iq2' | 'sort/filter' | 'data'

export type QuizBank = {
  category?: string,
  type?: QuizType,
  difficulty?: DifficultyLevel,
  quizzes: Array<Quiz>,
  keyword?: Quiz
}

export type GameBank = {
  round1: Array<QuizBank>,
  round2: Array<QuizBank>,
  round3: Array<QuizBank>,
  round4: Array<QuizBank>
}