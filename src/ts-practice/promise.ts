//Create promise randomNum function that resolve some random number

// const randomNum = new Promise((resolve,reject) => {
//     resolve(Math.floor(Math.random()*10));
// })

// randomNum.then(res => {console.log("res",res)}).catch(error => {console.log(error)});


const randomNum:Promise<number> = new Promise<number>((resolve,reject) => {
    const randomNum:number = Math.floor(Math.random()*10);
    resolve(randomNum);
})

// randomNum.then((res:number):void => {console.log(res)}).catch((error):void => console.log(error))

/////////////////


//Create promise randomFruit function that resolve some random fruit from array of fruits
// const randomFruit = new Promise((resolve,reject)=>{
//     const fruits = ["banana","apple","mango","peach"];
//     const index = Math.floor(Math.random()*fruits.length)
//     resolve(fruits[index])
// })

const randomFruit:Promise<string> = new Promise<string>((resolve,reject) => {
    const fruits:string[] = ["banana","apple","mango","peach"];
    const index:number = Math.floor(Math.random()*(fruits.length));
    resolve(fruits[index]);
})

// randomFruit.then((res:string):void => {console.log(res)}).catch(error => {console.log(error)})


////////////////

//Create promise function randomNum2 that resolve some random number after certain period of time
// const randomNum2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const randomNum = Math.floor(Math.random()*10);
//         resolve(randomNum);
//     },1000)
// })

// randomNum2.then((res)=>{console.log("number after second pause: ",res)}).catch(error => {console.log(error)})

const randomNum2:Promise<number> = new Promise<number>((resolve,reject):void => {
    const number:number = Math.floor(Math.random()*10);
    setTimeout(()=>{
        resolve(number)
    },1000)
})

// randomNum2.then((res:number) => {console.log("Random num after 1 second pause",res)}).catch(error => {console.log(error)})

/////////////

//Create promise function randomNum3 that resolve some random number after certain period of time. If random number is Odd Promise rejects error, other wise it resolevs number;
// const randomNum3:Promise<number> = new Promise<number>((resolve,reject)=>{
//     setTimeout(()=>{
//         const randomNum:number = Math.floor(Math.random()*10);
//         if(randomNum%2===0){
//             resolve(randomNum)
//         }else{
//             reject(new Error("error message"))
//         }
//     },1000)
// })

// randomNum3.then((res:number) => console.log(res)).catch((error:Error) => console.log(error))

// async function foo1():Promise<void>{
//     try{
//         const rnm:number = await randomNum3;
//         console.log("number:",rnm);
//     }catch(error){
//         console.log(error)
//     }
// }

// foo1();

/////////////

const spaceXhistoryApi = "https://api.spacexdata.com/v3/history";

// const fetchData = async(spaceXhistoryApi:string) => {
//     try{
//         const response = await fetch(spaceXhistoryApi);
//         const data = await response.json();
//         console.log("data",data);
//     }catch(error){
//         console.log(error)
//     }

// }

// fetchData(spaceXhistoryApi)

interface Links {
    reddit:number,
    article:string,
    wikipedia:string
}

interface Post {
    id:number,
    title:string,
    event_date_utc:string,
    event_date_unix:string,
    flight_number:number,
    details:string,
    links: Links
}

// id: 2,
// title: 'SpaceX Wins $1.6B CRS Contract',
// event_date_utc: '2008-12-23T01:00:00Z',
// event_date_unix: 1229994000,
// flight_number: null,
// details: 'NASA awards SpaceX $1.6B Commercial Resupply Services (CRS) contract.',
// links: {
//   reddit: null,
//   article: 'https://www.nasaspaceflight.com/2008/12/spacex-and-orbital-win-huge-crs-contract-from-nasa/',
//   wikipedia: 'https://en.wikipedia.org/wiki/Commercial_Resupply_Services'
// }

const fetchData = async(spaceXhistoryApi:string):Promise<Post[]> => {
    try{
        const response = await fetch(spaceXhistoryApi);
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data as Promise<Post[]>;
    }catch(error){
        console.log(error);
        return []
    }
}

(async ()=> {
    try {
        const posts: Post[] = await fetchData(spaceXhistoryApi);
        console.log('Fetched posts',posts)
    }catch(error){
        console.log("error",error)
    }
})();