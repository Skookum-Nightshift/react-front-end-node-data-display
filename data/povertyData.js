/**
 * The app follows the order of this array.
 *
 * name (string): the page's heading
 * desc (string): The description under the icon/image.
 * options (array of integers): each item can have as many or as few budget options as necessary.
 * set (integer, default: null): The app currently uses this to set state for remembering what option was 
 *   selected. Move out of appAreas and into app state? One benefit is that this can be used to set an
 *   optional default other than null.
 * type (string: normal, fact, setback, etc.) When set to "normal", the item name will appear in the drawer.
 * optionDesc: an array of strings, each coinciding with the earlier array of options.
 *
 * To DO
 * make this into a pure JSON gile
 * get better icons
 */

let povertyData = [
{
    "name": "Federal Poverty",
    "desc": "The 2015 Federal Poverty Line for a family of four is $24,250 per year. A North Carolina family of four must earn $52,275 a year for basic living necessities. That's a big difference!",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/bar-chart-down-3.png"],
    "optionShort": [],
    "optionDesc": []
},
{
    "name": "Housing",
    "desc": "What kind of home do you live in?",
    "options": [950, 820, 750],
    "set": null,
    "type": "normal",
    "visited": true,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/home-3.png", "http://simpleicon.com/wp-content/uploads/home-6.png", "http://simpleicon.com/wp-content/uploads/building-3.png"],
    "optionShort": ["3 bedroom home", "2 bedroom apartment", "1 bedroom studio"],
    "optionDesc": ["3 bedroom, 11/2 bath house, utilities, small yard, 2 car garage, stove, refrigerator, and dishwasher", "2 bedroom, 1 bath apartment, utilities, covered patio, 1 parking space, stove, and refrigerator", "1 bedroom, 1 bath apartment, utilities, no patio or yard, street parking, and stove only"]
}, {
    "name": "Housing Fact",
    "desc": "Fair Market Rent for a 2 bedroom in Mecklenburg County is $831 a month. Nearly 50% of renters in Charlotte-Mecklenburg spend more than 30% of their income on housing.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/home-7.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "Food",
    "desc": "How many meals do you eat a day?",
    "options": [360, 240, 120],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/burger.png", "http://simpleicon.com/wp-content/uploads/pizza_1.png","http://simpleicon.com/wp-content/uploads/plate__spoon.png"],
    "optionShort": ["3 meals a day", "2 meals a day", "1 meal a day"],
    "optionDesc": ["3 meals a day + snacks", "2 meals a day", "1 meal a day"]
}, {
    "name": "Food Fact",
    "desc": "69,154 households receive food stamps in the Charlotte five county region.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/pizza.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "Transportation",
    "desc": "How do you get around?",
    "options": [360, 80, 0],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/car_4.png", "http://simpleicon.com/wp-content/uploads/train.png", "http://simpleicon.com/wp-content/uploads/bicycle.png"],
    "optionShort": ["Car", "Public Transit", "Walk or bike"],
    "optionDesc": ["Have your own car, with a monthly payment", "Walk, bike, and public transit", "Walk or bike everywhere"]
}, {
    "name": "Transportation Fact",
    "desc": "It takes the average Charlottean 30 minutes to travel to work, for workers age 16 years+, 2009-2013.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/car_11.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "Oh no!!",
    "desc": "Your dog got rabies. You need to take him to the vet before he goes on a rabid rampage!",
    "options": [120, 100],
    "set": null,
    "type": "setback",
    "visited": false,
    "sectionImage": ["https://cdn1.iconfinder.com/data/icons/health-care-2/512/mad_dog-512.png", "https://cdn3.iconfinder.com/data/icons/medical-5-1/512/rabies-512.png"],
    "optionShort": ["Good medicine", "Budget medicine"],
    "optionDesc": ["Good medicine. Definitely will work.", "Cheap medicine. It might work."]
}, {
    "name": "Health",
    "desc": "What kind of healthcare do you have?",
    "options": [134, 52, 0],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/docter__nurse_1.png", "http://simpleicon.com/wp-content/uploads/surgeon_1.png", "http://simpleicon.com/wp-content/uploads/nurse1.png"],
    "optionShort": ["Family Plan", "You Only", "None"],
    "optionDesc": ["Health insurance for you and your family", "Health insurance for you only", "No health insurance"]
}, {
    "name": "Health Fact",
    "desc": "18.5% of Mecklenburg residents do not have health insurance (under age 65).",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/stethoscope1.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "Technology",
    "desc": "What type of electronics do you have?",
    "options": [220, 80, 35],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/lcd_1.png", "http://simpleicon.com/wp-content/uploads/iphone-landscape-portrait.png", "http://simpleicon.com/wp-content/uploads/mobile_phone.png"],
    "optionShort": ["Smartphones, cable TV, laptop", "2 cell phones and TV", "1 cell phone"],
    "optionDesc": ["2 smart phones, TV with cable, home computer", "2 cell phones, TV but no cable", "1 cell phone"]
}, {
    "name": "Technology Fact",
    "desc": "Technology is important for leisure and communicating with your fiends and family.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/tv_table.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "Oh no!!",
    "desc": "Your daughter got sick. How will you handle the trip to the hospital?",
    "options": [140, 100],
    "set": null,
    "type": "setback",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/stethoscope1.png", "http://simpleicon.com/wp-content/uploads/ambulance1.png"],
    "optionShort": ["Emergency room and Medication", "Emergency room Only"],
    "optionDesc": ["Emergency room plus medication", "Emergency room visit, no medication"]
}, {
    "name": "Family Leisure",
    "desc": "How many fun outings for your family this month?",
    "options": [200, 100, 0],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/film.png", "http://simpleicon.com/wp-content/uploads/music-note-8.png", "http://simpleicon.com/wp-content/uploads/fruit_basket.png"],
    "optionShort": ["2 Activities", "1 Activity", "None"],
    "optionDesc": ["2 family activities, like eating out, movies, or a concert", "1 family activity, like a picnic, bowling, or local music show", "No family outings, maybe visiting nearby family, or a local park"]
}, {
    "name": "Family Leisure Fact",
    "desc": "Spending family time on leisure activities together is associated with greater emotional bonding, better communication, better school grades, and less behavioral problems. ",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/bowling_ball_2.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "Can I play??",
    "desc": "Your son wants to join the school soccer team.",
    "options": [80, 0],
    "set": null,
    "type": "setback",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/football1.png", "http://simpleicon.com/wp-content/uploads/football.png"],
    "optionShort": ["Yes", "No"],
    "optionDesc": ["Cleats, shin pads, uniform, and ball", "He does not participate"]
}, {
    "name": "Laundry",
    "desc": "Where do you do laundry?",
    "options": [60, 30, 20],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/washing_machine.png","http://simpleicon.com/wp-content/uploads/backet.png","http://simpleicon.com/wp-content/uploads/shop-4.png"],
    "optionShort": ["Your own Washer/Dryer", "Shared Laundry Room", "Laundromat"],
    "optionDesc": ["Payment for your own washer and dryer in your home", "Shared laundry room in your complex", "Laundromat that you can walk to, and you have to wait around"]
}, {
    "name": "Laundry Fact",
    "desc": "Basic chores, like laundry can be difficult for those in poverty, with limited budgets and transportation.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/washing_machine_1.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "Savings",
    "desc": "Do you have any savings for unexpected expenses?",
    "options": [200, 100, 0],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/money-bag-4.png","http://simpleicon.com/wp-content/uploads/money-7.png", "http://simpleicon.com/wp-content/uploads/coin-money-7.png"],
    "optionShort": ["$200", "$100", "None"],
    "optionDesc": ["Small savings, for vacations or house projects", "Tiny savings, for clothes and shopping", "Nothing left for savings after other expenses"]
}, {
    "name": "Savings Fact",
    "desc": "A savings reserve is often unavailble for those in poverty. Some familes are one crisis away (car breakdown or medical bill) from loosing their home.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/money-5.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "United Way Fact",
    "desc": "United Way raised and gave $17 million to 154 charity programs that helped 284,000 people in the Charlotte area.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/slide_share.png"],
    "optionShort": [],
    "optionDesc": []
}]

export default povertyData;
