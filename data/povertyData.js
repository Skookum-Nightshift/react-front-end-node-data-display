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
 * Future Enhancements:
 * --make this into a pure JSON gile
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
    "name": "Your Home",
    "desc": "What kind of home do you live in?",
    "options": [1240, 880, 790],
    "set": null,
    "type": "normal",
    "visited": true,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/home-3.png", "http://simpleicon.com/wp-content/uploads/home-6.png", "http://simpleicon.com/wp-content/uploads/building-3.png"],
    "optionShort": ["3 bedroom home", "2 bedroom apartment", "1 bedroom studio"],
    "optionDesc": ["3 bedroom, 2 bath house, utilities, small yard, garage, stove, refrigerator, and dishwasher. Plenty of room for the family.", "2 bedroom, 1 bath apartment, utilities, patio, 1 parking space, stove, and refrigerator. Your children share a room. That's tough with your son becoming a teenager.", "1 bedroom, 1 bath apartment, utilities, no patio, no yard, street parking, stove only. It's tight living quarters and little privacy."]
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
    "name": "Your Meals",
    "desc": "How many meals do you eat a day?",
    "options": [410, 280, 160],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/burger.png", "http://simpleicon.com/wp-content/uploads/pizza_1.png","http://simpleicon.com/wp-content/uploads/plate__spoon.png"],
    "optionShort": ["3 meals a day", "2 meals a day", "1 meal a day"],
    "optionDesc": ["Your family is satisfied with 3 meals a day and snacks.", "Your family is a bit hungry during the day.", "Your family is hungry most of the time. It's hard to concentrate at work and school."]
}, {
    "name": "Food Fact",
    "desc": "69,154 households receive food stamps in the Charlotte five-county region.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/pizza.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "Your Transportation",
    "desc": "How do you get around?",
    "options": [400, 80, 0],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/car_4.png", "http://simpleicon.com/wp-content/uploads/train.png", "http://simpleicon.com/wp-content/uploads/bicycle.png"],
    "optionShort": ["Car", "Public transit", "Walk or bike"],
    "optionDesc": ["You have your own car and insurance. It's easy to get around.", "Walk, bike, and public transit. The train and bus schedules can be tricky.", "Walk or bike everywhere. Inconvenient, espeically in cold and rainy weather."]
}, {
    "name": "Transportation Fact",
    "desc": "It takes the average Charlottean 30 minutes to travel to work.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/car_11.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "New Clothes??",
    "desc": "Your daughter is growing so quickly! She needs some bigger clothes.",
    "options": [160, 40],
    "set": null,
    "type": "setback",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/shopping_trolley_7.png", "http://simpleicon.com/wp-content/uploads/t_shirt.png"],
    "optionShort": ["Shop for new clothes", "Hand-me-downs"],
    "optionDesc": ["4 sets of new and stylish pants and shirts.", "2 sets of hand-me-down or used clothing. They're nothing like her friends' clothes."]
}, {
    "name": "Your Health Insurance",
    "desc": "What kind of healthcare do you have?",
    "options": [134, 52, 0],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/docter__nurse_1.png", "http://simpleicon.com/wp-content/uploads/surgeon_1.png", "http://simpleicon.com/wp-content/uploads/nurse1.png"],
    "optionShort": ["Family plan", "You only", "None"],
    "optionDesc": ["Health insurance for you and your family. You have peace of mind.", "Health insurance for you only. You're nervous if your spouse or children get sick.", "No health insurance. You pay all medical expenses out of pocket. That can be expensive!"]
}, {
    "name": "Health Fact",
    "desc": "18.5% of Mecklenburg residents do not have health insurance (under age 65). Not having health insurance can results in fines or overwhelming medical costs if you get seriously sick or injured.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/stethoscope1.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "Your Technology",
    "desc": "What type of electronics do you have?",
    "options": [220, 80, 35],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/lcd_1.png", "http://simpleicon.com/wp-content/uploads/iphone-landscape-portrait.png", "http://simpleicon.com/wp-content/uploads/mobile_phone.png"],
    "optionShort": ["Smartphones, cable TV, laptop", "2 cell phones and TV", "1 cell phone"],
    "optionDesc": ["2 smart phones, TV with cable, home computer. Plenty of entertainment and leisure.", "2 cell phones and a TV, but no cable.", "1 cell phone and no TV or electronics for play."]
}, {
    "name": "Technology Fact",
    "desc": "Technology is important for leisure and communicating with your friends and family.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/tv_table.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "Ugh, sick!!",
    "desc": "Your spouse got pretty sick. How do you handle the trip to Urgent Care?",
    "options": [147, 127],
    "set": null,
    "type": "setback",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/stethoscope1.png", "http://simpleicon.com/wp-content/uploads/ambulance1.png"],
    "optionShort": ["Urgent Care and medication", "Urgent Care only"],
    "optionDesc": ["Urgent Care visit plus medication, better in no time.", "Urgent Care visit but no medication. Your spouse may miss some work and earn less this month."]
}, {
    "name": "Your Family Leisure",
    "desc": "How many fun outings for your family this month?",
    "options": [200, 100, 0],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/film.png", "http://simpleicon.com/wp-content/uploads/music-note-8.png", "http://simpleicon.com/wp-content/uploads/fruit_basket.png"],
    "optionShort": ["2 activities", "1 activity", "None"],
    "optionDesc": ["2 family activities, like eating out, movies, or a concert", "1 family activity, like a picnic, bowling, or local music show", "No family outings, maybe visiting nearby family, or a local park."]
}, {
    "name": "Family Leisure Fact",
    "desc": "Spending family time on leisure activities together is associated with greater emotional bonding, better communication, better school grades, and fewer behavioral problems.",
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
    "optionShort": ["Sure!", "No..."],
    "optionDesc": ["Cleats, shin pads, uniform, and ball. He's super excited.", "He does not participate. He's bummed and misses a chance to make new friends."]
}, {
    "name": "Your Laundry",
    "desc": "Where do you do laundry?",
    "options": [60, 30, 20],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/washing_machine.png","http://simpleicon.com/wp-content/uploads/backet.png","http://simpleicon.com/wp-content/uploads/shop-4.png"],
    "optionShort": ["Your own washer/dryer", "Shared laundry room", "Laundromat"],
    "optionDesc": ["Payment for your own washer and dryer in your home. Very convenient.", "Shared laundry room in your complex. It's pretty busy on weekends.", "You can walk to the local laundromat. But you have to wait around. And the dryers take forver."]
}, {
    "name": "Laundry Fact",
    "desc": "Basic chores like laundry can be difficult for those in poverty, with limited budgets and transportation.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/washing_machine_1.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "Your Savings",
    "desc": "Do you have any savings for unexpected expenses?",
    "options": [200, 100, 0],
    "set": null,
    "type": "normal",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/money-bag-4.png","http://simpleicon.com/wp-content/uploads/money-7.png", "http://simpleicon.com/wp-content/uploads/coin-money-7.png"],
    "optionShort": ["$200", "$100", "None"],
    "optionDesc": ["Small savings, for vacations or home projects.", "Tiny savings, for clothes and shopping.", "No savings after other expenses."]
}, {
    "name": "Savings Fact",
    "desc": "A savings reserve is often unavailable for those in poverty. Some families are one crisis away (car breakdown or medical bill) from losing their homes.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/money-5.png"],
    "optionShort": [],
    "optionDesc": []
}, {
    "name": "United Way Helps",
    "desc": "United Way raised $17 million for 154 charity programs that helped 284,000 people in the Charlotte area.",
    "options": [],
    "set": null,
    "type": "fact",
    "visited": false,
    "sectionImage": ["http://simpleicon.com/wp-content/uploads/slide_share.png"],
    "optionShort": [],
    "optionDesc": []
}]

export default povertyData;