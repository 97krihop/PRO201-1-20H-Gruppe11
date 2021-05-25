const body =  [
]

const productName = `"productName": "SunBell"`;


//SerialNumber

function randomize(){
    Math.floor(Math.random() * 10)
}


const serialInput = () =>{
    return `"serialNumber":  "${randomize}${randomize}${randomize}${randomize}"`
}



//Camp name

const campName = [
	"Yida Refugee Camp",
	"Pugnido Refugee Camp",
	"Katumba Refugee Camp",
	"Kakuma Refugee Camp",
	"Hagadera Refugee Camp"
]


const randCampInput = () =>{
	const index = Math.floor(Math.random() * campName.length)
	return `
		"campName": "${campName[index]}",
	`
}

//Partname


const parts = [
	{
		productName: "SunBell",
		partNumber: "1",
		partName: "Lamp",
	},
	{
		productName: "SunBell",
		partNumber: "2",
		partName: "12V charger",
	},
	{
		productName: "SunBell",
		partNumber: "3",
		partName: "Battery",
	},
	{
		productName: "SunBell",
		partNumber: "4",
		partName: "Power button",
	},
	{
		productName: "SunBell",
		partNumber: "5",
		partName: "Light bulb",
	},
	{
		productName: "SunBell",
		partNumber: "6",
		partName: "Screen",
	},
	{
		productName: "SunBell",
		partNumber: "7",
		partName: "Socket charger",

	},
	{
		productName: "SunBell",
		partNumber: "8",
		partName: "Solar panel",
	}
]

const randPartInput = () => {
	const index = Math.floor(Math.random() * parts.length);

	return `"parts" : [
	"partNumber": "${parts[index].partNumber}"
	"partName" : "${parts[index].partName}"
	]`
}


for(let i = 0; i<100 ; i++){
	let report = {
		serialInput,
		productName,
		randCampInput,
		randPartInput
	}

	body.push(report)
}



module.exports = body;
//TODO sometime there are no serialnumber




