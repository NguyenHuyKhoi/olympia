import database from '@react-native-firebase/database';
import { toArray,randomItem,shuffle } from './helper';

class FirebaseHelper{
    constructor(){
        this.dbRef=database().ref();
    }

    get=async (path)=>{
        console.log('firebase get :',path)
        let obj=null;

        await this.dbRef.child(path).once('value')
            .then(snapshot=>obj=snapshot.val());
        return obj;
    }

    set=async (path,data)=>{
        console.log('firebase set :',path,data)
        await this.dbRef.child(path).set(data);
    };

    update=async (path,data)=>{
        console.log('firebase update :',path,data)
        await this.dbRef.child(path).update(data);
    };

    //path : parent dir :
    push=async (path,data)=>{
        console.log('firebase push :',path,data)
        let key=(await this.dbRef.child(path).push()).key;

        console.log('firebase push key:',key)
        await this.dbRef.child(path+key).set({
            ...data,
            id:key
        });

        return key
    };
    


    getRound1=async ()=>{
        let round1s= await this.get('/data_bank/round1');
        let res= round1s.map((item)=>{
            return {
                category:item.category,
                code:item.code,
                ...randomItem(toArray(item.questions))
            }
        }
        )


        return res;
       
    }

    getRound2=async ()=>{
        let round2s=await this.get('/data_bank/round2');
        let res=randomItem(round2s);

        return res;
    }

    getRound3=async ()=>{
        let round3s= await this.get('/data_bank/round3');
        let res= round3s.map((item)=>{
            return {
                category:item.category,
                code:item.code,
                ...randomItem(toArray(item.questions))
            }
        }
        )
        return res;
    }

    //arr : number question of each type [easy,medium,hard]
    getRound4=async (arr)=>{
        let round4s=await this.get('/data_bank/round4');
        let res=[];
        arr.map((item,index)=>{
            let type=round4s[index];
            let questions=shuffle(toArray(type.questions));
            for (let i=0;i<item;i++){
                res.push({
                    category:type.category,
                    code:type.code,
                    ...questions[i]
                })
            }
        }
        );
        return res;
    }
    


    getPracticeRounds=async ()=>{
        console.log('firebase on getPracticeRounds begin :')
        let round1=await this.getRound1();
        let round2=await this.getRound2();
        let round3=await this.getRound3();
        let round4=await this.getRound4([1,1,1]);

        let rounds=[round1,round2,round3,round4]
        return rounds
    }


     //data :{email,password}
    checkUserExist=async (phone) =>{
        let user_is_exist=false;

        let users=toArray(await this.get('/user/'));

        users.map((item)=>{
            if (item.phone===phone) user_is_exist=true;
        });

        return user_is_exist;
    };


    //data :{email,password}
    signup=async (data)=>{
        console.log("firebase signup :",data);

        let username='User'+Math.floor(Math.random()*1000);

        await this.push('/user/',{
                phone:data.phone,
                password:data.password,
                username
            });
        return true;
    };

    signin= async (data)=>{
        let users=toArray(await this.get('/user/'));

        let user=null;
        users.map((item)=>{
            if (item.phone===data.phone && item.password === data.password) user=item;
        });
        return user
    }

    updateUser=async (data)=>{

        console.log('firebase updateUser :',data,data.username)
        await this.update('/user/'+data.id,data);
    }

    

}

const firebaseHelper=new FirebaseHelper();
export default firebaseHelper;