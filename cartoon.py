import random
import time

# List of mood responses
moods = [
    "I'm feeling like a pizza... Crusty and cheesy!",
    "I am super happy! I just found a bug... and fixed it!",
    "I'm in a 'doesn't even know what day it is' kind of mood.",
    "I just ran 10 lines of code without errors. I'm invincible!",
    "I think my code is broken... I'm just gonna pretend nothing happened.",
    "I have so many bugs... But they're 'features', right?",
    "I am exhausted... like a computer with 0% battery.",
]

# Function to detect mood
def detect_mood():
    print("Detecting your mood... Please wait.")
    time.sleep(2)
    
    # Randomly pick a mood response
    mood = random.choice(moods)
    print("Mood Detected:", mood)

# Start the program
print("Hello! I am your mood detector. Type anything to start.")
input()  # Wait for user input to "activate" mood detector
detect_mood()
