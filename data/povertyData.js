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
 * change the image based on option selected.
 * make this into a pure JSON gile
 * get better icons
 */

let povertyData = [{
    "name": "Housing",
    "desc": "What kind of home will you live in?",
    "options": [700, 830, 950],
    "set": null,
    "type": "normal",
    "visited": true,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/building-3.png","http://simpleicon.com/wp-content/uploads/home-6.png","http://simpleicon.com/wp-content/uploads/home-3.png"],
    "optionDesc": ["1 bedroom, 1 bath apartment, no patio or yard, street parking, and stove only", "2 bedroom, 1 bath apartment, covered patio, 1 parking space, stove, and refrigerator", "3 bedroom, 11/2 bath house, small yard, 2 car garage, stove, refrigerator, and dishwasher"]
}, {
    "name": "Housing Fact",
    "desc": "Fair Market Rent for a 2 bedroom in Mecklenburg County is $831 a month. Nearly 50% of renters in Charlotte-Mecklenburg spend more than 30% of their income on housing.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/home-7.png"],
    "optionDesc": []
}, {
    "name": "Food",
    "desc": "What's your food budget?",
    "options": [80, 180, 280],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/plate__spoon.png","http://simpleicon.com/wp-content/uploads/pizza_1.png","http://simpleicon.com/wp-content/uploads/burger.png"],
    "optionDesc": ["1 meal a day", "2 meals a day", "3 meals a day + snacks"]
}, {
    "name": "Food Fact",
    "desc": "69,154 households receive food stamps in the Charlotte five county region.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/pizza.png"],
    "optionDesc": []
}, {
    "name": "Transportation",
    "desc": "How will you get around?",
    "options": [0, 80, 360],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/bicycle.png","http://simpleicon.com/wp-content/uploads/train.png","http://simpleicon.com/wp-content/uploads/car_4.png"],
    "optionDesc": ["Walk or bike everywhere", "Walk, bike, and public transit", "Have your own car, with a monthly payment"]
}, {
    "name": "Transportation Fact",
    "desc": "It takes the average Charlottean 30 minutes to travel to work, for workers age 16 years+, 2009-2013.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/car_11.png"],
    "optionDesc": []
}, {
    "name": "Oh no!!",
    "desc": "Your dog got rabies. You need to take him to the vet before he goes on a rabid rampage!",
    "options": [100, 120],
    "set": null,
    "type": "setback",
    "visited": false,
    "sectionImage": ["https://cdn3.iconfinder.com/data/icons/medical-5-1/512/rabies-512.png", "https://cdn1.iconfinder.com/data/icons/health-care-2/512/mad_dog-512.png"],
    "optionDesc": ["Cheap medicine. It might work.", "Good medicine. Definitely will work."]
}, {
    "name": "Health",
    "desc": "What kind of healthcare do you have?",
    "options": [0, 52, 134],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/nurse1.png","http://simpleicon.com/wp-content/uploads/surgeon_1.png","http://simpleicon.com/wp-content/uploads/docter__nurse_1.png"],
    "optionDesc": ["No health insurance", "Health insurance for you only", "Health insurance for you and your family"]
}, {
    "name": "Health Fact",
    "desc": "18.5% of Mecklenburg residents do not have health insurance (under age 65).",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/stethoscope1.png"],
    "optionDesc": []
}, {
    "name": "Technology",
    "desc": "What type of electronics do you have?",
    "options": [35, 80, 220],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/mobile_phone.png","http://simpleicon.com/wp-content/uploads/iphone-landscape-portrait.png","http://simpleicon.com/wp-content/uploads/lcd_1.png"],
    "optionDesc": ["1 cell phone", "2 cell phones, TV but no cable", "2 smart phones, TV with cable, home computer"]
}, {
    "name": "Technology Fact",
    "desc": "Technology Fact listed here. This will be a good one!",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/tv_table.png"],
    "optionDesc": []
}, {
    "name": "Oh no!!",
    "desc": "Your daughter got sick. How will you handle the trip to the emergency room and medication?",
    "options": [100, 140],
    "set": null,
    "type": "setback",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/pills_1.png", "http://simpleicon.com/wp-content/uploads/ambulance1.png"],
    "optionDesc": ["Emergency room visit, no medication", "Emergency room plus medication"]
}, {
    "name": "Family Leisure",
    "desc": "Choose your fun family outings and leisure time.",
    "options": [0, 100, 200],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/fruit_basket.png","http://simpleicon.com/wp-content/uploads/music-note-8.png","http://simpleicon.com/wp-content/uploads/film.png"],
    "optionDesc": ["No family outings, maybe visiting local friends and family", "1 family activity, like a local park, picnic, bowling, or local music show", "2 family activities, like eating out, movies, or a concert"]
}, {
    "name": "Family Leisure Fact",
    "desc": "Spending family time on leisure activities together is associated with greater emotional bonding, better communication, better school grades, and less behavioral problems. ",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/bowling_ball_2.png"],
    "optionDesc": []
}, {
    "name": "Oh no!!",
    "desc": "Your son wants to join the school soccer team.",
    "options": [0, 80],
    "set": null,
    "type": "setback",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/football1.png", "http://simpleicon.com/wp-content/uploads/sad.png"],
    "optionDesc": ["He does not participate", "Cleats, shin pads, uniform, and ball"]
}, {
    "name": "Laundry",
    "desc": "Where will you do laundry?",
    "options": [20, 30, 60],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/shop-4.png","http://simpleicon.com/wp-content/uploads/backet.png","http://simpleicon.com/wp-content/uploads/washing_machine.png"],
    "optionDesc": ["Laundromat", "Shared laundry room", "Payment for your own washer and dryer"]
}, {
    "name": "Laundry Fact",
    "desc": "A really good fact about Laundry and utilities.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/mobile_phone.png"],
    "optionDesc": []
}, {
    "name": "Savings",
    "desc": "Do you have any money for savings or unexpected expenses?",
    "options": [0, 100, 200],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/coin-money-7.png","http://simpleicon.com/wp-content/uploads/money-7.png","http://simpleicon.com/wp-content/uploads/money-bag-4.png"],
    "optionDesc": ["Nothing left for savings after other expenses", "$20 for savings", "$100 for savings"]
}, {
    "name": "Savings Fact",
    "desc": "A savings reserve is often unavailble for those in poverty.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/money-5.png"],
    "optionDesc": []
}]

export default povertyData;
