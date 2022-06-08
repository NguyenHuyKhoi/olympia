

export const collapseText=(text,limit_length)=>{
    if (text.length<limit_length) return text;
    return text.substring(0,limit_length);
}


//value :string
export const convertFullDateToOnlyDay=(value)=>{
    var curr = new Date(value);
    var date = curr.toISOString().substr(0,10);
    return date;
};

//value :string
export const convertFullDateToHour=(value)=>{
    var curr = new Date(value);
    var date = curr.toISOString().substr(0,16);
    return date;
};

export const initialArray=(length, default_value)=>{
    var arr=[];
    for (let i=0;i<length;i++) arr.push(default_value);
    return arr;
}

export const hasSameElement=(arr1,arr2)=>{
    if (arr1===undefined || arr1.length===0 || arr1===null) return true;
    if (arr2===undefined || arr1.length===0 || arr2===null) return true;

    let i=false;
    arr1.map(item1=>{
        arr2.map(item2=>{
            if (item1===item2) {i=true}
        })
    })

    return i
}


export const toArray=(data)=>{
    if (data==undefined) return [];
    if (data==null) return []
    return Object.values(data)
}

export const shuffle=(arr) =>{
    arr.sort(() => Math.random() - 0.5);
    return arr;
}


export const randomItem=(arr)=>{
    if (arr.length===0)return null;
    return arr[Math.floor(Math.random()*arr.length)]
}

export const remove=(str,str1)=>{
    str=''+str;
    str1=''+str1;
    while (str.includes(str1)){
        str=str.replace(str1,"");
    };
    return str
}
export const displayState=(state_code)=>{
    switch (state_code){
        case 'bidding':return 'Đang đấu giá';
        case 'doing':return 'Đang triển khai';
        case 'done':return 'Đã hoàn thành';
        case 'reported':return 'Đã bị báo cáo';
        case 'freelancer_give_up':return 'Bị hủy bởi freelancer';
        case 'company_give_up':return ' Bị hủy bởi công ty';
    }

}


export const validatePhone=(str)=>{
    if (str.length!==10) return 'Số điện thoại phải gồm 10 số'
    if (str[0]!='0') return 'Số điện thoại phải có số 0 ở đầu.'
    return '';
}

export const validatePassword=(str)=>{
    if (str.length<6 || str.length>30) return 'Mật khẩu quá ngắn hoặc quá dài!';
    return '';
}