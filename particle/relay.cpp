#include "application.h"

#if defined(ARDUINO) 
SYSTEM_MODE(SEMI_AUTOMATIC); 
#endif

int PIN = D7;

int relayToggle(String command) {
    if (command == "1") {
        digitalWrite(PIN, HIGH);
        return 1;
    } else if (command == "0") {
        digitalWrite(PIN, LOW);
        return 0;
    } else {
        return -1;
    }
}

void setup() {
   pinMode(PIN, OUTPUT);
   Particle.function("relay", relayToggle);
   digitalWrite(PIN, LOW);
}

void loop() {}
