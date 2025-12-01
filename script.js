// Game state
let currentSceneId = 'start';

// Progress mapping for each scene (percentage of game completion)
const sceneProgress = {
    'start': 0,
    'public_transport_choice': 15,
    'street_food_detour': 15,
    'tuk_tuk': 25,
    'cab': 25,
    'bus': 25,
    'feet_food': 25,
    'instant_noodles': 25,
    'get_to_office_at_9am': 45,
    'get_to_office_at_past_9am': 45,
    'go_to_other_building': 50,
    'conversation_stranger': 50,
    'bow_90_degrees': 55,
    'greet_with_a_handshake': 55,
    'say_namaste': 55,
    'give_him_a_hug': 55,
    'correct_him': 65,
    'laugh_at_him': 65,
    'ignore_it': 65,
    'hired': 75,
    'accept_the_dish': 85,
    'ask_teams_group_chat': 90,
    'ask_snapchat_group_chat': 95,
    'ask_whatsapp_group_chat': 80,
    'personal_questions': 85,
    'chai_time': 90,
    'leaving_time': 95,
    'final_success': 100,
    'bad_end_1': 100,
    'bad_end_2': 100,
    'bad_end_3': 100,
    'bad_end_4': 100,
    'bad_end_5': 100,
    'bad_end_6': 100,
    'bad_end_7': 100,
    'bad_end_8': 100,
    'bad_end_9': 100,
    'bad_end_10': 100,
    'bad_end_11': 100,
    'bad_end_12': 100
};

// Story scenes data
const scenes = {
    start: {
        id: "interview_morning",
        title: "The Interview Day",
        text: "It's your first day in India. Your goal is to get an internship in a Call Center in Bangalore. You have an interview planned at 9am. You have just woken up and it's 8am, you have more or less 1 hour of public transport to get there.",
        image: "images/start.jpg",
        choices: [
            { text: "You take public transport right away.", next: "public_transport_choice" },
            { text: "You take a detour to a street food avenue to eat something because you are dying from hunger.", next: "street_food_detour" }
        ]
    },
    public_transport_choice: {
        id: "public_transport_choice",
        title: "Choosing Your Transport",
        text: "You rush out of your accommodation and head to the nearest transport hub. The streets are already bustling with morning traffic. You need to choose your mode of transportation carefully - time is of the essence!",
        image: "images/public_transport.jpeg",
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
            { text: "Quickly grab a samosa cooked by an Indian's foot and fried with diesel", next: "feet_food" },
            { text: "Decide to buy instant noodles and warm it up in the microwave", next: "instant_noodles" }
        ]
    },
    tuk_tuk: {
        id: "tuk_tuk",
        title: "Tuk-Tuk Adventure",
        text: "You flag down a colorful tuk-tuk. The driver negotiates the price with enthusiasm. As you zip through Bangalore's busy streets, you realize this might be faster than expected, but also more unpredictable. You get in a car accident and there was no seatbelt on board. You are dead.",
        image: "images/tuk_tuk.png",
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
        text: "You hop on the local bus. It's crowded with commuters, but it's the most affordable option. The bus moves slowly through the morning rush, making several stops along the way. A pickpocket steals your phone and your wallet. You are broke.",
        image: "images/bus.jpg",
        choices: [
            { text: "Get back to your apartment", next: "bad_end_2" }
        ]
    },
    feet_food: {
        id: "feet_food",
        title: "Cultural Experience",
        text: "You quickly grab a samosa from a street vendor cooked with his feet and fried with diesel. It's horrible but you are hungry. Really bad idea, you get turista.",
        image: "images/feet_food.jpg",
        choices: [
            { text: "Shit your pants", next: "bad_end_3" }
        ]
    },
    instant_noodles: {
        id: "instant_noodles",
        title: "Quick stop",
        text: "You decide to sit down and enjoy a proper breakfast. The food is amazing - dosas, idlis, and spicy chutneys. You're thoroughly enjoying the experience, but when you check the time, you realize you might be running late!",
        image: "images/instant_noodles.jpg",
        choices: [
            { text: "Rush to the bus station", next: "bus" },
            { text: "Take a cab because you are already late", next: "get_to_office_at_past_9am" }
        ]
    },
    get_to_office_at_9am: {
        id: "get_to_office_at_9am",
        title: "It's 9am and you arrive at the office",
        text: "You arrive at the office at 9am. You are on time. You are punctual. You are a good employee. You are a good person. But the office is almost empty.",
        image: "images/get_to_office_at_9am.jpeg",
        choices: [
            { text: "You decide to try the next building in the boulevard. You might have chosen the wrong address", next: "go_to_other_building" },
            { text: "Start a conversation with a stranger in the office", next: "conversation_stranger" }
        ],
    },
    get_to_office_at_past_9am: {
        id: "get_to_office_at_past_9am",
        title: "It's past 9am and you arrive at the office.",
        text: "Don't worry, you are not the only one late. In India, when you say 9am, it can actually mean 9:30am or 10am. You run into your interviewer, you approach him in order to greet him.",
        image: "images/get_to_office_at_9am.jpeg",
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
        text: "You go to the other building. It's actually a Bollywood studio. You sit and watch some scenes from the next Indian blockbuster movie. Twenty minutes later, you are called by your interviewer. You return to the previous building.",
        image: "images/go_to_other_building.jpg",
        choices: [
            { text: "Return to the previous building", next: "get_to_office_at_past_9am" }
        ],
    },
    conversation_stranger: {
        id: "conversation_stranger",
        title: "Conversation with a stranger",
        text: "You start a conversation with a stranger in the office. Congratulations! You got a new friend, his name is Aditya. You ask him where the office you are looking for is, and where your interviewer's desk is. He takes your hand and leads you to the right place.",
        image: "images/conversation_stranger.jpg",
        choices: [
            { text: "Make a homophobic joke", next: "homophobic_joke" },
            { text: "Thank him", next: "get_to_office_at_past_9am" },
        ],
    },
    homophobic_joke: {
        id: "homophobic_joke",
        title: "Homophobic joke",
        text: "You make a homophobic joke. Aditya is offended by your joke. He asks you to leave the office.",
        image: "images/homophobic_joke.jpeg",
        choices: [
            { text: "Leave the office", next: "bad_end_5" }
        ],
    },
    bow_90_degrees: {
        id: "bow_90_degrees",
        title: "Bow at 90° angle",
        text: "You bow at a 90° angle. Your interviewer is disturbed by your racist behaviour. We are in India, not Japan.",
        image: "images/bow_90_degrees.jpeg",
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
        image: "images/greet_with_a_handshake.jpeg",
        choices: [
            { text: "Correct him", next: "correct_him" },
            { text: "Laugh at him", next: "laugh_at_him" },
            { text: "Ignore it", next: "ignore_it" }
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
            { text: "Ignore it", next: "ignore_it" }
        ]
    },
    correct_him: {
        id: "correct_him",
        title: "Correct him",
        text: "You correct him. He is the boss. He decides to end the interview right away.",
        image: "images/correct_him.jpg",
        choices: [
            { text: "You are thrown out of the office", next: "bad_end_6" }
        ]
    },
    laugh_at_him: {
        id: "correct_him",
        title: "Correct him",
        text: "You correct him. He is the boss. He decides to end the interview right away.",
        image: "images/homophobic_joke.jpg",
        choices: [
            { text: "You are thrown out of the office", next: "bad_end_6" }
        ] 
    },
    ignore_it: {
        id: "ignore_it",
        title: "Ignore it",
        text: "You ignore it. Good idea, because he is the boss. He asks for your CV. A good CV in India must include some specifications: Include personal details such as full name, phone number, email, and often city/state (postal address optional).\n\nAdd a short professional summary at the top highlighting skills and career goals.\n\nMention technical skills clearly, especially IT tools, software, or domain-specific expertise.\n\nDetail academic qualifications with percentages/GPAs, universities, and years of completion.\n\nList projects and internships, as they are highly valued, especially for fresh graduates.\n\nInclude certifications, online courses, and relevant training programs.\n\nAdd extracurricular activities or achievements if they strengthen the profile.\n\nKeep the format clean and structured, usually 1–2 pages depending on experience.",
        image: "images/ignore_it.jpeg",
        choices: [
            { text: "CV 1", next: "bad_end_7", pdf: "images/CV_1.pdf" },
            { text: "CV 2", next: "hired", pdf: "images/CV_2.pdf" }
        ],
        showPdfs: true
    },
    hired: {
        id: "hired",
        title: "You are hired",
        text: "Congratulations! You are hired. You start your internship right now. A kind coworker offers you a traditional dish that she cooked: chicken curry, but you are vegan.",
        image: "images/curry.jpg",
        choices: [
            { text: "Refuse the dish", next: "bad_end_8" },
            { text: "Accept the dish", next: "accept_the_dish" }
        ]
    },
    accept_the_dish: {
        id: "accept_the_dish",
        title: "Accept the dish",
        text: "You accept the dish. It's delicious. You have a new friend! You ask her the link for the company's group chat.",
        image: "images/accept_the_dish.jpeg",
        choices: [
            { text: "Ask for the Teams group chat", next: "ask_teams_group_chat" },
            { text: "Ask for the Whatsapp group chat", next: "ask_whatsapp_group_chat" },
            { text: "Ask for the Snapchat group chat", next: "ask_snapchat_group_chat" }
        ]
    },
    ask_snapchat_group_chat: {
        id: "ask_snapchat_group_chat",
        title: "Ask for the Snapchat group chat",
        text: "You ask for the Snapchat group chat. Your friend laughs and says Snapchat is usually used for casual, personal stories rather than company updates. She still shares the link if you want to join, but warns that the main work communications happen on Whatsapp.",
        image: "images/ask_snapchat_group_chat.png",
        choices: [
            { text: "Ask for the Whatsapp group chat", next: "ask_whatsapp_group_chat" },
            { text: "Join the Snapchat group anyway", next: "ask_whatsapp_group_chat" }
        ]
    },
    ask_teams_group_chat: {
        id: "ask_teams_group_chat",
        title: "Ask for the Teams group chat",
        text: "You ask for the Teams group chat. Your friend tells you that in India, they usually use Whatsapp for group chats.",
        image: "images/ask_teams_group_chat.png",
        choices: [
            { text: "Ask for the Whatsapp group chat", next: "ask_whatsapp_group_chat" }
        ]
    },
    ask_whatsapp_group_chat: {
        id: "ask_whatsapp_group_chat",
        title: "Ask for the Whatsapp group chat",
        text: "You ask for the Whatsapp group chat. You join the group chat. Perfect! Now you're officially part of the team. A few hours into your first day, your colleague Priya comes to your desk with a warm smile.",
        image: "images/hired.jpeg",
        choices: [
            { text: "Continue working", next: "personal_questions" }
        ]
    },
    personal_questions: {
        id: "personal_questions",
        title: "Getting to know you... really well",
        text: "Priya starts asking you questions: 'So, are you married? How much is your salary in France? Why aren't you married yet? Do your parents approve of you working abroad? How old are you exactly?' In India, these personal questions are a sign of genuine interest and care, not an invasion of privacy like in the West.",
        image: "images/conversation_stranger.jpg",
        choices: [
            { text: "Tell her it's none of her business and ask her to respect your privacy", next: "bad_end_10" },
            { text: "Answer politely and ask her the same questions back", next: "chai_time" },
            { text: "Report her to HR for harassment", next: "bad_end_11" }
        ]
    },
    chai_time: {
        id: "chai_time",
        title: "Chai Time!",
        text: "It's 4pm and suddenly everyone stops working. A chai wallah appears with a tray of steaming cups of masala chai. Your colleague offers you one. In India, chai breaks are sacred team bonding moments. Refusing is like saying you don't want to be part of the team.",
        image: "images/curry.jpg",
        choices: [
            { text: "Say 'No thanks, I only drink organic matcha from Whole Foods'", next: "bad_end_12" },
            { text: "Accept the chai and enjoy the break with your colleagues", next: "leaving_time" },
            { text: "Accept but immediately go back to your computer to keep working", next: "bad_end_10" }
        ]
    },
    leaving_time: {
        id: "leaving_time",
        title: "End of the day?",
        text: "It's 6pm, your official end time according to your contract. You notice nobody is leaving. Some colleagues are still working, others are chatting. Your manager is still at his desk. In Western culture, leaving on time is normal. In India, leaving before your boss might be seen as lack of dedication.",
        image: "images/get_to_office_at_9am.jpeg",
        choices: [
            { text: "Pack your bag loudly and announce 'Well, I'm done for today! Work-life balance, am I right?'", next: "bad_end_9" },
            { text: "Stay a bit longer, chat with colleagues, and leave when others start leaving", next: "final_success" },
            { text: "Send an email to HR complaining about unpaid overtime", next: "bad_end_11" }
        ]
    },
    final_success: {
        id: "final_success",
        title: "You survived your first day!",
        text: "Congratulations! You successfully navigated the cultural differences of an Indian workplace. You learned that personal questions mean people care, chai breaks are sacred, and flexibility with time goes both ways. Your colleagues love you, your boss is impressed, and you've made friends for life. Welcome to India!",
        image: "images/hired.jpeg",
        choices: [],
        ending: "good"
    },
    give_him_a_hug: {
        id: "give_him_a_hug",
        title: "Give him a hug",
        text: "You give him a hug. Your interviewer is disgusted by your behaviour. He asks you to leave the office.",
        image: "images/homophobic_joke.jpg",
        choices: [
            { text: "Leave the office", next: "bad_end_4" }
        ]
    },
    bad_end_1: {
        id: "bad_end_1",
        title: "You are dead",
        text: "You are dead. You are buried in the mud. You won't obviously attend your interview. You are not hired.",
        image: "images/bad_end_1.jpeg",
        choices: [],
        ending: "bad"
    },
    bad_end_2: {
        id: "bad_end_2",
        title: "You are broke",
        text: "You are broke. You won't obviously attend your interview. You are not hired.",
        image: "images/bad_end_2.jpeg",
        choices: [],
        ending: "bad"
    },
    bad_end_3: {
        id: "bad_end_3",
        title: "You have turista",
        text: "You have turista. You won't obviously attend your interview. You are not hired.",
        image: "images/bad_end_3.gif",
        choices: [],
        ending: "bad"
    },
    bad_end_4: {
        id: "bad_end_4",
        title: "You are thrown out of the office",
        text: "You are thrown out of the office. You are not hired.",
        image: "images/bad_end_4.jpeg",
        choices: [],
        ending: "bad"
    },
    bad_end_5: {
        id: "bad_end_5",
        title: "You are thrown out of the office because of your homophobic joke",
        text: "In India, Indians often take their friends' hands. You are not hired.",
        image: "images/bad_end_5.jpeg",
        choices: [],
        ending: "bad"
    },
    bad_end_6: {
        id: "bad_end_6",
        title: "You are thrown out of the office because you mention his fault",
        text: "In Indian companies, the boss is always right. You are not hired.",
        image: "images/bad_end_6.jpg",
        choices: [],
        ending: "bad"
    },
    bad_end_7: {
        id: "bad_end_7",
        title: "You are not hired",
        text: "You are not hired because your CV isn't India-friendly.",
        image: "images/bad_end_7.jpeg",
        choices: [],
        ending: "bad"
    },
    bad_end_8: {
        id: "bad_end_8",
        title: "You are fired",
        text: "It is really impolite to refuse a coworker's gift. You are fired.",
        image: "images/bad_end_8.jpeg",
        choices: [],
        ending: "bad"
    },
    bad_end_9: {
        id: "bad_end_9",
        title: "Work-Life Balance Champion",
        text: "You packed your bag at exactly 6:00:00 PM like a Swiss clock. Your manager watched you leave with the disappointment of a thousand Indian mothers. The next day, you found out you've been assigned to the 'special projects' team. The project? Counting paperclips in the basement. Forever. You are not fired, but you wish you were.",
        image: "images/bad_end_2.jpeg",
        choices: [],
        ending: "bad"
    },
    bad_end_10: {
        id: "bad_end_10",
        title: "The Cold Westerner",
        text: "You treated your colleagues' warmth like a GDPR violation. In India, being reserved is interpreted as being arrogant or unfriendly. The office WhatsApp group is now suspiciously quiet when you message. Lunch invitations mysteriously stopped. You eat alone while everyone else shares tiffin boxes and laughs. You technically still have a job, but you've become the office ghost.",
        image: "images/bad_end_2.jpeg",
        choices: [],
        ending: "bad"
    },
    bad_end_11: {
        id: "bad_end_11",
        title: "HR's Favorite Person",
        text: "You reported everything to HR: the personal questions, the chai breaks, the flexible hours. HR forwarded your complaints to your manager. Your manager forwarded them to the entire office. You are now known as 'HR wala' and people scatter like pigeons when you approach. Your LinkedIn is about to get very active because you'll need it.",
        image: "images/bad_end_2.jpeg",
        choices: [],
        ending: "bad"
    },
    bad_end_12: {
        id: "bad_end_12",
        title: "The Chai Refuser",
        text: "You refused chai. CHAI. The sacred elixir that binds Indian offices together. The chai wallah looked at you like you insulted his ancestors. Your colleagues gasped. Someone dropped their samosa. The office fell silent. Legend says they still talk about 'the foreigner who refused chai' during every chai break. Your career in India ended before your cup of organic matcha could brew.",
        image: "images/bad_end_2.jpeg",
        choices: [],
        ending: "bad"
    }
};

// Update progress bar
function updateProgress(sceneId) {
    const progress = sceneProgress[sceneId] || 0;
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    
    if (progressBar && progressPercentage) {
        // Animate progress bar
        progressBar.style.width = progress + '%';
        progressPercentage.textContent = progress + '%';
        
        // Update milestones
        const milestones = document.querySelectorAll('.milestone');
        milestones.forEach((milestone, index) => {
            const milestoneValue = index * 25; // 0%, 25%, 50%, 75%, 100%
            if (progress >= milestoneValue) {
                milestone.classList.add('active');
            } else {
                milestone.classList.remove('active');
            }
        });
        
        // Add a subtle animation effect when progress increases
        progressBar.style.animation = 'none';
        setTimeout(() => {
            progressBar.style.animation = '';
        }, 10);
    }
}

// Initialize game
function initGame() {
    currentSceneId = 'start';
    updateProgress(currentSceneId);
    displayScene(currentSceneId);
}

// Display a scene
function displayScene(sceneId) {
    const scene = scenes[sceneId];
    
    if (!scene) {
        console.error(`Scene ${sceneId} not found!`);
        return;
    }
    
    // Ensure we're at the top (no scrolling needed as layout fits on screen)
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    // Update progress bar
    updateProgress(sceneId);
    
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
    } else if (scene.showPdfs) {
        // Special handling for CV selection scene - display PDFs in large format
        const pdfsContainer = document.createElement('div');
        pdfsContainer.className = 'pdfs-container';
        
        scene.choices.forEach((choice, index) => {
            const pdfWrapper = document.createElement('div');
            pdfWrapper.className = 'pdf-wrapper';
            
            const pdfTitle = document.createElement('h3');
            pdfTitle.className = 'pdf-title';
            pdfTitle.textContent = choice.text;
            pdfWrapper.appendChild(pdfTitle);
            
            const pdfViewer = document.createElement('iframe');
            pdfViewer.src = choice.pdf;
            pdfViewer.className = 'pdf-viewer';
            pdfViewer.setAttribute('type', 'application/pdf');
            pdfViewer.setAttribute('allowfullscreen', 'true');
            pdfWrapper.appendChild(pdfViewer);
            
            const pdfButton = document.createElement('button');
            pdfButton.className = 'choice-button pdf-choice-button';
            pdfButton.textContent = `Choose ${choice.text}`;
            pdfButton.onclick = () => {
                currentSceneId = choice.next;
                displayScene(choice.next);
            };
            pdfWrapper.appendChild(pdfButton);
            
            pdfsContainer.appendChild(pdfWrapper);
        });
        
        choicesArea.appendChild(pdfsContainer);
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

