export const APP_NAME='Cùng lên Olympia';

export const INITIAL_ROUND=0;

export const MAX_WIDTH=340;
export const ROUNDS=[
    {
        index:1,
        name:'Khởi động',
        number_question:12,//12
        max_score:120,
        time:60,
        score:10,
        rule:'Trong vòng 1 phút, người chơi trả lời tối đa 12 câu hỏi: \n   + Thuộc 10 lĩnh vực: Toán, Lý, Hóa, Sinh, Văn, Sử, Địa, Thể thao, Nghệ thuật, Lĩnh vực khác, Tiếng Anh. \n  + Trả lời đúng được 10 điểm.\n  + Trả lời sai không bị trừ điểm.'
    },
    {
        index:2,
        name:'Vượt chướng ngại vật',
        number_question:5,//5 - cả từ khóa
        max_score:120,
        time:20,
        max_keyword_score:80,
        score:10,
        rule:'Cần tìm ra từ khóa với các gợi ý : \n    + Gồm bao nhiêu ký tự?\n    + Hình ảnh gợi ý. \n    + 4 từ hàng ngang (15s - 10đ ).Trả lời đúng, một góc của hình ảnh được mở ra.\n\n  Người chơi có trể trả lời chướng ngại vật ở hàng ngang :  \n    + Đầu tiên :80 điểm. \n    + Thứ hai  :60 điểm.\n    + Thứ ba   :40 điểm. \n    + Thứ tư   :20 điểm. \n\nTrả lời sai chướng ngại vật ,người chơi sẽ bị loại khỏi vòng chơi này.'
    },
    {
        index:3,
        name:'Tăng tốc',
        number_question:4,//4
        max_score:120,
        time:33,
        score:40,
        rule:'Có 4 câu hỏi dạng : IQ ,sắp xếp/lọc hình ảnh, dữ kiện. \n\nNgười chơi trả lời đúng trong vòng :  \n    + 0s  - 10s : 40 điểm.\n    + 10s - 15s : 30 điểm \n    + 20s - 25s : 20 điểm\n    + 25s - 30s : 10 điểm'
    },
    {
        index:4,
        name:'Về đích',
        number_question:3,//3
        max_score:120,
        time:20,
        levels:[
            {
                score:10,
                time:10
            },
            {
                score:20,
                time:15
            },
            {
                score:30,
                time:20
            }
        ],
        rule:'Có 3 câu hỏi ,người chơi chọn mức điểm cho từng câu hỏi:  \n    + 10 đ : 10s trả lời  \n    + 20 đ : 15s trả lời  \n    + 30 đ : 20s trả lời \n\nTrả lời sai không bị trừ điểm.  \n\nĐặc biệt, người chơi được đặt ngôi sao hy vọng ở 1 câu bất kỳ: \n    +Trả lời đúng được gấp đôi số điểm\n    +Trả lời sai bị trừ đi số điểm của câu hỏi.'
    }
]
