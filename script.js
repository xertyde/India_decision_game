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
        text: "You greet him with a handshake. Your interviewer is impressed by your polite behaviour. He asks you to sit down and you start the interview.",
        image: "images/greet_with_a_handshake.jpg",
        choices: []
    },
    say_namaste: {
        id: "say_namaste",
        title: "Say namaste",
        text: "You say namaste. Your interviewer is impressed by your polite behaviour. He asks you to sit down and you start the interview.",
        image: "images/say_namaste.jpg",
        choices: []
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
        text: "You are dead. You are buried in the mud. You are dead. You are buried in the mud. You are dead. You are buried in the mud. You are dead. You are buried in the mud. You are dead. You are buried in the mud. You are dead. You are buried in the mud.",
        image: "images/bad_end_1.jpg",
        choices: [],
        ending: "bad"
    },
    bad_end_2: {
        id: "bad_end_2",
        title: "You are broke",
        text: "You are broke. You are broke. You are broke. You are broke. You are broke. You are broke. You are broke. You are broke. You are broke. You are broke. You are broke. You are broke.",
        image: "images/bad_end_2.jpg",
        choices: [],
        ending: "bad"
    },
    bad_end_3: {
        id: "bad_end_3",
        title: "You are turista",
        text: "You have turista. You have turista. You have turista. You have turista. You have turista. You have turista. You have turista. You have turista. You have turista. You have turista. You have turista.",
        image: "images/bad_end_3.jpg",
        choices: [],
        ending: "bad"
    },
    bad_end_4: {
        id: "bad_end_4",
        title: "You are thrown out of the office",
        text: "You are thrown out of the office. You are thrown out of the office. You are thrown out of the office. You are thrown out of the office. You are thrown out of the office. You are thrown out of the office. You are thrown out of the office. You are thrown out of the office. You are thrown out of the office. You are thrown out of the office. You are thrown out of the office.",
        image: "images/bad_end_4.jpg",
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
            button.textContent = choice.text;
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

