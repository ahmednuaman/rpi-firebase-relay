#include "application.h"

#if defined(ARDUINO) 
SYSTEM_MODE(SEMI_AUTOMATIC); 
#endif

int RELAY_PIN = D7;

int relayToggle(String command) {
    if (command == "1") {
        digitalWrite(RELAY_PIN, HIGH);
        return 1;
    } else if (command == "0") {
        digitalWrite(RELAY_PIN, LOW);
        return 0;
    } else {
        return -1;
    }
}

void setup() {
   pinMode(RELAY_PIN, OUTPUT);
   Particle.function("relay", relayToggle);
   digitalWrite(RELAY_PIN, LOW);
}

void loop() {}
