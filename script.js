// Game state
let currentSceneId = 'start';

// Story scenes data
const scenes = {
    start: {
        id: "interview_morning",
        title: "The Interview Day",
        text: "It's your first day in India. Your goal is to get an internship in a Call Center in Bangalore. You have an interview planned at 9am. You have just woken up and It's 8am, you have more or less 1 hour of public transport to get there.",
        image: "images/interview_morning.jpg",
        choices: [
            { text: "You take public transport right away.", next: "public_transport_choice" },
            { text: "You take a detour to a street food avenue to eat something because you are dying from hunger.", next: "street_food_detour" }
        ]
    },
    public_transport_choice: {
        id: "public_transport_choice",
        title: "Choosing Your Transport",
        text: "You rush out of your accommodation and head to the nearest transport hub. The streets are already bustling with morning traffic. You need to choose your mode of transportation carefully - time is of the essence!",
        image: "images/public_transport.jpg",
        choices: [
            { text: "Take a tuk-tuk", next: "tuk_tuk" },
            { text: "Take a cab", next: "cab" },
            { text: "Take a bus", next: "bus" }
        ]
    },
    street_food_detour: {
        id: "street_food_detour",
        title: "Street Food Avenue",
        text: "Your stomach is growling loudly, and you know you won't be able to focus on the interview if you're hungry. You decide to make a quick stop at a nearby street food avenue. The aroma of spices fills the air, but you need to be fast!",
        image: "images/street_food.jpg",
        choices: [
            { text: "Quickly grab a samosa cooked by an indian's foot and fried with diesel", next: "feet_food" },
            { text: "Decide to buy instant noodles and warm it up in the microwave", next: "instant_noodles" }
        ]
    },
    tuk_tuk: {
        id: "tuk_tuk",
        title: "Tuk-Tuk Adventure",
        text: "You flag down a colorful tuk-tuk. The driver negotiates the price with enthusiasm. As you zip through Bangalore's busy streets, you realize this might be faster than expected, but also more unpredictable. You get in car accident and there was no seatbelt on board. You are dead.",
        image: "images/tuk_tuk.jpg",
        choices: [
            { text: "Get buried in the mud", next: "bad_end_1" }
        ]
    },
    cab: {
        id: "cab",
        title: "Cab Ride",
        text: "You book a cab through an app. The driver is professional and the car is air-conditioned. The ride is comfortable, but the traffic in Bangalore is notorious. You watch the clock nervously.",
        image: "images/cab.jpg",
        choices: [
            { text: "Continue to the interview", next: "get_to_office_at_9am" }
        ]
    },
    bus: {
        id: "bus",
        title: "Bus Journey",
        text: "You hop on the local bus. It's crowded with commuters, but it's the most affordable option. The bus moves slowly through the morning rush, making several stops along the way. You get stolen your phone and your wallet by a pickpocket. You are broke.",
        image: "images/bus.jpg",
        choices: [
            { text: "Get back to your appartment", next: "bad_end_2" }
        ]
    },
    feet_food: {
        id: "feet_food",
        title: "Cultural Experience",
        text: "You quickly grab a samosa from a street vendor cooked with his feet and fried with diesel. It's horrible but you are hungry. Really bad idea, you get turista",
        image: "images/quick_food.jpg",
        choices: [
            { text: "Shit your pants", next: "bad_end_3" }
        ]
    },
    instant_noodles: {
        id: "instant_noodles",
        title: "Quick stop",
        text: "You decide to sit down and enjoy a proper breakfast. The food is amazing - dosas, idlis, and spicy chutneys. You're thoroughly enjoying the experience, but when you check the time, you realize you might be running late!",
        image: "images/slow_food.jpg",
        choices: [
            { text: "Rush to the bus station", next: "bus" },
            { text: "Take a cab because you are already late", next: "get_to_office_at_past_9am" }
        ]
    },
    get_to_office_at_9am: {
        id: "get_to_office_at_9am",
        title: "It's 9am and you arrive at the office",
        text: "You arrive at the office at 9am. You are on time. You are punctual. You are a good employee. You are a good person. But the office is almost empty.",
        image: "images/get_to_office_at_9am.jpg",
        choices: [
            { text: "You decide to try the next building in the boulevard. You might have chosen the wrong address", next: "go_to_other_building" },
            { text: "Start a conversation with a stranger in the office", next: "conversation_stranger" }
        ],
    },
    get_to_office_at_past_9am: {
        id: "get_to_office_at_past_9am",
        title: "It's past 9am and you arrive at the office.",
        text: "Don't worry, you are not the only one late. In India, when you say 9am, it can actually mean 9:30am or 10am. You run by your interviewer, you approach him in order to greet him.",
        image: "images/get_to_office_at_past_9am.jpg",
        choices: [
            { text: "Bow at 90° angle", next: "bow_90_degrees" },
            { text: "Greet him with a handshake", next: "greet_with_a_handshake" },
            { text: "Say namaste", next: "say_namaste" },
            { text: "Give him a hug", next: "give_him_a_hug" }
        ],
    },
    go_to_other_building: {
        id: "go_to_other_building",
        title: "Go to the other building",
        text: "You go to the other building. It's actually a Bollywood studio. You sit and watch some scene from the next indian blockbuster movie. Twenty minutes later, you are called by your interviewer. You return to the previous building.",
        image: "images/go_to_other_building.jpg",
        choices: [
            { text: "Return to the previous building", next: "get_to_office_at_past_9am" }
        ],
    },
    conversation_stranger: {
        id: "conversation_stranger",
        title: "Conversation with a stranger",
        text: "You start a conversation with a stranger in the office. Congratulations ! You got a new friend, his name is Aditya. You ask him where is the office you are looking for, and where is your interviewer desk. He takes your hand and leads you to th right place.",
        image: "images/conversation_stranger.jpg",
        choices: [
            { text: "Make an homophobic joke", next: "homophobic_joke" },
            { text: "Thank him", next: "get_to_office_at_past_9am" },
        ],
    },
    homophobic_joke: {
        id: "homophobic_joke",
        title: "Homophobic joke",
        text: "You make an homophobic joke. Aditya is offended by your joke. He asks you to leave the office.",
        image: "images/homophobic_joke.jpg",
        choices: [
            { text: "Leave the office", next: "bad_end_5" }
        ],
    },
    bow_90_degrees: {
        id: "bow_90_degrees",
        title: "Bow at 90° angle",
        text: "You bow at 90° angle. Your interviewer is disturbed by your racist behaviour. We are in India, not Japan.",
        image: "images/bow_90_degrees.jpg",
        choices: [
            { text: "Apologize and greet him with a handshake", next: "greet_with_a_handshake" },
            { text: "Apologize and say namaste", next: "say_namaste" },
            { text: "Apologize and give him a hug", next: "give_him_a_hug" }
        ],
    },
    greet_with_a_handshake: {
        id: "greet_with_a_handshake",
        title: "Greet him with a handshake",
        text: "You greet him with a handshake. Your interviewer is impressed by your polite behaviour. He asks you to sit down and you start the interview. He makes a mistake saying your name.",
        image: "images/greet_with_a_handshake.jpg",
        choices: [
            { text: "Correct him", next: "correct_him" },
            { text: "Laugh at him", next: "laugh_at_him" },
            { text: "Ignore It", next: "ignore_it" }
        ]
    },
    say_namaste: {
        id: "say_namaste",
        title: "Say namaste",
        text: "You say namaste. Your interviewer is impressed by your polite behaviour. He asks you to sit down and you start the interview. He makes a mistake saying your name.",
        image: "images/say_namaste.jpg",
        choices: [
            { text: "Correct him", next: "correct_him" },
            { text: "Laugh at him", next: "laugh_at_him" },
            { text: "Ignore It", next: "ignore_it" }
        ]
    },
    correct_him: {
        id: "correct_him",
        title: "Correct him",
        text: "You correct him. He is the boss. I decides to end the interview right away.",
        image: "images/correct_him.jpg",
        choices: [
            { text: "You are thrown out of the office", next: "bad_end_6" }
        ]
    },
    laugh_at_him: {
        id: "correct_him",
        title: "Correct him",
        text: "You correct him. He is the boss. He decides to end the interview right away.",
        image: "images/correct_him.jpg",
        choices: [
            { text: "You are thrown out of the office", next: "bad_end_6" }
        ] 
    },
    ignore_it: {
        id: "ignore_it",
        title: "Ignore It",
        text: "You ignore it. Good idea, because he is the boss. He asks for your CV.",
        image: "images/ignore_it.jpg",
        choices: [
            { text: "CV 1", next: "bad_end_7", image: "images/cv_1.jpg" },
            { text: "CV 2", next: "hired", image: "images/cv_2.jpg" }
        ]
    },
    hired: {
        id: "hired",
        title: "You are hired",
        text: "Congratulations ! You are hired. You start your internship right now. A kind coworker offers you a traditional dish that se cooked: chicken curry, but you are vegan.",
        image: "images/hired.jpg",
        choices: [
            { text: "Refuse the dish", next: "bad_end_8" },
            { text: "Accept the dish", next: "accept_the_dish" }
        ]
    },
    accept_the_dish: {
        id: "accept_the_dish",
        title: "Accept the dish",
        text: "You accept the dish. It's delicious. You have a new friend ! You ask her the link for the company's group chat.",
        image: "images/accept_the_dish.jpg",
        choices: [
            { text: "Ask for the Teams group chat", next: "ask_teams_group_chat" },
            { text: "Ask for the Whatsapp group chat", next: "ask_whatsapp_group_chat" }
        ]
    },
    ask_teams_group_chat: {
        id: "ask_teams_group_chat",
        title: "Ask for the Teams group chat",
        text: "You ask for the Teams group chat. Your friend tells you that in India, they usually use Whatsapp for group chats.",
        image: "images/ask_teams_group_chat.jpg",
        choices: [
            { text: "Ask for the Whatsapp group chat", next: "ask_whatsapp_group_chat" }
        ]
    },
    ask_whatsapp_group_chat: {
        id: "ask_whatsapp_group_chat",
        title: "Ask for the Whatsapp group chat",
        text: "You ask for the Whatsapp group chat. You join the group chat. You start to work. Congratulations ! You got your internship without being fired!",
        image: "images/ask_whatsapp_group_chat.jpg",
        choices: [],
        ending: "good"
    },
    give_him_a_hug: {
        id: "give_him_a_hug",
        title: "Give him a hug",
        text: "You give him a hug. Your interviewer is disgusted by your behaviour. He asks you to leave the office.",
        image: "images/give_him_a_hug.jpg",
        choices: [
            { text: "Leave the office", next: "bad_end_4" }
        ]
    },
    bad_end_1: {
        id: "bad_end_1",
        title: "You are dead",
        text: "You are dead. You are buried in the mud. You wont abviously attend to your interview. You are not hired.",
        image: "images/bad_end_1.jpg",
        choices: [],
        ending: "bad"
    },
    bad_end_2: {
        id: "bad_end_2",
        title: "You are broke",
        text: "You are broke. You wont abviously attend to your interview. You are not hired.",
        image: "images/bad_end_2.jpg",
        choices: [],
        ending: "bad"
    },
    bad_end_3: {
        id: "bad_end_3",
        title: "You are turista",
        text: "You have turista. You wont abviously attend to your interview. You are not hired.",
        image: "images/bad_end_3.jpg",
        choices: [],
        ending: "bad"
    },
    bad_end_4: {
        id: "bad_end_4",
        title: "You are thrown out of the office",
        text: "You are thrown out of the office. You are not hired.",
        image: "images/bad_end_4.jpg",
        choices: [],
        ending: "bad"
    },
    bad_end_5: {
        id: "bad_end_5",
        title: "You are thrown out of the office because of your homophobic joke",
        text: "In India, Indian often take there friends' hand. You are not hired",
        image: "images/bad_end_5.jpg",
        choices: [],
        ending: "bad"
    },
    bad_end_6: {
        id: "bad_end_6",
        title: "You are thrown out of the office because you mention his fault",
        text: "In indian companies, the boss is always right. You are not hired.",
        image: "images/bad_end_6.jpg",
        choices: [],
        ending: "bad"
    },
    bad_end_7: {
        id: "bad_end_7",
        title: "You are not hired",
        text: "You are not hired because your CV isn't India friendly.",
        image: "images/bad_end_7.jpg",
        choices: [],
        ending: "bad"
    },
    bad_end_8: {
        id: "bad_end_8",
        title: "You are fired",
        text: "It is really impolite to refuse a coworker's gift. You are fired.",
        image: "images/bad_end_8.jpg",
        choices: [],
        ending: "bad"
    }
};

// Initialize game
function initGame() {
    currentSceneId = 'start';
    displayScene(currentSceneId);
}

// Display a scene
function displayScene(sceneId) {
    const scene = scenes[sceneId];
    
    if (!scene) {
        console.error(`Scene ${sceneId} not found!`);
        return;
    }
    
    // Scroll to top smoothly for better mobile UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update title
    document.getElementById('scene-title').textContent = scene.title;
    
    // Update text
    document.getElementById('scene-text').textContent = scene.text;
    
    // Update image
    const imageElement = document.getElementById('scene-image');
    if (scene.image && scene.image !== "") {
        imageElement.src = scene.image;
        imageElement.alt = scene.title;
    } else {
        imageElement.src = "";
    }
    
    // Update choices
    const choicesArea = document.getElementById('choices-area');
    choicesArea.innerHTML = '';
    
    // Check if this is an ending
    if (scene.choices.length === 0 || scene.ending) {
        // Display end message
        const endMessage = document.createElement('div');
        endMessage.className = `end-message ${scene.ending || 'neutral'}`;
        
        let message = "End of game";
        if (scene.ending === "good") {
            message = "🎉 Congratulations! You've had a successful day!";
        } else if (scene.ending === "bad") {
            message = "😔 This didn't go as well as hoped. But every day is a learning opportunity!";
        } else {
            message = "📝 End of day. You've learned something valuable for tomorrow!";
        }
        
        endMessage.textContent = message;
        choicesArea.appendChild(endMessage);
        
        // Add restart button
        const restartButton = document.createElement('button');
        restartButton.className = 'restart-button';
        restartButton.textContent = '🔄 Restart Game';
        restartButton.onclick = initGame;
        choicesArea.appendChild(restartButton);
    } else {
        // Display choice buttons
        scene.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            
            // Create button content container
            const buttonContent = document.createElement('div');
            buttonContent.className = 'choice-button-content';
            
            // Add image if it exists
            if (choice.image && choice.image !== "") {
                const choiceImage = document.createElement('img');
                choiceImage.src = choice.image;
                choiceImage.alt = choice.text;
                choiceImage.className = 'choice-image';
                buttonContent.appendChild(choiceImage);
            }
            
            // Add text
            const buttonText = document.createElement('span');
            buttonText.className = 'choice-text';
            buttonText.textContent = choice.text;
            buttonContent.appendChild(buttonText);
            
            button.appendChild(buttonContent);
            
            button.onclick = () => {
                currentSceneId = choice.next;
                displayScene(choice.next);
            };
            choicesArea.appendChild(button);
        });
    }
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', initGame);

