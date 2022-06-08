//import libs:
let LoremIpsum=require('lorem-ipsum').LoremIpsum
let fs=require('fs')
let videos=require('./videos.json')

//util functions : 
let rand=(x)=>{
	return Math.floor(Math.random() * x)
}

let rand_bool=()=>{
	return (rand(2)===0?false:true)
}

let create_image_url=()=>{
	return ('https://randomuser.me/api/portraits/')
		+ (rand(2)===0?'women':'men')
		+ '/'
		+ rand(100)
		+ '.jpg'
}

let create_video_url=()=>{
	return (
		videos.url
		+ videos.names[rand(videos.names.length)]
		+'.'
		+videos.type
	)
}

let create_phone=()=>{
	return '0'+(100000000+rand(900000000))
}

let create_date=()=>{
	let date=new Date();
	return ''+(Date.now()-rand(10000000))
}

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
	max: 6,
	min: 3
	},
	wordsPerSentence: {
	max: 8,
	min: 2
	},
});

const USERS=10
const POSTS=20
const COMMENTS=30
const OFFLINE_COMMENTS=5
const SEARCHES=30
const REQUESTED_FRIEND=20
const FRIENDS=30
const SUGGESTED_FRIEND=25
const BLOCKED_USERS=30
const NOTIFICATIONS=15
const CHAT_LIST=30
const CHAT_MESSAGES=50
const WAITING_CHAT_MESSAGES=4

//create objects 
let users= []
for (let i=0;i<USERS;i++){
	let user={
		id: ''+i,
		username:lorem.generateWords(2),
		avatar:create_image_url(),
		phonenumber:create_phone(),
		created:create_date(),
		description:lorem.generateSentences(rand(2)),
		cover_image:create_image_url(),
		link:'http://google.com',
		address:lorem.generateWords(rand(5)),
		city:lorem.generateWords(rand(3)),
		country:lorem.generateWords(rand(3)),
		listing:''+rand(100),
		is_friend:rand_bool(),
		online:rand_bool()
	}
	users.push(user)
}


let posts=[]
for (let i=0;i<POSTS;i++){
	let post={
		id:''+i,
		described:lorem.generateParagraphs(rand(3)+1),
		created:create_date(),
		modified:create_date(),
		like:''+rand(1000),
		comment:''+rand(1000),
		is_liked:rand_bool()
	}

	// post has images :
	if (rand_bool()===true){
		images=[];
		for (let  ii=0;ii<=rand(4);ii++){
			let image={
				id:''+ii,
				url:create_image_url()
			}
			images.push(image)
		}

		post={...post,images:images}
	}

	else // post has video :
		if (rand_bool()===true){
			let video={
				url: create_video_url(),
				thumb:create_image_url()
			}

		post={...post,video:video}
	}

	let author={
		id:''+rand(USERS),
		name:lorem.generateWords(2),
		avatar:create_image_url(),
		online:rand_bool()
	}

	post={...post,author:author}

	post={
		...post,
		state:rand_bool()===true?'Đang cảm thấy Happy':null,
		is_blocked:rand_bool(),
		can_edit:rand_bool(),
		banned:rand_bool(),
		can_comment:rand_bool()
	}

	posts.push(post)
}

let comments=[]
for (let i=0;i<COMMENTS;i++){
	let comment={
		id:''+rand(100),
		comment:lorem.generateSentences(rand(6)),
		created:create_date(),
		poster:{
			id:''+rand(100),
			name:lorem.generateWords(2),
			avatar:create_image_url()
		}
	}

	comments.push(comment)
}

let offline_comments=[]
for (let i=0;i<OFFLINE_COMMENTS;i++){
	let comment={
		id:''+i,
		comment:lorem.generateSentences(rand(6)),
		poster:{
			id:users[0].id,
			name:users[0].username,
			avatar:users[0].avatar
		}
	}

	offline_comments.push(comment)
}


let searches=[]
for (let i=0;i<SEARCHES;i++){
	let search_item={
		id:''+i,
		keyword:lorem.generateWords(rand(4)+1),
		created:create_date()
	}
	searches.push(search_item)
}

let requested_friends=[]
for (let i=0;i<REQUESTED_FRIEND;i++){
	let item={
		id:''+rand(100),
		username:lorem.generateWords(rand(3)+1),
		avatar:create_image_url(),
		same_friends:rand(100),
		created:create_date()
	}
	requested_friends.push(item)
}

let friends=[]
for (let i=0;i<FRIENDS;i++){
	let item={
		id:''+rand(100),
		username:lorem.generateWords(rand(3)+1),
		avatar:create_image_url(),
		same_friends:rand(100),
		created:create_date()
	}
	friends.push(item)
}

let suggested_friends=[]
for (let i=0;i<SUGGESTED_FRIEND;i++){
	let item={
		user_id:''+rand(100),
		username:lorem.generateWords(rand(3)+1),
		avatar:create_image_url(),
		same_friends:rand(100)
	}
	suggested_friends.push(item)
}

let blocked_users=[]
for (let i=0;i<BLOCKED_USERS;i++){
	let item={
		id:''+rand(100),
		username:lorem.generateWords(rand(3)+1),
		avatar:create_image_url(),
	}
	blocked_users.push(item)
}

//0 : off , 1: on
let  push_settings={
	like_comments:''+rand(2),
	from_friends:''+rand(2),
	request_friend:''+rand(2),
	suggest_friend:''+rand(2),
	birthday:''+rand(2),
	video:''+rand(2),
	report:''+rand(2), 
	sound_on:''+rand(2),
	notification_on:''+rand(2),
	vibrant_on:''+rand(2),
	led_on:''+rand(2),
}

let notifications=[]

for (let i=0;i<NOTIFICATIONS;i++){
	let item={
		type:'',
		object_id:'',
		title:'',
		notification_id:''+rand(100),
		created:create_date(),
		avatar:create_image_url(),
		group:''+rand(2),
		read:''+rand(2)
	}
	notifications.push(item)
}

let chat_list=[]
for (let i=0;i<=CHAT_LIST;i++){
	let chat = {
		id:''+rand(100),
		partner:{
			id:''+rand(100),
			username:lorem.generateWords(2),
			avatar:create_image_url(),
		},
		lastmessage:{
			message:lorem.generateWords(rand(10)+1),
			create:create_date(),
			unread:rand_bool,
		},
		type:rand(2)===0?'friend':'waiting'
	}
	chat_list.push(chat)
}

let chat_messages=[]
for (let i=0;i<=CHAT_MESSAGES;i++){
	let sender_id=rand(2) // id =0 : is me ,
	let message = {
		message_id:''+i,
		message:lorem.generateSentences(rand(3)+1),
		unread:rand_bool(),
		created:create_date(),
		sender:{
			id:''+sender_id,
			username:users[sender_id].username,
			avatar:users[sender_id].avatar
		},
			
	}
	chat_messages.push(message)
	}

let waiting_chat_messages=[]
for (let i=0;i<=WAITING_CHAT_MESSAGES;i++){
	let sender_id=1 
	let message = {
		message_id:''+i,
		message:lorem.generateSentences(rand(3)+1),
		unread:rand_bool(),
		created:create_date(),
		sender:{
			id:''+sender_id,
			username:users[sender_id].username,
			avatar:users[sender_id].avatar
		},
			
	}
	waiting_chat_messages.push(message)
}

///collect objects to only object
let db= {
	users:users,
	posts:posts,
	offline_comments:offline_comments,
	comments:comments,
	searches:searches,
	requested_friends:requested_friends,
	friends:friends,
	suggested_friends:suggested_friends,
	blocked_users:blocked_users,
	push_settings:push_settings,
	notifications:notifications,
	chat_list:chat_list,
	chat_messages:chat_messages,
	waiting_chat_messages:waiting_chat_messages
}



//write object to json file 
fs.writeFileSync(
	'sample_db.json',
	JSON.stringify(db)
)

