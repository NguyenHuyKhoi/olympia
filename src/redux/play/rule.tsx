import RealtimeDBHandler from "../../service/RealtimeDBHandler";
import { GameBank, PlayState, Quiz, QuizBank, QuizStatus, QUIZ_PACK, Round } from "../types";
import {randomItem, toArray, shuffle, remove} from '../../util/helper'
export const INITIAL_ROUNDS: Array<Round> = [
  {
    index: 0,
    name: "Khởi động",
    num_quiz: 12,
    max_score: 120,
    time: 60,
    guide: "Trong vòng 1 phút, người chơi trả lời tối đa 12 câu hỏi: \n   + Thuộc 10 lĩnh vực: Toán, Lý, Hóa, Sinh, Văn, Sử, Địa, Thể thao, Nghệ thuật, Lĩnh vực khác, Tiếng Anh. \n  + Trả lời đúng được 10 điểm.\n  + Trả lời sai không bị trừ điểm.",
    quizzes: [],
    score: 0
  },
  {
    index: 1,
    name: "Vượt chướng ngại vật",
    num_quiz: 5, //5 - cả từ khóa
    max_score: 120,
    guide:
      "Cần tìm ra từ khóa với các gợi ý : \n    + Gồm bao nhiêu ký tự?\n    + Hình ảnh gợi ý. \n    + 4 từ hàng ngang (15s - 10đ ).Trả lời đúng, một góc của hình ảnh được mở ra.\n\n  Người chơi có trể trả lời chướng ngại vật ở hàng ngang :  \n    + Đầu tiên :80 điểm. \n    + Thứ hai  :60 điểm.\n    + Thứ ba   :40 điểm. \n    + Thứ tư   :20 điểm. \n\nTrả lời sai chướng ngại vật ,người chơi sẽ bị loại khỏi vòng chơi này.",
    quizzes: [] ,
    score: 0
  },
  {
    index: 2,
    name: "Tăng tốc",
    num_quiz: 4, //4
    max_score: 120,
    quizzes: [] ,
    score: 0,
    guide:
      "Có 4 câu hỏi dạng : IQ ,sắp xếp/lọc hình ảnh, dữ kiện. \n\nNgười chơi trả lời đúng trong vòng :  \n    + 0s  - 10s : 40 điểm.\n    + 10s - 15s : 30 điểm \n    + 20s - 25s : 20 điểm\n    + 25s - 30s : 10 điểm",
  },
  {
    index: 3,
    name: "Về đích",
    num_quiz: 3, //3
    max_score: 120,
    quizzes:[],
    score: 0,
    guide:
      "Có 3 câu hỏi ,người chơi chọn mức điểm cho từng câu hỏi:  \n    + 10 đ : 10s trả lời  \n    + 20 đ : 15s trả lời  \n    + 30 đ : 20s trả lời \n\nTrả lời sai không bị trừ điểm.  \n\nĐặc biệt, người chơi được đặt ngôi sao hy vọng ở 1 câu bất kỳ: \n    +Trả lời đúng được gấp đôi số điểm\n    +Trả lời sai bị trừ đi số điểm của câu hỏi.",
  },
]
export const ROUND4_PACKS: Array<QUIZ_PACK> = [
  {
    index: 0,
    scores: [10, 10, 20],
  },
  {
    index: 0,
    scores: [10, 20, 30],
  },
  {
    index: 0,
    scores: [20, 30, 30],
  },
]
export const INITIAL_GAME: PlayState = {
  rounds: [...INITIAL_ROUNDS],
  round_idx: 0,
  quiz_idx: 0,
  total_score: 0
}

export const getRandomQuizzes = (list: Array<QuizBank>) => {
  const quizzes: Array<Quiz> = list.map((item: QuizBank) => {
    return {
      category: item.category,
      type: item.type,
      ...randomItem(toArray(item.quizzes)),
    }
  })
  return quizzes
}

const createPicks = (content) => {
  var chars = 'qwertyuiopasdfghjklzxcvbnm'.split('')
  console.log("All chars: ", chars)
  var randomChars = shuffle(chars).slice(0, 12 - content.length).join('')
  console.log("Random chars: ", randomChars)
  var result = shuffle((content + randomChars).split(''))
  return result
}

export const initQuiz = (quiz: Quiz, round_idx: number) => {
  // hardcode score base round
  quiz.score = [10,20,40,20][round_idx] 
  quiz.status = 'none'
  quiz.time = [undefined, 20, 30, 20 ][round_idx]
  quiz.answer = ''
  if (quiz.answers) {
    quiz.correct_answer = quiz.answers[0] + ''
    quiz.answers = shuffle(quiz.answers)
  }
  else {
    quiz.correct_answer = remove(quiz.correct_answer, ' ')
  }

  if (round_idx == 1) {
    quiz.pickStatus = {
      chars:  createPicks(quiz.correct_answer),
      status: []
    }
  }
  return quiz
}

export const initKeywordQuiz = (quiz: Quiz) => {
  // hardcode score base round
  quiz.status = 'none'
  quiz.answer = ''
  quiz.correct_answer = remove(quiz.correct_answer, ' ')
  quiz.pickStatus = {
    chars:  createPicks(quiz.correct_answer),
    status: []
  }
  return quiz
}

export const createGame = async () => {
  // Game data set up quizzes before
  // Here we add meta-data like score or time for per quiz in each round base on rules

  var game = {...INITIAL_GAME}
  var bank: GameBank = await RealtimeDBHandler.shared.getBank()

  game.rounds[0].quizzes = getRandomQuizzes(bank.round1)
  game.rounds[2].quizzes = getRandomQuizzes(bank.round3)
  game.rounds[3].quizzes = getRandomQuizzes(bank.round4)

  var r2: QuizBank = randomItem(bank.round2)
  console.log("Round 2 selected: ", JSON.stringify(game, null, 2))
  game.rounds[1].quizzes = r2.quizzes 
  game.rounds[1].keyword = r2.keyword 
  console.log("Game data: ", JSON.stringify(game, null, 2))

  game.rounds.forEach((item, i1) => {
    item.quizzes.forEach((quiz, i2) => {
      item.quizzes[i2] = initQuiz(quiz, i1)
    })
  })

  game.rounds[1].keyword = initKeywordQuiz(game.rounds[1].keyword)
  // Init for first quiz
  game.rounds[game.round_idx].quizzes[game.quiz_idx].status = 'current'
  return game
}